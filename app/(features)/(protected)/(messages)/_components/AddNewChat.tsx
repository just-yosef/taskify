"use client";
import profileImage from "@/app/(shared)/assets/4c3d75aa967003e4bee5b269ee3c6332.webp";
import { useState, startTransition, useEffect, FormEvent } from "react";
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
import { createChatAction } from "../actions/createChat";
import { getUsers } from "@/app/(features)/(users)/(service)/userService";
import { IUser } from "@/app/(features)/(general)/types";
export default function NewChatDialog() {
  const [name, setName] = useState("");
  const [selectedMembers, setSelectedMembers] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<IUser[]>();
  useEffect(() => {
    async function fetchUsers() {
      const data = await getUsers();
      setUsers(data);
    }
    fetchUsers();
  }, []);
  console.log(users);

  const fakeUsers = [
    { id: "u1", name: "Ahmed" },
    { id: "u2", name: "Sara" },
    { id: "u3", name: "Omar" },
    { id: "u4", name: "Layla" },
  ];
  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      setLoading(true);
      console.log(selectedMembers);
      startTransition(async () => {
        const form = new FormData();
        form.append("name", name);
        form.append("members", JSON.stringify(selectedMembers || []));
        form.append("isGroup", String(selectedMembers.length > 1));
        form.append("createdBy", localStorage.getItem("userId") || "");
        await createChatAction(form);
        alert("Chat created successfully!");
        setName("");
        setSelectedMembers([]);
      });
    } catch (err: any) {
      alert(err.message || "Failed to create chat");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="teal" className="flex w-fit !ml-auto">
          + New Chat
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Start New Chat</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-3 mt-4">
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
              {users?.map((user) => (
                <section
                  key={user._id}
                  className="flex gap-3 w-full pl-3 items-center"
                >
                  <Image
                    width={50}
                    height={50}
                    alt="IMG_PROFILE"
                    src={profileImage}
                    className="rounded-full"
                  />
                  <div className="flex justify-between w-full">
                    {user.fullName}
                    <Checkbox
                      checked={selectedMembers.includes(user._id)}
                      onCheckedChange={() =>
                        setSelectedMembers((prev) =>
                          prev.includes(user._id)
                            ? prev.filter((id) => id !== user._id)
                            : [...prev, user._id]
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
            disabled={!selectedMembers.length || loading}
          >
            {loading ? "Creating..." : "Create Chat"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
