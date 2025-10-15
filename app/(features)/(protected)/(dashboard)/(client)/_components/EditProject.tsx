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
import { useUpdateProject } from "../hooks";
import { Project } from "../../(shared)/types";
import { Edit } from "lucide-react";
import { Label } from "@/components/ui/label";

export default function EditProject({ project }: { project: Project }) {
  const { mutate, isPending } = useUpdateProject();
  const dialog = useRef<HTMLButtonElement | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<ProjectInput>({
    // @ts-ignore
    resolver: zodResolver(projectSchema),
    defaultValues: {
      _id: project._id,
      title: project.title,
      description: project.description,
      budgetMin: project.budgetMin,
      budgetMax: project.budgetMax,
      duration: project.duration,
      category: project.category,
      clientId: project.clientId,
      clientName: project.clientName,
    },
  });

  const onSubmit = (data: any) => {
    mutate(
      { id: getValues()._id!, data },
      {
        onSuccess() {
          toast.custom(() => (
            <Toast message="Project Updated Successfully" status="success" />
          ));
          dialog?.current?.click();
        },
        onError(err) {
          console.log(err);

          toast.custom(() => (
            <Toast message="Failed To Update Project" status="error" />
          ));
        },
      }
    );
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm">
          <Edit /> Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit Project</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <div>
            <Label htmlFor="title" className="mb-2 font-[rubicMedium]">
              Project Name
            </Label>
            <Input
              {...register("title")}
              id="title"
              placeholder="Project title"
            />
            {errors.title && (
              <ErrorMessage error={errors.title as FieldError} />
            )}
          </div>
          <div>
            <Label
              htmlFor="description"
              className="mb-2 font-[rubicMedium] capitalize"
            >
              description
            </Label>
            <textarea
              {...register("description")}
              id="description"
              placeholder="Project description"
              className="border p-2 outline-0 rounded w-full border-teal"
            />
            {errors.description && (
              <ErrorMessage error={errors.description as FieldError} />
            )}
          </div>
          <div className="flex gap-2">
            <div className="w-1/2">
              <Label
                htmlFor="budgetMin"
                className="mb-2 font-[rubicMedium] capitalize"
              >
                Min Budget
              </Label>
              <Input
                id="budgetMin"
                {...register("budgetMin", { valueAsNumber: true })}
                type="number"
                placeholder="Min budget ($)"
              />
              {errors.budgetMin && (
                <ErrorMessage error={errors.budgetMin as FieldError} />
              )}
            </div>

            <div className="w-1/2">
              <Label
                htmlFor="budgetMax"
                className="mb-2 font-[rubicMedium] capitalize"
              >
                Max Budget
              </Label>
              <Input
                {...register("budgetMax", { valueAsNumber: true })}
                type="number"
                placeholder="Max budget ($)"
                id="budgetMax"
              />
              {errors.budgetMax && (
                <ErrorMessage error={errors.budgetMax as FieldError} />
              )}
            </div>
          </div>

          <Button disabled={isPending} type="submit">
            <PendingFormLabel isSubmitting={isPending} action="Update" />
          </Button>
        </form>
      </DialogContent>

      <DialogClose ref={dialog} />
    </Dialog>
  );
}
