"use client";
import profileImage from "@/app/(shared)/assets/4c3d75aa967003e4bee5b269ee3c6332.webp";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import { changeLanguge } from "@/app/(features)/(general)/(localization)/(actions)";
import { useLanguageStore } from "@/app/(features)/(general)/(localization)/_store";
import { cn } from "@/lib/utils";

export default function NewChatDialog() {
  const [name, setName] = useState("");
  const [selectedMembers, setSelectedMembers] = useState<string[]>([]);

  const fakeUsers = [
    { id: "u1", name: "Ahmed" },
    { id: "u2", name: "Sara" },
    { id: "u3", name: "Omar" },
    { id: "u4", name: "Layla" },
  ];

  const handleSubmit = () => {
    console.log({
      name,
      members: selectedMembers,
      isGroup: selectedMembers.length > 1,
    });
    alert("Chat created (UI only)");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="teal"
          className={cn(
            "flex",
            useLanguageStore().language === "ar" ? "!mr-auto" : "!ml-auto"
          )}
        >
          + New Chat
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Start New Chat</DialogTitle>
        </DialogHeader>

        <div className="space-y-3 mt-4">
          <div>
            <label className="block text-sm font-medium mb-1">Chat Name</label>
            <Input
              placeholder="Enter chat name (optional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Select Members
            </label>
            <div className="flex flex-col gap-3 max-h-[200px] overflow-y-scroll border-teal p-2 rounded-lg">
              {fakeUsers.map((user) => (
                <section className="flex gap-3 w-full pl-3 items-center">
                  <Image
                    width={50}
                    height={50}
                    alt="IMG_PROFILE"
                    src={profileImage}
                    className="rounded-full"
                  />
                  <div className="flex justify-between w-full">
                    {user.name}
                    <Checkbox
                      onClick={() =>
                        setSelectedMembers((prev) =>
                          prev.includes(user.id)
                            ? prev.filter((id) => id !== user.id)
                            : [...prev, user.id]
                        )
                      }
                    />
                  </div>
                </section>
              ))}
            </div>
          </div>

          <Button
            className="w-full mt-4"
            variant="borderTeal"
            onClick={handleSubmit}
            disabled={!selectedMembers.length}
          >
            Create Chat
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
