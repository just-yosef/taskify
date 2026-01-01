import { Dialog, DialogContent } from "@/components/ui/dialog";
import React, { ReactNode } from "react";
import ServiceForm from "./AddServiceForm";
interface Props {
  children: ReactNode;
}
const AddServiceDialog = ({ children }: Props) => {
  return (
    <Dialog>
      {children}
      <DialogContent>
        <ServiceForm />
      </DialogContent>
    </Dialog>
  );
};

export default AddServiceDialog;
