"use client";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { Loader } from "@/app/(shared)/_components";
import "@/lib/i18n";
const Categories = dynamic(() => import("../../_components/Categories"));
const Features = dynamic(() => import("../../_components/Features"));
const HeroSection = dynamic(() => import("../../_components/HeroSection"));
const HowItWorks = dynamic(() => import("../../_components/HowItWorks"));
const JoinToUs = dynamic(() => import("../../_components/JoinToUs"));
const Testimonials = dynamic(() => import("../../_components/Testmonials"));
const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <HeroSection />
      <HowItWorks />
      <Categories />
      <JoinToUs />
      <Features />
      <Testimonials />
    </Suspense>
  );
};

export default page;
