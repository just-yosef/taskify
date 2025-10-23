import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import AddNewProjectForm from "./AddNewProjectForm";
export default async function AddNewProject() {
  return (
    <Dialog>
      <section className="flex justify-end w-full">
        <DialogTrigger asChild>
          <Button variant="teal">Add New Project</Button>
        </DialogTrigger>
      </section>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add New Project</DialogTitle>
        </DialogHeader>
        <AddNewProjectForm 
          clientName="ABC"
        />
      </DialogContent>
    </Dialog>
  );
}
