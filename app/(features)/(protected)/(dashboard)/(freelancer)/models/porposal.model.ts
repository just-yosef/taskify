import { UserModel } from "@/app/(features)/(users)/models";
import mongoose, { Schema, Types, model, models } from "mongoose";
import { ProjectModel } from "../../(client)/model";
import { Project } from "@/app/(shared)/types";
import { Document } from "mongoose";
export interface IProposal extends Document {
  projectId: Project;
  freelancerId: Types.ObjectId;
  clientId: Types.ObjectId;
  coverLetter: string;
  amount: number;
  duration: string;
  createdAt: Date;
  updatedAt: Date
  status: "pending" | "accepted" | "rejected";
}
const ProposalSchema = new Schema<IProposal>(
  {
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: ProjectModel,
      required: true,
    },
    freelancerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: UserModel,
      required: true,
    },
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: UserModel,
      required: true,
    },
    coverLetter: {
      type: String,
      required: true,
      trim: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export const ProposalModel =
  models.Proposal || model("Proposal", ProposalSchema);
