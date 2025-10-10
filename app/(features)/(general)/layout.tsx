import { BodyContainer, Header } from '@/app/(shared)/_components'
import { Metadata } from 'next'
interface Props {
    children: React.ReactNode
}

export const metadata: Metadata = { title: "الرئيسية" }
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
