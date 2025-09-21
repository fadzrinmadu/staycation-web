import React from "react";
import clsx from "clsx";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  value: String;
}

const Text: React.FC<TextProps> = (props: TextProps) => {
  const { value, className, ...rest } = props;
  return (
    <p 
      className={clsx("text-base font-light text-[#969696] leading[1.7]", className)}
      {...rest}
    >
      {value}
    </p>
  );
};

export { Text };
