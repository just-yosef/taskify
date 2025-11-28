import { TitleSection } from "@/app/(shared)/_components";
import React from "react";
import { features } from "../constants";

const Features = () => {
  return (
    <section className="py-16">
      <TitleSection text="Features" translationKey="features" />
      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {features.map(({ icon: Icon, title }) => (
          <div
            key={title}
            className="flex flex-col bg-teal-50/50 border-teal-soft items-center justify-center p-10 rounded-2xl text-center shadow-sm hover:shadow-lg transition"
          >
            <Icon className="w-8 h-8 text-primary mb-3" />
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Features;
