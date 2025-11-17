import mongoose, { Schema, Document, Model } from "mongoose";
interface Suscription {
  userId: mongoose.Types.ObjectId;
  plan: "basic" | "pro" | "premium";
  stripeSubscriptionId: string;
  status: "active" | "past_due" | "canceled" | "unpaid" | "trialing";
  currentPeriodStart: Date;
  currentPeriodEnd: Date;
  cancelAtPeriodEnd?: boolean;
  createdAt: Date;
  updatedAt: Date;
}
export type ISubscription = Suscription & Document

const SubscriptionSchema: Schema<ISubscription> = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    plan: { type: String, required: true },
    stripeSubscriptionId: { type: String, required: true },
    status: {
      type: String,
      enum: ["active", "past_due", "canceled", "unpaid", "trialing"],
      default: "active",
    },
    currentPeriodStart: { type: Date, required: true },
    currentPeriodEnd: { type: Date, required: true },
    cancelAtPeriodEnd: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const Subscription: Model<ISubscription> =
  mongoose.models.Subscription || mongoose.model<ISubscription>("Subscription", SubscriptionSchema);

export default Subscription;
