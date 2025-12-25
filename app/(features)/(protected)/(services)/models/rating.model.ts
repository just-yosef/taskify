import { Schema, model, Document, Types } from "mongoose";

export interface IReview extends Document {
  serviceId: Types.ObjectId;
  userId: Types.ObjectId;
  rating: number;
  comment?: string;
}

const ReviewSchema = new Schema<IReview>(
  {
    serviceId: {
      type: Schema.Types.ObjectId,
      ref: "Service",
      required: true,
    },

    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },

    comment: String,
  },
  { timestamps: true }
);

export const Review = model<IReview>("Review", ReviewSchema);
