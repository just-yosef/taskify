"use client";
import { Separator } from "@/components/ui/separator";
import AddNewProposalForm from "./AddPorposalForm";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function AddNewProposal({ projectId }: { projectId: string }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="teal">Add New Porposal</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Porposal</DialogTitle>
          </DialogHeader>
          <AddNewProposalForm projectId={projectId} />
        </DialogContent>
      </Dialog>
      {/* <section className="p-4">
        <h3 className="pb-3 font-semibold">Add New Proposal</h3>
        <Separator />
      </section> */}
    </QueryClientProvider>
  );
}
