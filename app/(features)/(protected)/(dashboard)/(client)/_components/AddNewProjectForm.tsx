"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { addProjectAction } from "../actions/addproject";
import { toast } from "sonner";
import { PendingFormLabel, Toast } from "@/app/(shared)/_components";
import { useTransition } from "react";
interface Props {
  clientName: string;
}
export default function AddNewProjectForm({ clientName }: Props) {
  const [isPending, Transition] = useTransition();
  const handelSubmitAction = (formData: FormData) => {
    Transition(async () => {
      try {
        await addProjectAction(formData);
        toast.custom(() => (
          <Toast message="your project posted successfully!" status="success" />
        ));
      } catch (error: any) {
        toast.custom(() => (
          <Toast message="failed to post your project" status="error" />
        ));
      }
    });
  };
  return (
    <form action={handelSubmitAction} className="flex flex-col gap-3">
      <input type="hidden" name="clientName" value={clientName} />
      <div>
        <Label htmlFor="title" className="mb-2">
          Project Name
        </Label>
        <Input name="title" id="title" placeholder="Project title" required />
      </div>
      <div>
        <Label htmlFor="description" className="mb-2">
          Description
        </Label>
        <textarea
          name="description"
          id="description"
          placeholder="Project description"
          className="border p-2 outline-0 rounded w-full border-teal"
          required
        />
      </div>
      <div className="flex gap-2 ">
        <div className="w-1/2 ">
          <Label htmlFor="budgetMin" className="my-2">
            Min Budget
          </Label>
          <Input
            name="budgetMin"
            id="budgetMin"
            type="number"
            placeholder="Min budget ($)"
            required
          />
        </div>
        <div className="w-1/2 ">
          <Label htmlFor="budgetMax" className="my-2">
            Max Budget
          </Label>
          <Input
            name="budgetMax"
            id="budgetMax"
            type="number"
            placeholder="Max budget ($)"
            required
          />
        </div>
      </div>
      <Button variant="teal" disabled={isPending} type="submit">
        <PendingFormLabel action="Post" isSubmitting={isPending} />
      </Button>
    </form>
  );
}
