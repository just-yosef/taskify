import { Types } from "mongoose";

export interface Service {
    _id: string
    userId: Types.ObjectId;
    title: string;
    slug: string;
    description: string;
    category: string
    pricing: {
        type: "fixed" | "packages";
        basePrice: number;
    };
    deliveryTime: number;
    status: "active" | "paused" | "draft";
    rating: Types.ObjectId[];
    serviceImg: string
}