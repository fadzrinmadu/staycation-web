import clsx from "clsx";
import React from "react";

interface FeaturedBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  primaryText: string;
  secondaryText: string;
}

const FeaturedBadge: React.FC<FeaturedBadgeProps> = (props: FeaturedBadgeProps) => {
  const { primaryText, secondaryText, className, ...rest } = props;
  return (
    <div
      className={
        clsx(`
          max-w-[180px] h-10 
          bg-[#FF498B] 
          flex justify-center items-center 
          rounded-bl-[18px]
        `, 
        className,
      )}
      {...rest}
    >
      <p className="text-white text-[15px]">
        <span className="font-medium">{primaryText}</span>{" "}
        <span className="font-light">{secondaryText}</span>
      </p>
    </div>
  );
};

export { FeaturedBadge };
