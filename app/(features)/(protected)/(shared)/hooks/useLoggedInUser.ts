"use client";
import { IUser } from "@/app/(features)/(general)/types";
import { getUserById } from "@/app/(features)/(users)/(service)/userService";
import { useQuery } from "@tanstack/react-query";
export function useLoggedInUser(userId?: string) {
  return useQuery<IUser>({
    queryKey: ["user", userId],
    queryFn: async () => {
      if (!userId) throw new Error("User ID is required");
      return await getUserById(userId);
    },
    enabled: !!userId,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}
