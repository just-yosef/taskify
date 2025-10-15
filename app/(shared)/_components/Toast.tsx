import { cn } from "@/lib/utils"

interface Props { message: string, status: "success" | "error" }
const Toast = ({ message, status }: Props) => {
    return (
        <div className={cn('p-2 rounded-lg', status === "success" ? "border-teal bg-teal-soft" : status === "error" ? "border-rose bg-rose-soft" : "", "relative z-[9999] ")}>
            {message}
        </div>
    )
}

export default Toast
