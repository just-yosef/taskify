import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import type { PortfolioItem } from "../types";
import { Badge } from "@/components/ui/badge";
import { Github, Link2, Tag } from "lucide-react";

const PortfolioItem = ({
  title,
  technologies,
  liveUrl,
  githubUrl,
}: Partial<PortfolioItem>) => {
  return (
    <Card className="border-teal">
      <CardHeader>
        <CardTitle> {title} </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex h-[200px] bg-gray-100 rounded-xl mb-4" />
        {technologies!.map((el) => (
          <Badge variant="outline" className="text-teal ml-2">
            <Tag /> {el}
          </Badge>
        ))}
        <section className="flex gap-2 mt-2">
          {liveUrl ? <Link2 /> : ""}
          {githubUrl ? <Github /> : ""}
        </section>
      </CardContent>
    </Card>
  );
};

export default PortfolioItem;
