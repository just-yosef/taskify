import { Brain, Brush, Building, Code, File } from "lucide-react";
interface Service {
  title: string;
  freelancerName: string;
  price: number;
  duration: string;
}
export const categories = [
  { id: 1, title: "Programming", icon: Code },
  { id: 2, title: "Designing", icon: Brush },
  { id: 3, title: "Content Creation", icon: File },
  { id: 4, title: "AI", icon: Brain },
  {
    id: 5,
    title: "Enginnering",
    icon: Building,
    services: [
      {
        title: "Build Software Archticiture From Scratch",
        freelancerName: "Ahmed D",
        price: 1500,
        duration: "7d",
      },
      {
        title: "Build Software Archticiture From Scratch",
        freelancerName: "Ahmed A",
        price: 310,
        duration: "14d",
      },
      {
        title: "Build Software Archticiture From Scratch",
        freelancerName: "Ahmed C",
        price: 150,
        duration: "2d",
      },
      {
        title: "Build Software Archticiture From Scratch",
        freelancerName: "Ahmed B",
        price: 100,
        duration: "1M",
      },
    ],
  },
];
