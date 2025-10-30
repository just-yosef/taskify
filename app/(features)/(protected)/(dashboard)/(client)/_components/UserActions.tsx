import React from "react";
import { HeaderItem } from "../../(shared)/_components";
import { MyAccount } from "../../(shared)/_components/dropdowns";
import { User } from "lucide-react";
import { NavLink } from "@/app/(shared)/types";

const UserActions = () => {
  const el = {
    label_ar: "حسابي",
    label_en: "",
    component: <MyAccount />,
    icon: User,
    translationKey: ""
  } as NavLink;
  return <HeaderItem hiddenMobile item={el} />;
};

export default UserActions;
