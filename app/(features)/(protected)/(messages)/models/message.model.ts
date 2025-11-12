import mongoose, { Schema } from "mongoose";
import { IMessage } from "../types/chat";
import User from "@/app/(features)/(users)/models/user.model";
import { Chat } from "@/app/(features)/(protected)/(messages)/models/chat.model";
const MessageSchema = new Schema<IMessage>(
  {
    chat: {
      type: Schema.Types.ObjectId,
      ref: Chat,
      required: true,
    },
    receiver: {
      type: Schema.Types.ObjectId,
      ref: User,
    },
    sender: {
      type: Schema.Types.ObjectId,
      ref: User,
      required: true,
    },
    content: {
      type: String,
      trim: true,
      required: true,
    },
    attachments: [
      {
        type: String,
      },
    ],
    isDeleted: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

MessageSchema.index({ chat: 1, createdAt: -1 });

export const Message =
  mongoose.models.Message || mongoose.model<IMessage>("Message", MessageSchema);
