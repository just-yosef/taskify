import React from "react";
const Settings = dynamic(
  () => import("../../_components").then((mod) => mod.Settings),
  {
    loading() {
      return <>Loading..</>;
    },
  }
);
import dynamic from "next/dynamic";
const page = () => <Settings />;

export default page;
