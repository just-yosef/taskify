"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAddProject } from "../hooks";
import { FieldError, useForm } from "react-hook-form";
import {
  ErrorMessage,
  PendingFormLabel,
  Toast,
} from "@/app/(shared)/_components";
import { zodResolver } from "@hookform/resolvers/zod";
import { projectSchema } from "../schema";
import { toast } from "sonner";
import { useRef } from "react";
import { ProjectInput } from "../types";
import { Label } from "@/components/ui/label";
import { useQueryClient } from "@tanstack/react-query";

export default function AddNewProject() {
  const { mutate, isPending } = useAddProject();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      budgetMax: 0,
      budgetMin: 0,
    },
  });
  const dialog = useRef<HTMLButtonElement | null>(null);
  const queryClient = useQueryClient();
  const onSubmit = (data: any) => {
    mutate(
      {
        ...data,
        budgetMin: data.budgetMin,
        budgetMax: data.budgetMax,
        clientId: "68e8f790ff890cfe04613c72",
        clientName: "A",
      } as ProjectInput,
      {
        onSuccess() {
          toast.custom(() => (
            <Toast message="Project Posted Successfully" status="success" />
          ));
          dialog?.current?.click();
          queryClient.invalidateQueries({ queryKey: ["projects"] });
        },
        onError() {
          toast.custom(() => (
            <Toast message="Failed To Create Project" status="error" />
          ));
        },
      }
    );
    reset();
  };

  return (
    <Dialog>
      <section className="flex justify-end w-full">
        <DialogTrigger asChild>
          <Button variant="teal">Add New Project</Button>
        </DialogTrigger>
      </section>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add New Project</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <div>
            <Label htmlFor="title" className="mb-2 font-[rubicMedium]">
              Project Name
            </Label>
            <Input
              id="title"
              {...register("title", { required: "Title is required" })}
              placeholder="Project title"
            />
            {errors.title && <ErrorMessage error={errors.title} />}
          </div>

          <div>
            <Label htmlFor="description" className="mb-2 font-[rubicMedium]">
              Description
            </Label>
            <textarea
              id="description"
              {...register("description", {
                required: "Description is required",
              })}
              placeholder="Project description"
              className="border p-2 outline-0 rounded w-full border-teal"
            />
            {errors.description && <ErrorMessage error={errors.description} />}
          </div>

          <div className="flex gap-2">
            <div className="w-1/2">
              <Label htmlFor="budgetMin" className="mb-2 font-[rubicMedium]">
                Min Budget
              </Label>
              <Input
                id="budgetMin"
                {...register("budgetMin", {
                  required: "Minimum budget required",
                  valueAsNumber: true,
                })}
                type="number"
                placeholder="Min budget ($)"
              />
              {errors.budgetMin && (
                <ErrorMessage error={errors.budgetMin as FieldError} />
              )}
            </div>

            <div className="w-1/2">
              <Label htmlFor="budgetMax" className="mb-2 font-[rubicMedium]">
                Max Budget
              </Label>
              <Input
                id="budgetMax"
                {...register("budgetMax", {
                  required: "Maximum budget required",
                  valueAsNumber: true,
                })}
                type="number"
                placeholder="Max budget ($)"
              />
              {errors.budgetMax && (
                <ErrorMessage error={errors.budgetMax as FieldError} />
              )}
            </div>
          </div>

          <Button variant="teal" disabled={isPending} type="submit">
            <PendingFormLabel isSubmitting={isPending} action="Post" />
          </Button>
        </form>
      </DialogContent>

      <DialogClose ref={dialog} />
    </Dialog>
  );
}
