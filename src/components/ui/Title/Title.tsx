import React from "react";
import clsx from "clsx";

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text: String;
}

const Title: React.FC<TitleProps> = (props: TitleProps) => {
  const { text, className, ...rest } = props;
  return (
    <h1 
      className={clsx("text-[42px] font-bold text-[#152C5B]", className)} 
      {...rest}
    >
      {text}
    </h1>
  );
};

export { Title };
