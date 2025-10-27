import { Metadata, ResolvingMetadata } from "next";
import { getProject } from "../../../(dashboard)/(client)/service/project.service";

interface Props {
  children: React.ReactNode;
}
type Prop = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
export async function generateMetadata({ params }: Prop): Promise<Metadata> {
  const { id } = await params;
  const project = await getProject(id);
  return {
    title: `طلب: ${project.title}`,
  };
}
const layout = ({ children }: Props) => {
  return <>{children}</>;
};

export default layout;
