import React from "react";
import type { OfferItemProps } from "../types/client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BadgeDollarSign, Clock2, Tag } from "lucide-react";
import OfferDetails from "./OfferDetails";

const OfferItem = ({
  offer,
  onAccept,
  onReject,
  showActions = true,
}: OfferItemProps) => {
  if (!offer) return null;
  return (
    <Card className="border-peach py-4 gap-4">
      <CardHeader>
        <span className="size-10 bg-peach-soft flex justify-center items-center rounded-full">
          <Tag className="text-peach" />
        </span>
        <CardTitle className="text-base text-gray-800">
          New Porposal From
          <span className="mx-1 font-bold"> {offer.freelancerName} </span>
          To Project
          <span className="text-blue-600"> “{offer.projectTitle}” </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <p className="text-sm text-gray-500 flex gap-2 items-center">
            <BadgeDollarSign size={24} className="text-green-600" />
            Budget:
            <span className="font-semibold text-gray-700">{offer.price}$</span>
          </p>
          <span className="text-sm text-gray-500 flex gap-2 items-center mt-1 ml-0">
            <Clock2 size={22} />
            Duration: {offer.duration} Days
          </span>
        </div>

        {showActions && (
          <div className="mt-3 md:mt-0 flex flex-wrap flex-col gap-2">
            {onAccept && (
              <Button
                size="sm"
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
                onClick={() => onAccept(offer.id)}
              >
                قبول
              </Button>
            )}

            {onReject && (
              <Button
                size="sm"
                className="bg-rose-600 hover:bg-rose-700 text-white"
                onClick={() => onReject(offer.id)}
              >
                رفض
              </Button>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <OfferDetails {...offer}  />
      </CardFooter>
    </Card>
  );
};

export default OfferItem;
