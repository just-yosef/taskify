import {
  Bell,
  House,
  MessageCircle,
  Plus,
  Settings,
  Wallet,
} from "lucide-react";
import {
  MessagesContent,
  Notifications,
} from "../../(dashboard)/(freelancer)/_components";
import { NavLink } from "@/app/(shared)/types";
import { AddNewProject } from "../../(dashboard)/(client)/_components";

export const headerLinks = [
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
] satisfies NavLink[];
