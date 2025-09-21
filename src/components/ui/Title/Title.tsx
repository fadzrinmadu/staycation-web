import React from "react";
import clsx from "clsx";

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text: String;
  type: "h1" | "h2" | "h3" | "h4";
}

const Title: React.FC<TitleProps> = (props: TitleProps) => {
  const { text, type, className, ...rest } = props;
  return (
    <h1 
      className={clsx(
        type === "h1" && "text-[42px] font-bold text-[#152C5B]",
        type === "h2" && "text-[24px] font-medium text-[#152C5B]",
        type === "h4" && "text-[18px] font-medium text-[#152C5B]",
        className
      )}
      {...rest}
    >
      {text}
    </h1>
  );
};

export { Title };
