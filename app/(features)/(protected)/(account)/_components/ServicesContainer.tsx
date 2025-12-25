import { GridContainer } from "@/app/(shared)/_components";
import React from "react";
import ServiceCardItem from "./ServiceCardItem";
import { getServicesByUserId } from "../../(services)/_services";
import { decodeUserFromToken } from "@/app/(shared)/helpers/server";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import AddServiceDialog from "./AddServiceDialog";
import { DialogTrigger } from "@/components/ui/dialog";

const ServicesContainer = async () => {
  const user = await decodeUserFromToken();
  const userServices = await getServicesByUserId(user!._id);
  return (
    <>
      {!userServices.count ? (
        <div className="flex flex-col gap-3 items-center">
          <AlertCircle />
          <h4>You Dont have Any Services Yet</h4>
          <AddServiceDialog>
            <DialogTrigger asChild>
              <Button variant="teal">Add Service</Button>
            </DialogTrigger>
          </AddServiceDialog>
        </div>
      ) : (
        <GridContainer className="px-5">
          {userServices.services.map((service) => (
            <ServiceCardItem
              rating={service.rating}
              title={service.title}
              category={service.category}
              price={service.pricing.basePrice}
            />
          ))}
        </GridContainer>
      )}
    </>
  );
};

export default ServicesContainer;
