"use server"
import { getCookie } from "@/app/(api)/(helpers)";
import { stripe } from "@/app/(api)/constants/stripe";
import axios, { AxiosResponse } from "axios";
import Stripe from "stripe";
type plansTypes = "basic" | "pro" | "premium"
export async function subscribePlan(form: FormData) {
    try {
        const user = await getCookie("user");
        const plan = (form.get("plan")) as plansTypes;
        const userId = JSON.parse(user)?._id
        const priceId: string = plan === "pro" ? process.env.STRIPE_PLAN_PRO_PRICE_ID! : plan === "premium" ? process.env.STRIPE_PLAN_PREMIUM_PRICE_ID! : ""
        const newPlan: AxiosResponse<Stripe.Response<Stripe.Checkout.Session>> = await axios.post("https://taskify-five-psi.vercel.app/api/subscribe", { priceId, userId, plan });
        return newPlan?.data
    } catch (error) {
        console.log(error);
    }
}
