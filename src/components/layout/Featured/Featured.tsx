import React from "react";
import clsx from "clsx";
import Link from "next/link";

import { Title } from "@/components/ui";
import { 
  FeaturedItem, 
  FeaturedItemProps, 
} from "@/components/ui/FeaturedItem";

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
          <Link 
            key={`${item.id}-${index + 2}`}
            href={`/stays/${item.id}`}
            className={clsx(
              "block h-full",
              type === "highlight" && index === 0 && "md:row-span-2"
            )}
          >
            <FeaturedItem 
              {...item}
              key={item.id}
              type={type}
              className="h-full"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export { Featured };
