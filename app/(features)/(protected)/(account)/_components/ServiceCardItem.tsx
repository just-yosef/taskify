import CardGridItem from "@/app/(shared)/_components/CardGridItem";
import React from "react";
import type { Service } from "../../(services)/types/services";
import Link from "next/link";
type Props = Pick<Service, "title" | "category" | "rating"> & {
  price: number;
  _id: string;
};
const ServiceCardItem = ({ title, category, price, _id }: Props) => {
  return (
    <Link
      href={{ pathname: `/account/services/${_id}` }}
      className="flex flex-col gap-1 hover-teal-soft p-2"
    >
      <CardGridItem.PlacholderImage />
      <h3 className="text-lg font-semibold text-teal">{title} </h3>
      <h6>{category}</h6>
      <p>buy service for {price} $ </p>
      <p>Rating ({5}) </p>
    </Link>
  );
};

export default ServiceCardItem;
