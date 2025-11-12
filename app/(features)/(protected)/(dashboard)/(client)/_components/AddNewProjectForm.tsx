"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { addProjectAction } from "../actions/addproject";
import { toast } from "sonner";
import { PendingFormLabel, Toast } from "@/app/(shared)/_components";
import { useMemo, useState, useTransition } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
interface Props {
  clientName: string;
}
export default function AddNewProjectForm({ clientName }: Props) {
  const [isPending, Transition] = useTransition();
  const [category, setCategory] = useState<string>("");
  const handelSubmitAction = (formData: FormData) => {
    Transition(async () => {
      try {
        await addProjectAction(formData);
        toast.custom(() => (
          <Toast message="your project posted successfully!" status="success" />
        ));
      } catch (error: any) {
        toast.custom(() => (
          <Toast message="failed to post your project" status="error" />
        ));
      }
    });
  };
  const projectCategories = useMemo(
    () => [
      "Web Development",
      "Mobile App Development",
      "UI/UX Design",
      "Graphic Design",
      "Logo & Branding",
      "Writing & Translation",
      "Video Editing & Animation",
      "Digital Marketing",
      "SEO (Search Engine Optimization)",
      "Social Media Management",
      "Data Entry & Admin Support",
      "Virtual Assistant",
      "Software Development",
      "Game Development",
      "E-commerce Development",
      "WordPress & CMS",
      "Blockchain & Crypto",
      "AI & Machine Learning",
      "Data Science & Analytics",
      "Cybersecurity",
      "DevOps & Cloud",
      "Product Management",
      "Business & Finance Consulting",
      "Legal Services",
      "Architecture & Interior Design",
      "Engineering & CAD",
      "Education & E-learning",
      "Customer Support",
      "Sales & Lead Generation",
      "Music & Audio Production",
      "3D Modeling & Rendering",
      "AR/VR Development",
    ],
    []
  );

  return (
    <form action={handelSubmitAction} className="flex flex-col gap-3">
      <input type="hidden" name="clientName" value={clientName} />
      <div>
        <Label htmlFor="title" className="mb-2">
          Project Name
        </Label>
        <Input name="title" id="title" placeholder="Project title" required />
      </div>
      <div>
        <Label htmlFor="description" className="mb-2">
          Description
        </Label>
        <textarea
          name="description"
          id="description"
          placeholder="Project description"
          className="border p-2 outline-0 rounded w-full border-teal"
          required
        />
      </div>
      <Select onValueChange={setCategory} value={category}>
        <SelectTrigger className="w-full">
          {" "}
          {category ? category.replace("_", " ") : "Choose Category"}
        </SelectTrigger>
        <SelectContent>
          {projectCategories.map((item) => (
            <SelectItem value={item.split(" ").join("_")} key={item}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="flex gap-2 ">
        <div className="w-1/2 ">
          <Label htmlFor="budgetMin" className="my-2">
            Min Budget
          </Label>
          <Input
            name="budgetMin"
            id="budgetMin"
            type="number"
            placeholder="Min budget ($)"
            required
          />
        </div>
        <div className="w-1/2 ">
          <Label htmlFor="budgetMax" className="my-2">
            Max Budget
          </Label>
          <Input
            name="budgetMax"
            id="budgetMax"
            type="number"
            placeholder="Max budget ($)"
            required
          />
        </div>
      </div>
      <Button variant="teal" disabled={isPending} type="submit">
        <PendingFormLabel action="Post" isSubmitting={isPending} />
      </Button>
    </form>
  );
}
