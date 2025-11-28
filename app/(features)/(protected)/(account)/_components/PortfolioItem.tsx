import React from "react";
import type { PortfolioItem } from "../types";
import CardGridItem from "@/app/(shared)/_components/CardGridItem";

const PortfolioItem = ({ title, technologies }: Partial<PortfolioItem>) => {
  return (
    <CardGridItem title={title!}>
      <CardGridItem.PlacholderImage />
      <CardGridItem.Tags tags={technologies!} />
    </CardGridItem>
  );
};

export default PortfolioItem;
