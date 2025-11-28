import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tag } from "lucide-react";
import React, { type JSX } from "react";

interface Item {
  title: string;
  tags: string[];
  children: React.ReactNode;
  icon?: any;
}
const CardGridItem = ({
  children,
  title,
  icon,
}: Pick<Item, "children" | "title" | "icon">) => {
  return (
    <Card className="border-teal-soft px-0">
      <CardGridItem.Title icon={icon} title={title} />
      <CardContent className="">{children}</CardContent>
    </Card>
  );
};
export default CardGridItem;
CardGridItem.Title = ({ title, icon }: Pick<Item, "title" | "icon">) => {
  return (
    <CardHeader className="mb-2 !p-0 items-center border-b-2 border-b-[var(--color-teal-soft)]">
      <CardTitle className="px-4 pb-3 text-teal flex gap-2 items-center">
        {icon} {title}
      </CardTitle>
    </CardHeader>
  );
};

CardGridItem.PlacholderImage = () => {
  return <div className="flex h-[200px] bg-teal-soft rounded-xl mb-4" />;
};

CardGridItem.Tags = ({ tags }: Pick<Item, "tags">) => {
  return (
    <section className="flex gap-1 mt-2 flex-wrap">
      {tags.map((el) => (
        <Badge key={el.toUpperCase()} variant="outline" className="text-teal">
          <Tag /> {el}
        </Badge>
      ))}
    </section>
  );
};
