import {
  GridContainer,
  TitleSection,
  WraningMessage,
} from "@/app/(shared)/_components";
import React from "react";
import { categories } from "../../constants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X } from "lucide-react";

const CategoryPage = async ({ id }: { id: number }) => {
  const result = categories.filter((item) => item.id == id);
  return (
    <div>
      <TitleSection text={result[0].title} />
      {!result[0].services?.length && (
        <WraningMessage icon={X} variant="rose" text="No Service Avillable" />
      )}
      <GridContainer distance="sm">
        {result[0]!.services?.map((item) => (
          <Card key={item.title} className="border-teal !px-0">
            <CardHeader className="px-0">
              <CardTitle className="flex items-center gap-2 border-teal border-transparent pb-3 border-b-teal-600 border-b-2 px-5">
                <h3 className="text-teal">{item.title}</h3>
              </CardTitle>
            </CardHeader>
            <CardContent className="-mt-4">
              <div className="flex h-[220px] bg-teal-50 rounded-lg mb-2" />
              <div className="flex items-center gap-2 my-2">
                <span className="size-8 rounded-full bg-teal-50 border-teal" />
                <h5 className="text-teal">{item.freelancerName}</h5>
              </div>
              <b> ${item.price} </b>
              <div> {item.duration} </div>
            </CardContent>
          </Card>
        ))}
      </GridContainer>
    </div>
  );
};

export default CategoryPage;
