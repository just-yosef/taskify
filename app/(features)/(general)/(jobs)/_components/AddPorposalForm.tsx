"use client";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { createProposal } from "../service/porposals.service";
import { useEffect } from "react";
import { useProject } from "../hooks";
import { Loader, Toast } from "@/app/(shared)/_components";
import { toast } from "sonner";
type ProposalFormData = {
  coverLetter: string;
  amount: number;
  duration: string;
  clientId: string;
};

export default function AddNewProposalForm({
  projectId,
}: {
  projectId: string;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    getValues
  } = useForm<ProposalFormData>();
  const { id } = useParams<{ id: string }>();
  const freelancerId = localStorage.getItem("userId")!;
  const { data, isLoading } = useProject(id);
  useEffect(() => {
    if (data?.clientId) setValue("clientId", data.clientId);
  }, [data, setValue]);

  const onSubmit = async (data: ProposalFormData) => {
    try {
      await createProposal({
        ...data,
        projectId,
        freelancerId,
        clientId: data.clientId,
      });
      toast.custom(() => (
        <Toast message="Porposal Created Successfully!" status="success" />
      ));
    } catch (err) {
      toast.custom(() => (
        <Toast message="Faild To Created Successfully!" status="error" />
      ));
      console.log(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(
        !data
          ? "cursor-no-drop pointer-events-none opacity-[20%]"
          : "space-y-4 text-sm text-gray-700",
        "relative"
      )}
    >
      <>
        {isLoading && <Loader />}
        <div>
          <Textarea
            placeholder="Write your cover letter..."
            {...register("coverLetter", {
              required: "Cover letter is required",
            })}
          />
          {errors.coverLetter && (
            <p className="text-red-500 text-xs mt-1">
              {errors.coverLetter.message}
            </p>
          )}
        </div>
        <Input
          type="hidden"
          {...register("clientId", {
            value: data?.clientId,
            min: { value: 1, message: "Amount must be at least $1" },
          })}
        />
        <div>
          <Input
            type="number"
            placeholder="Amount (USD)"
            {...register("amount", {
              required: "Amount is required",
              min: { value: 1, message: "Amount must be at least $1" },
              validate: (val) =>
                val < data?.budgetMin! || val > data?.budgetMax! ? false : true,
            })}
          />

          {errors.amount && (
            <p className="text-red-500 text-xs mt-1">{errors.amount.message}</p>
          )}
        </div>
        <div>
          <Input
            placeholder="Duration (e.g. 2 weeks)"
            {...register("duration", { required: "Duration is required" })}
          />
          {errors.duration && (
            <p className="text-red-500 text-xs mt-1">
              {errors.duration.message}
            </p>
          )}
        </div>
        <Button
          type="submit"
          variant="teal"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Proposal"}
        </Button>
      </>
    </form>
  );
}
