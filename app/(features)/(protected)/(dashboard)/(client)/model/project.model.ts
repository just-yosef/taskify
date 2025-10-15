import { Schema, model, models } from "mongoose";
import type { Project } from "../../(shared)/types";

const ProjectSchema = new Schema<Project>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    budgetMin: { type: Number },
    budgetMax: { type: Number },
    duration: { type: String },
    category: { type: String },
    status: {
      type: String,
      enum: ["open", "in_progress", "completed"],
      default: "open",
    },
    clientId: { type: String, required: true },
    clientName: { type: String, required: true },
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);
export default models.Project || model<Project>("Project", ProjectSchema);
