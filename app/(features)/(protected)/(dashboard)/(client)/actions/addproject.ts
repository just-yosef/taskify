"use server";
import { revalidatePath } from "next/cache";
import { decodedUser } from "@/app/(shared)/helpers/server";
export async function addProjectAction(formData: FormData) {
  const user = await decodedUser();
  if (!user) throw new Error("Can Not Create Project While Unauthorized!");
  const data = {
    title: formData.get("title"),
    description: formData.get("description"),
    budgetMin: Number(formData.get("budgetMin")),
    budgetMax: Number(formData.get("budgetMax")),
    clientId: user._id,
    clientName: formData.get("clientName"),
    duration: formData.get("duration")
      ? String(formData.get("duration"))
      : undefined,
    category: formData.get("category")
      ? String(formData.get("category"))
      : undefined,
  };

  try {
    const res = await fetch(`${process.env.BASE_URL}/api/projects`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    revalidatePath("/dashboard");
  } catch (err) {
    console.error("Error creating project", err);
  }
}
