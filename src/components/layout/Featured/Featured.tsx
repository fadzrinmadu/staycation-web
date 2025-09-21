import { Title } from "@/components/ui";
import { FeaturedItem, FeaturedItemProps } from "@/components/ui/FeaturedItem";
import clsx from "clsx";
import React from "react";

interface FeaturedProps {
  title: string;
  type: "highlight" | "recommended";
  data: FeaturedItemProps[];
}

const Featured: React.FC<FeaturedProps> = (props: FeaturedProps) => {
  const { title, type, data } = props;
  
  return (
    <div id="featured">
      <Title type="h2" text={title} className="mb-[20px]" />
      <div className={clsx(
        "grid gap-[30px]",
        type === "highlight" && "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        type === "recommended" && "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
      )}>
        {data.map((item, index) => (
          <FeaturedItem 
            {...item}
            key={index}
            className={clsx(type === "highlight" && index === 0 && "row-span-2")} 
          />
        ))}
      </div>
    </div>
  );
};

export { Featured };
