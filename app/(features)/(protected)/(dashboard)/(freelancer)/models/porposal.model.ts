import { UserModel } from "@/app/(features)/(users)/models";
import mongoose, { Schema, model, models } from "mongoose";
import { ProjectModel } from "../../(client)/model";

const ProposalSchema = new Schema(
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
