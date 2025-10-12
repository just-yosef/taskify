import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { BadgeDollarSign, Clock2, User } from "lucide-react";
import { Offer } from "../types";
const OfferDetails = ({
  duration,
  freelancerName,
  price,
  specialization,
}: Offer) => {
  return (
    <>
      <Button size="sm" className="font-[rubicRegular]" asChild>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="peach">Offer Details</Button>
          </DialogTrigger>
          <DialogContent showCloseButton={false} className="border-teal p-4">
            <DialogHeader>
              <DialogTitle className="text-teal font-semibold font-[rubicRegular] max-sm:text-left">
                Offer Details
              </DialogTitle>
              <Separator className="bg-teal" />
            </DialogHeader>
            <DialogDescription>
              <div className="flex gap-2 font-[rubicRegular] mb-4">
                <User className="size-7" />
                <div className="flex flex-col">
                  <span className="font-semibold">{freelancerName} </span>
                  <span className="text-xs">{specialization} </span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
                dolores quas, placeat commodi sint voluptate minus sequi
                voluptatem officiis et animi doloremque hic nam impedit a optio?
                Sunt tempora reprehenderit voluptatem nam quod cumque alias
                veniam ipsam. Ea, blanditiis est?
              </p>
              <div className="mt-4">
                <p className="text-sm text-gray-500 flex gap-2">
                  <BadgeDollarSign size={24} className="text-green-600" />
                  Budget: <b>{price}$</b>
                </p>
                <span className="text-sm text-gray-500 flex gap-2 mt-1 ml-0">
                  <Clock2 className="text-peach" size={22} />
                  Duration: <b>{duration} Days</b>
                </span>
              </div>
            </DialogDescription>
            <DialogFooter>
              <Button variant="destructive">Reject</Button>
              <Button variant="teal">Accept</Button>
              <DialogClose />
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Button>
    </>
  );
};

export default OfferDetails;
