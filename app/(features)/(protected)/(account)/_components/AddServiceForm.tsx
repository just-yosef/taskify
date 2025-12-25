"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
type Rating = {
  average: number;
  count: number;
};

type Props = {
  title: string;
  category: string;
  price: number;
  rating: Rating;
};

const ServiceForm = () => {
  const [formData, setFormData] = useState<Props>({
    title: "",
    category: "",
    price: 0,
    rating: {
      average: 0,
      count: 0,
    },
  });

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
          {/* Title */}
          <div className="space-y-1">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Service title"
            />
          </div>
          {/* Category */}
          <div className="space-y-1">
            <Label htmlFor="category">Category</Label>
            <Input
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Graphic Design"
            />
          </div>
          {/* Price */}
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
          </div>
          <Button type="submit" variant="borderTeal" className="w-full">
            Save Service
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ServiceForm;
