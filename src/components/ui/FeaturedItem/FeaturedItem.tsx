import React from "react";
import clsx from "clsx";
import Image, { StaticImageData } from "next/image";

import { FeaturedBadgeProps } from "../FeaturedBadge";
import { FeaturedBadge, Overlay } from "@/components/ui";

interface FeaturedItemProps extends React.HTMLAttributes<HTMLDivElement> {
  imagePath: string | StaticImageData;
  title: string;
  description: string;
  badge: FeaturedBadgeProps;
}

const FeaturedItem: React.FC<FeaturedItemProps> = (props: FeaturedItemProps) => {
  const { imagePath, title, description, badge, className, ...rest } = props;

  return (
    <div
      className={clsx("relative mb-4 h-[215px] max-w-[350px] rounded-[15px] overflow-hidden")}
    >
      <Overlay />
      <FeaturedBadge 
        {...badge} 
        className={clsx("absolute top-0 right-0 z-10 w-[180px]")}
      />
      <Image 
        src={imagePath}
        alt="Featured Item"
        className={clsx(`absolute h-[215px] object-cover rounded-[15px]`)}
      />
      <div className={clsx("absolute z-10 left-4 bottom-4 text-white")}>
        <h3 className={clsx("text-[20px] font-normal")}>{title}</h3>
        <p className={clsx("text-[15px] font-light")}>{description}</p>
      </div>
    </div>
  );
};

export { FeaturedItem };
