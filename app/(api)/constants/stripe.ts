import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET!, {
    apiVersion: "2025-10-29.clover",
})
export { stripe }