import { cn } from "@/lib/utils"

interface Props {
    children: React.ReactNode
    className?: string
}
const BodyContainer = ({ children, className }: Props) => {
    return (
        <section className={cn("container-body", className)}>
            {children}
        </section>
    )
}

export default BodyContainer
