import { Metadata } from "next";
interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = { title: "الرئيسية" };
const layout = ({ children }: Props) => {
  return <>{children}</>;
};

export default layout;
