import React from "react";
import { offers } from "../constants";
import OfferItem from "./OfferItem";
import { Button } from "@/components/ui/button";
const ClientOffers = () => {
  return (
    <>
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {offers.length >= 3
          ? offers
              .slice(0, 3)
              .map((item) => (
                <OfferItem offer={item} key={item.specialization} />
              ))
          : offers.map((item) => (
              <OfferItem offer={item} key={item.specialization} />
            ))}
      </section>
      {offers.length > 3 && (
        <Button className="!mx-auto flex mt-4" size="lg" variant="peach">
          View All Offers
        </Button>
      )}
    </>
  );
};

export default ClientOffers;
