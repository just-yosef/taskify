import { TitleSection } from "@/app/(shared)/_components";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Projects from "./Projects";

const ProjectsPage = () => {
  return (
    <>
      <>
        <section className="flex items-center justify-between">
          <TitleSection text="Projects" />
          <Button variant="teal">Add Your Project Now</Button>
        </section>
        <Separator />
      </>
      <Projects />
    </>
  );
};

export default ProjectsPage;
