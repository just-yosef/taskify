import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { MessageCircle, Clock2 } from "lucide-react";
import { MessageItemProps } from "../types";

const MessageItem = ({ message, onReply }: MessageItemProps) => {
  if (!message) return null;

  return (
    <Card
      className={`border-sky py-4 transition hover:shadow-md ${
        message.isRead ? "opacity-80" : "opacity-100"
      }`}
    >
      <CardHeader className="flex flex-row items-center gap-3">
        <span className="size-10 bg-sky-100 flex justify-center items-center rounded-full">
          <MessageCircle className="text-sky-600" />
        </span>

        <CardTitle className="text-base text-gray-800">
          New message from
          <span className="font-semibold text-sky-700">
            {message.senderName}
          </span>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-gray-600 line-clamp-2 mb-2">
          {message.content}
        </p>
        <p className="text-xs text-gray-500 flex items-center gap-1">
          <Clock2 size={16} />
          {message.time}
        </p>
      </CardContent>

      <CardFooter className="flex items-center justify-between">
        <Badge variant={message.isRead ? "outline" : "sky"}>
          {message.isRead ? "Read" : "Unread"}
        </Badge>

        <div className="flex gap-2">
          {onReply && (
            <Button
              size="sm"
              className="bg-[#38A3A5] hover:bg-[#4C956C] text-white"
              onClick={() => onReply(message.id)}
            >
              Reply
            </Button>
          )}
          <Button variant="sky" size="sm" asChild>
            <Link href={{ pathname: `/messages/${message.id}` }}>View</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default MessageItem;
