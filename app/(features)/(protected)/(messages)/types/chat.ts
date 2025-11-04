import { Document, Types } from "mongoose";
export interface Message {
  chat: Types.ObjectId;
  sender: Types.ObjectId;
  content: string;
  attachments?: string[];
  createdAt: Date;
  receiver: Types.ObjectId;
  updatedAt: Date;
}
export interface Chat {
  name?: string;
  isGroup: boolean;
  members: Types.ObjectId[];
  lastMessage?: Types.ObjectId;
  groupAdmin?: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export interface IMessage extends Document {
  chat: Types.ObjectId;
  sender: Types.ObjectId;
  content: string;
  attachments?: string[];
  createdAt: Date;
  receiver: Types.ObjectId;
  updatedAt: Date;
}

export interface IChat extends Document {
  name?: string;
  isGroup: boolean;
  members: Types.ObjectId[];
  lastMessage?: Types.ObjectId;
  createdBy?: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}
