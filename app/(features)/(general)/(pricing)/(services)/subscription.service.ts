import { api } from "../../constants";
import { ISubscription } from "../models/Subscription.model";

export async function getSubscriptions(): Promise<ISubscription[] | undefined> {
    try {
        const res = await api.get("/subscriptions")
        return res.data
    } catch (error: any) {
        console.log(error.message);
    }
}