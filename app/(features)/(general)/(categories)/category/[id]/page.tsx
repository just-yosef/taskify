import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { Loader } from "@/app/(shared)/_components";

const CategoryPage = dynamic(() => import("../../_components/CategoryPage"));
const page = async ({ params }: PageProps<"/category/[id]">) => {
  const { id } = await params;
  return (
    <Suspense fallback={<Loader />}>
      <CategoryPage id={+id} />
    </Suspense>
  );
};

export default page;
