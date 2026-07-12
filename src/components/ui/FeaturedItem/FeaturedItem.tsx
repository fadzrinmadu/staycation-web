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
  type: "highlight" | "recommended" | "booking";
  badge?: FeaturedBadgeProps;
  price?: string;
  duration?: string;
}

export type { FeaturedItemProps };

const FeaturedItem: React.FC<FeaturedItemProps> = (props: FeaturedItemProps) => {
  const { imagePath, title, description, type, badge, price, duration, className, ...rest } = props;

  return (
    <div className={clsx("relative", className)} {...rest}>
      <div
        className={clsx(
          "relative rounded-[15px] overflow-hidden h-[215px]",
          type === "highlight" && "min-h-full",
          type === "recommended" && "mb-4",
          type === "booking" && "mb-4 h-[270px]",
        )}
      >
        <Overlay />
        {badge && (
          <FeaturedBadge
            {...badge}
            className={clsx("absolute top-0 right-0 z-10 w-[180px] h-[40px]")}
          />
        )}
        <div className="relative w-full h-full">
          <Image
            src={imagePath}
            alt="Featured Item"
            fill
            className={clsx("object-cover")}
          />
        </div>
      </div>

      {/* Info Row */}
      <div className={clsx(
        type === "highlight" && "absolute z-10 left-4 bottom-4 text-white",
        (type === "recommended" || type === "booking") && "flex items-center justify-between gap-4",
      )}>
        {/* Title & Description */}
        <div>
          <h3
            className={clsx(
              "text-[20px] font-semibold",
              (type === "recommended" || type === "booking") && "text-[#152C5B]",
            )}
          >
            {title}
          </h3>
          <p
            className={clsx(
              "text-[15px] font-light",
              (type === "recommended" || type === "booking") && "text-[#969696]",
            )}
          >
            {description}
          </p>
        </div>

        {/* Price & Duration — hanya untuk type booking */}
        {type === "booking" && price && (
          <div className="text-right shrink-0">
            <span className="text-[#152C5B] text-[16px] font-medium">{price} </span>
            <span className="text-[#969696] text-[16px] font-light">per </span>
            <span className="text-[#152C5B] text-[16px] font-medium">{duration}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export { FeaturedItem };
