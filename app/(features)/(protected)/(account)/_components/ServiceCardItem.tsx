import CardGridItem from "@/app/(shared)/_components/CardGridItem";
import React from "react";
import type { Service } from "../../(services)/types/services";
type Props = Pick<Service, "title" | "category" | "rating"> & { price: number };
const ServiceCardItem = ({ title, category, price, rating }: Props) => {
  return (
    <>
      <CardGridItem.PlacholderImage />
      <h3 className="text-lg font-semibold text-teal">{title} </h3>
      <h6>{category}</h6>
      <p>buy service for {price} $ </p>
      <p>Rating ({5}) </p>
    </>
  );
};

export default ServiceCardItem;
