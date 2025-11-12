import mongoose, { Schema } from "mongoose";
import { IChat } from "../types/chat";
import User from "@/app/(features)/(users)/models/user.model";
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
        ref: User,
        required: true,
      },
    ],
    lastMessage: {
      type: Schema.Types.ObjectId,
      ref: "Message",
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: User,
      required: [true, "Auther Is Required"],
    },
  },
  { timestamps: true }
);

ChatSchema.index({ members: 1 });

export const Chat =
  mongoose.models.Chat || mongoose.model<IChat>("Chat", ChatSchema);
