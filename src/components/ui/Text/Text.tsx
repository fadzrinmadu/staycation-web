import React from "react";
import clsx from "clsx";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  type: "paragraph" | "testimonial";
  value: String;
}

const Text: React.FC<TextProps> = (props: TextProps) => {
  const { value, type, className, ...rest } = props;
  return (
    <p 
      className={clsx(
        "leading[1.7]",
        type === "paragraph" && "text-base text-[#969696] font-light",
        type === "testimonial" && "text-[28px] text-[#152C5B] font-regular",
        className,
      )}
      {...rest}
    >
      {value}
    </p>
  );
};

export { Text };
