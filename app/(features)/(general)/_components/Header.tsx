import { Separator } from "@/components/ui/separator"
import Logo from "../../../(shared)/_components/Logo"
import NonLoggedInLinks from "./NonLoggedInLinks"

const Header = () => {
    return (
        <>
            <header className="p-[15px] sm:px-[2vw] flex items-center justify-between">
                <Logo />
                <NonLoggedInLinks />
            </header>
            <Separator className="bg-teal" />
        </>
    )
}

export default Header
