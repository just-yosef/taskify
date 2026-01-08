"use server";
import axios, { AxiosResponse } from "axios";
import { CreatePaymentPayload, InvoiceResponse } from "../_types";

export async function processPayment(payload: CreatePaymentPayload): Promise<{ data: InvoiceResponse }> {
    try {
        const data = await axios.post("https://staging.fawaterk.com/api/v2/invoiceInitPay",
            {
                ...payload, redirectionUrls: {
                    "successUrl": "https://taskify-five-psi.vercel.app/success",
                    "failUrl": "https://taskify-five-psi.vercel.app/fail",
                    "pendingUrl": "https://taskify-five-psi.vercel.app/"
                },
                "currency": "EGP"
            },
            { headers: { Authorization: `Bearer d83a5d07aaeb8442dcbe259e6dae80a3f2e21a3a581e1a5acd`, "Content-Type": "application/json", } })
        console.log("server action data: ", data.data);
        return data.data
    } catch (error: any) {
        console.log(error, ": error");
        throw new Error(error.message)
    }
}
