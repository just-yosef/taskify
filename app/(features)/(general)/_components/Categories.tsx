import { GridContainer, TitleSection } from "@/app/(shared)/_components";
import React from "react";
import { categories } from "../constants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const Categories = () => {
  return (
    <>
      <TitleSection text="Categories" translationKey="categories" />
      <GridContainer>
        {categories.map((cat) => (
          <Link href={`/category/${cat.id}`}>
            <Card key={cat.title} className="border-rose">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 ">
                  <span className="size-10 bg-rose-200 rounded-full flex justify-center items-center text-rose">
                    {<cat.icon size={18} />}
                  </span>
                  <h3 className="text-rose">{cat.title}</h3>
                </CardTitle>
              </CardHeader>
              <CardContent className="-mt-4">
                <div className="flex h-[220px] bg-rose-50 rounded-lg" />
              </CardContent>
            </Card>
          </Link>
        ))}
      </GridContainer>
    </>
  );
};

export default Categories;
