import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUserPorposal } from "../service/porposal.service";
import { Toast } from "@/app/(shared)/_components";
import { toast } from "sonner";

export const useDeleteProposal = (porposalId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => deleteUserPorposal(porposalId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["proposals"] });
      toast.custom(() => (
        <Toast message="Porposal Deleted Succesfull" status="success" />
      ));
    },
    onError: (error: any) => {
      toast.custom(() => <Toast message={error.message} status="error" />);
      console.error("Failed to delete proposal:", error);
    },
  });
};
