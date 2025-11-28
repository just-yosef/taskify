import { GridContainer, TitleSection } from "@/app/(shared)/_components";
import React from "react";
import { fakeReviews } from "../constants";
import { Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
type Review = {
  id: string;
  clientName: string;
  clientAvatar: string;
  rating: number;
  comment: string;
  projectTitle: string;
  date: string;
};

const Reviews = () => {
  return (
    <>
      <TitleSection text="Reviews" />
      <GridContainer>
        {fakeReviews.map((el) => (
          <ReviewItem review={el} key={el.id} />
        ))}
      </GridContainer>
    </>
  );
};

export default Reviews;

export function ReviewItem({ review }: { review: Review }) {
  const { clientName, clientAvatar, rating, comment, projectTitle, date } =
    review;
  return (
    <Card className="border-teal py-4">
      <CardHeader className="flex flex-row items-center gap-3 border-b border-b-[var(--color-teal)]">
        <img
          src={clientAvatar}
          alt={clientName}
          className="w-10 h-10 rounded-full object-cover border"
        />
        <div>
          <CardTitle className="text-base font-semibold text-gray-800">
            {clientName}
          </CardTitle>
          <p className="text-xs text-gray-500">
            {new Date(date).toDateString()}
          </p>
        </div>
      </CardHeader>

      <CardContent>
        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={
                i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
              }
            />
          ))}
        </div>

        <p className="text-sm text-gray-700 mb-3 leading-relaxed">{comment}</p>

        <p className="text-xs text-gray-500">
          Project:
          <span className="font-medium text-gray-700">{projectTitle}</span>
        </p>
      </CardContent>
    </Card>
  );
}
