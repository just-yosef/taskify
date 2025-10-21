import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/home" className="text-2xl font-semibold font-[rubicRegular]">
      Taskify
    </Link>
  );
};

export default Logo;
