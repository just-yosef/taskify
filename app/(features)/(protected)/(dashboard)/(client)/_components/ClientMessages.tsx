import React from "react";
import { messages } from "../constants";
import MessageItem from "./MessageItem";
import { Button } from "@/components/ui/button";

const ClientMessages: React.FC = () => {
  if (!messages || messages.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No messages available.
      </div>
    );
  }

  return (
    <section className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {messages.slice(0, 3).map((item) => (
          <MessageItem key={item.id} message={item} />
        ))}
      </div>

      {messages.length > 3 && (
        <div className="flex justify-center">
          <Button size="lg" variant="sky" className="mt-2" asChild>
            <a href="/messages">View All Messages</a>
          </Button>
        </div>
      )}
    </section>
  );
};

export default ClientMessages;
