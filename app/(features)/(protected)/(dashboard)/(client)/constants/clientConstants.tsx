import { TopBarLinksArray } from "@/app/(shared)/types/ui";
import {
  House,
  Bell,
  MessageCircle,
  Wallet,
  Settings,
  Plus,
} from "lucide-react";
import { Offer } from "../types";
import { lazy } from "react";
// import { MessagesContent } from "../../(freelancer)/_components";
const MessagesContent = lazy(
  () => import("../../(freelancer)/_components/MessagesContent")
);
const Notifications = lazy(
  () => import("../../(freelancer)/_components/Notifications")
);
export const clientNavLinks: TopBarLinksArray = [
  {
    label_ar: "لوحة التحكم",
    label_en: "Dashboard",
    url: "/dashboard",
    icon: House,
    type: "primary_nav",
  },
  {
    label_ar: "الإشعارات",
    label_en: "Notifications",
    // url: "/notifications",
    component: <Notifications />,
    icon: Bell,
    count_key: "notifications_count",
    type: "utility_indicator",
    is_dropdown: true,

  },
  {
    label_ar: "الرسائل",
    label_en: "Messages",
    // url: "/messages",
    component: <MessagesContent />,
    icon: MessageCircle,
    count_key: "messages_count",
    type: "utility_indicator",
    is_dropdown: true,
  },
  {
    label_ar: "الرصيد",
    label_en: "Wallet",
    url: "/wallet",
    icon: Wallet,
    value_key: "current_balance",
    type: "financial",
  },
  {
    label_ar: "الإعدادات",
    label_en: "Settings",
    url: "/profile",
    icon: Settings,
    is_dropdown: true,
    type: "profile_menu",
  },
  {
    label_ar: "اضف طلب مشروع",
    label_en: "Add Project",
    url: "/post-job",
    type: "action_button",
    style: "button_primary",
    icon: Plus,
  },
];
export const offers: Offer[] = [
  {
    id: 1,
    freelancerName: "John Smith",
    projectTitle: "Educational Mobile App",
    price: 250,
    duration: 5,
    specialization: "Mobile App Developer (Flutter & React Native)",
  },
  {
    id: 2,
    freelancerName: "Emily Johnson",
    projectTitle: "Tourism Company Website",
    price: 400,
    duration: 7,
    specialization: "Full-Stack Web Developer (Next.js & Node.js)",
  },
  {
    id: 3,
    freelancerName: "David Brown",
    projectTitle: "E-commerce Dashboard UI",
    price: 320,
    duration: 6,
    specialization: "UI/UX Designer (Figma & Tailwind CSS)",
  },
  {
    id: 4,
    freelancerName: "Sophia Williams",
    projectTitle: "Landing Page Redesign",
    price: 180,
    duration: 3,
    specialization: "Frontend Developer (React & HTML/CSS)",
  },
];

export const messages = [
  {
    id: "1",
    senderName: "Sarah Johnson",
    content: "Hey, I just wanted to check on the project progress...",
    time: "10 minutes ago",
    isRead: false,
  },
  {
    id: "2",
    senderName: "Michael Brown",
    content: "I’ve sent the new design proposal for your review.",
    time: "1 hour ago",
    isRead: true,
  },
  {
    id: "3",
    senderName: "John Smith",
    content: "Can we schedule a quick call tomorrow morning?",
    time: "Yesterday",
    isRead: false,
  },
  {
    id: "4",
    senderName: "John Smith",
    content: "Can we schedule a quick call tomorrow morning?",
    time: "Yesterday",
    isRead: false,
  },
  
];

export const projects = [
  {
    id: 1,
    title: "Mobile App UI Design",
    status: "In Progress",
    variant: "peach",
    author: "John Smith",
    remaining: "5 days left",
  },
  {
    id: 2,
    title: "AI Chatbot Integration",
    status: "Under Review",
    variant: "sky",
    author: "Sarah Johnson",
    remaining: "2 days left",
  },
  {
    id: 3,
    title: "E-Commerce Website",
    status: "Completed",
    variant: "teal",
    author: "Michael Brown",
    remaining: "Delivered yesterday",
  },
  {
    id: 3,
    title: "E-Commerce Website",
    status: "Completed",
    variant: "teal",
    author: "Michael Brown",
    remaining: "Delivered yesterday",
  },
];

export const stats = [
  { title: "Posted Jobs", value: 5 },
  { title: "New Offers", value: 12 },
  { title: "Freelancers", value: 3 },
  { title: "Total Spend", value: "$1,250" },
];
