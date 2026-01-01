"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { api } from "@/app/(features)/(general)/constants";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Toast } from "@/app/(shared)/_components";
type Rating = {
  average: number;
  count: number;
};

type Props = {
  title: string;
  category: string;
  price: number;
  rating: Rating;
  description: string;
  deliveryTime: number;
};
type FormDataState = Partial<Props>;
const ServiceForm = () => {
  const userId = localStorage.getItem("userId");
  const [formData, setFormData] = useState<FormDataState>({
    title: "aaa",
    category: "",
    description: "",
    price: 0,
    deliveryTime: 1,
    rating: {
      average: 0,
      count: 0,
    },
  });
  const handleSubmitForm = async () => {
    if (
      Object.keys(formData)
        .filter((el) => el !== "rating")
        .every((el) => {
          // @ts-ignore
          return Boolean(formData[el]) === false;
        })
    )
      return;
    try {
      await api.post("/services", {
        userId,
        title: formData.title,
        slug: `${formData.title}-${Date.now()}`,
        description: formData.description,
        category: formData.category,
        pricing: {
          type: "fixed",
          basePrice: formData.price,
        },
        deliveryTime: formData.deliveryTime,
      });
      toast.custom(() => (
        <Toast message="Service Created Succssfull" status="success" />
      ));
    } catch (error: any) {
      console.log(error.message);
      toast.custom(() => (
        <Toast message="Faild To Create Service" status="error" />
      ));
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Card className="p-0">
      <CardHeader>
        <CardTitle>Create Service</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  title: e.target.value,
                }))
              }
              placeholder="Service title"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="category">Category</Label>
            <Select
              onValueChange={(val) =>
                setFormData({
                  category: val,
                })
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Design & Creative</SelectLabel>
                  {[
                    "Graphic Design",
                    "Logo Design",
                    "Brand Identity",
                    "UI/UX Design",
                    "Web Design",
                    "Mobile App Design",
                    "Illustration",
                    "Motion Graphics",
                    "Video Editing",
                    "Animation",
                  ].map((el) => (
                    <SelectItem value={el.toLowerCase()}> {el} </SelectItem>
                  ))}
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Development</SelectLabel>
                  {[
                    "Web Development",
                    "Frontend Development",
                    "Backend Development",
                    "Full Stack Development",
                    "Mobile App Development",
                    "WordPress Development",
                    "E-commerce Development",
                    "API Development",
                    "Database Design",
                    "DevOps & Cloud",
                  ].map((el) => (
                    <SelectItem value={el.toLowerCase()}> {el} </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1">
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              min={0}
            />
            <Label htmlFor="delivery-time">Delivery Time</Label>
            <Input
              id="delivery-time"
              name="delivery-time"
              type="number"
              value={formData.deliveryTime}
              onChange={(e) =>
                setFormData({ ...formData, deliveryTime: +e.target.value })
              }
              defaultValue={1}
            />
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>
          <Button
            onClick={handleSubmitForm}
            type="submit"
            variant="borderTeal"
            className="w-full"
          >
            Create New Service
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ServiceForm;
