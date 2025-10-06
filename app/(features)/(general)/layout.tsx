import { BodyContainer, Header } from '@/app/(shared)/_components'
interface Props {
    children: React.ReactNode
}
const layout = ({ children }: Props) => {
    return (
        <div>
            <Header />
            <BodyContainer>
                {children}
            </BodyContainer>
        </div>
    )
}

export default layout
