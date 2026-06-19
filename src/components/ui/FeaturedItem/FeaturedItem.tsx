import React from "react";
import clsx from "clsx";
import Image, { StaticImageData } from "next/image";

import { FeaturedBadgeProps } from "../FeaturedBadge";
import { FeaturedBadge, Overlay } from "@/components/ui";

interface FeaturedItemProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  imagePath: string | StaticImageData;
  title: string;
  description: string;
  type: "highlight" | "recommended";
  badge?: FeaturedBadgeProps;
}

export type { FeaturedItemProps };

const FeaturedItem: React.FC<FeaturedItemProps> = (props: FeaturedItemProps) => {
  const { imagePath, title, description, type, badge, className, ...rest } = props;

  return (
    <div className={clsx("relative", className)}>
      <div
        className={clsx(
          "relative rounded-[15px] overflow-hidden h-[215px]",
          type === "highlight" && "min-h-full",
          type === "recommended" && "mb-4",
        )}
      >
        <Overlay />
        {badge && (
          <FeaturedBadge
            {...badge}
            className={clsx(
              "absolute top-0 right-0 z-10 w-[180px] h-[40px]"
            )}
          />
        )}
        <Image 
          src={imagePath}
          alt="Featured Item"
          className={clsx("w-full h-full object-cover")}
        />
      </div>
      <div className={clsx(
        type === "highlight" && "absolute z-10 left-4 bottom-4 text-white",
        type === "recommended" && ""
      )}>
        <h3
          className={clsx(
            "text-[20px] font-normal", 
            type === "recommended" && "text-[#152C5B]]"
          )}
        >
          {title}
        </h3>
        <p 
          className={clsx(
            "text-[15px] font-light",
            type === "recommended" && "text-[#969696]]"
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export { FeaturedItem };
