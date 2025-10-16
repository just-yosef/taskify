import React from "react";
import { HeaderItem } from "../../(shared)/_components";
import { MyAccount } from "../../(shared)/_components/dropdowns";
import { User } from "lucide-react";

const UserActions = () => {
  const el = {
    label_ar: "حسابي",
    label_en: "",
    component: <MyAccount />,
    icon: User,
  };
  return <HeaderItem hiddenMobile item={el} />;
};

export default UserActions;
