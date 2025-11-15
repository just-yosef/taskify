import { TopBarLinksArray } from "@/app/(shared)/types/ui";
import {
  House,
  Bell,
  MessageCircle,
  Wallet,
  Settings,
  Plus,
  DollarSign,
} from "lucide-react";
import { Offer } from "../types";

import { Project } from "../../(shared)/types";
import dynamic from "next/dynamic";
// import { MessagesContent } from "../../(freelancer)/_components";
const MessagesContent = dynamic(
  () => import("../../(freelancer)/_components/MessagesContent")
);
const Notifications = dynamic(
  () => import("../../(freelancer)/_components/Notifications")
);
export const clientNavLinks: TopBarLinksArray = [
  {
    label_ar: "لوحة التحكم",
    label_en: "Dashboard",
    url: "/dashboard",
    icon: House,
    type: "primary_nav",
    translationKey: "dashboard",
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
    translationKey: "notifications",
  },
  {
    label_ar: "الرسائل",
    label_en: "",
    // url: "/messages",
    component: <MessagesContent />,
    icon: MessageCircle,
    count_key: "messages_count",
    type: "utility_indicator",
    is_dropdown: false,
    translationKey: "messages",
  },
  {
    label_ar: "الرصيد",
    label_en: "Pricing",
    url: "/pricing",
    icon: DollarSign,
    value_key: "current_balance",
    type: "financial",
    translationKey: "pricing",
  },
  {
    label_ar: "الإعدادات",
    label_en: "Settings",
    url: "/profile",
    icon: Settings,
    is_dropdown: true,
    type: "profile_menu",
    translationKey: "settings",
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
export const clientHeaderLinks = clientNavLinks.map((item) => {
  return { href: item?.url, label: item.label_en };
});
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
    _id: "1",
    title: "تصميم موقع شركة سياحة",
    description:
      "مطلوب تصميم واجهة مستخدم جذابة لموقع شركة سياحية تشمل صفحة رئيسية، حجز الرحلات، والمدونة.",
    budgetMin: 200,
    budgetMax: 500,
    duration: "10 أيام",
    category: "تصميم واجهات",
    status: "open",
    clientId: "101",
    createdAt: "2025-10-10T12:00:00Z",
    clientName: "asdasd",
  },
  {
    _id: "2",
    title: "برمجة تطبيق توصيل طلبات",
    description:
      "مطلوب تطبيق موبايل لتوصيل الطلبات (عميل - مندوب - مطعم) باستخدام React Native أو Flutter.",
    budgetMin: 1000,
    budgetMax: 2500,
    duration: "30 يوم",
    category: "تطبيقات جوال",
    status: "open",
    clientId: "102",
    createdAt: "2025-10-09T15:30:00Z",
    clientName: "asdasd",
  },
  {
    _id: "3",
    title: "كتابة محتوى تسويقي لموقع إلكتروني",
    description:
      "نحتاج كاتب محتوى محترف لصياغة صفحات الموقع بطريقة جذابة وتتناسب مع محركات البحث (SEO).",
    budgetMin: 80,
    budgetMax: 150,
    duration: "5 أيام",
    category: "كتابة محتوى",
    status: "in_progress",
    clientId: "103",
    createdAt: "2025-10-07T09:45:00Z",
    clientName: "asdasd",
  },
  {
    _id: "4",
    title: "تصميم شعار وهوية بصرية لمطعم جديد",
    description:
      "نحتاج مصمم محترف لتصميم شعار وهوية متكاملة تشمل كارت العمل، قوائم الطعام، واللوحات.",
    budgetMin: 150,
    budgetMax: 400,
    duration: "7 أيام",
    category: "تصميم جرافيك",
    status: "completed",
    clientId: "104",
    createdAt: "2025-10-05T11:20:00Z",
    clientName: "asdasd",
  },
  {
    _id: "5",
    title: "تطوير لوحة تحكم إدارية (Dashboard)",
    description:
      "مطلوب بناء Dashboard بإطار عمل Next.js وTailwind لإدارة البيانات والمستخدمين.",
    budgetMin: 600,
    budgetMax: 1000,
    duration: "14 يوم",
    category: "تطوير ويب",
    status: "open",
    clientId: "105",
    createdAt: "2025-10-01T08:15:00Z",
    clientName: "asdasd",
  },
] satisfies Project[];
export const stats = [
  { title: "Posted Jobs", value: 5 },
  { title: "New Offers", value: 12 },
  { title: "Freelancers", value: 3 },
  { title: "Total Spend", value: "$1,250" },
];
