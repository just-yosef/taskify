import { Schema, model, Document, Types } from "mongoose";

export interface IService extends Document {
    userId: Types.ObjectId;
    title: string;
    slug: string;
    description: string;
    category: {
        id: Types.ObjectId;
        name: string;
    };
    pricing: {
        type: "fixed" | "packages";
        basePrice?: number;
    };
    deliveryTime: number;
    status: "active" | "paused" | "draft";
    rating: Types.ObjectId[];
    serviceImg: string
}

const ServiceSchema = new Schema<IService>(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
        },

        category: {
            type: String,
            required: [true, "please enter category name"],
        },

        pricing: {
            type: {
                type: String,
                enum: ["fixed", "packages"],
                required: true,
                _id: false
            },
            basePrice: {
                type: Number,
                min: 0,
                _id: false
            },
        },

        deliveryTime: {
            type: Number,
            required: true,
            min: 1,
        },

        status: {
            type: String,
            enum: ["active", "paused", "draft"],
            default: "draft",
        },
        serviceImg: String
        ,
        rating: {
            ref: "Rating",
            type: [String]
        },
    },
    {
        timestamps: true,
    }
);
ServiceSchema.index({ userId: 1 });
export const Service = model<IService>("Service", ServiceSchema);
