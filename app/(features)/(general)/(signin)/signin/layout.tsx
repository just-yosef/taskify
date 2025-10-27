"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const layout = ({ children }: { children: React.ReactNode }) => {
    const client = new QueryClient()
    return (
        <QueryClientProvider client={client}>
            {children}
        </QueryClientProvider>
    )
}

export default layout
