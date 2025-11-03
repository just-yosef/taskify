import mongoose, { Schema } from "mongoose";
import { IChat } from "../types/chat";

const ChatSchema = new Schema<IChat>(
  {
    name: {
      type: String,
      trim: true,
    },
    isGroup: {
      type: Boolean,
      default: false,
    },
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],
    lastMessage: {
      type: Schema.Types.ObjectId,
      ref: "Message",
    },
    groupAdmin: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

ChatSchema.index({ participants: 1 });

export const Chat =
  mongoose.models.Chat || mongoose.model<IChat>("Chat", ChatSchema);
