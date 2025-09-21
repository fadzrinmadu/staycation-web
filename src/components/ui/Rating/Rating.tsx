import { StarIcon } from "@/assets/images/icons";
import clsx from "clsx";
import React from "react";

interface RatingProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
}

const Rating: React.FC<RatingProps> = (props: RatingProps) => {
  const { value, className, ...rest } = props;
  const ratingMax = 5;
  
  return (
    <div className={clsx("flex gap-1", className)} {...rest}>
      {Array.from({ length: value }).map((_, index) => (
        <StarIcon key={index} type="filled" />
      ))}
      {Array.from({ length: ratingMax - value }).map((_, index) => {
        return <StarIcon key={index} type="outlined" />;
      })}
    </div>
  )
};

export { Rating };
