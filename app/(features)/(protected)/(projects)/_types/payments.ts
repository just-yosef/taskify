export interface CreatePaymentPayload {
    payment_method_id: number;
    cartTotal: string;
    customer: Customer;
    redirectionUrls?: RedirectionUrls;
    cartItems: CartItem[];
}

export interface Customer {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    address: string;
}

export interface RedirectionUrls {
    successUrl: string;
    failUrl: string;
    pendingUrl: string;
}

export interface CartItem {
    name: string;
    price: string;
    quantity: string;
}


export interface InvoiceResponse {
    invoice_id: number;
    invoice_key: string;
    payment_data: PaymentData;
}

export interface PaymentData {
    redirectTo: string;
}
