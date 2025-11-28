import { GridContainer, TitleSection } from "@/app/(shared)/_components";
import React from "react";
import { categories } from "../constants";
import Link from "next/link";
import CardGridItem from "@/app/(shared)/_components/CardGridItem";

const Categories = () => {
  return (
    <>
      <TitleSection text="Categories" translationKey="categories" />
      <GridContainer>
        {categories.map((cat) => (
          <Link href={`/category/${cat.id}`}>
            <CardGridItem icon={<cat.icon />} title={cat.title}>
              <CardGridItem.PlacholderImage />
            </CardGridItem>
          </Link>
        ))}
      </GridContainer>
    </>
  );
};

export default Categories;
