import { Separator } from "@/components/ui/separator"
import Logo from "../../../(shared)/_components/Logo"
import NonLoggedInLinks from "./NonLoggedInLinks"

const Header = () => {
    return (
        <>
            <header className="container-body flex items-center justify-between">
                <Logo />
                <NonLoggedInLinks />
            </header>
            <Separator className="bg-teal" />
        </>
    )
}

export default Header
