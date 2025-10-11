import { Separator } from "@/components/ui/separator";
import Logo from "../../../(shared)/_components/Logo";
import NonLoggedInLinks from "./NonLoggedInLinks";

const Header = () => {
  return (
    <>
      <header className="container-body flex items-center justify-between sticky inset-0 bg-white border-teal !border-t-transparent !border-r-transparent !border-l-transparent">
        <Logo />
        <NonLoggedInLinks />
      </header>
    </>
  );
};

export default Header;
