import ProjectsPage from "../components/ProjectsPage";

const page = async ({ searchParams }: PageProps<"/projects">) => {
  const params = await searchParams;
  return <ProjectsPage searchParams={params} />;
};

export default page;
