"use server";

import { api } from "@/app/(features)/(general)/constants";

export async function createChatAction(formData: FormData) {
    try {
        const payload = {
            name: formData.get("name"),
            members: JSON.parse((formData.get("members")!)),
            isGroup: formData.get("isGroup") === "true",
            createdBy: formData.get("createdBy"),
        };
        console.log(payload);

        await api.post("/chats", payload);
        console.log("Created");

    } catch (error: any) {
        console.error("❌ Error creating chat:", error);
        throw new Error(error.message || "Failed to create chat");
    }
}
