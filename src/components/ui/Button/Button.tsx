import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: String;
  variant: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { text, variant, className, ...rest } = props;
  
  const baseClass = "min-h-[50px] min-w-[210px] p-3 text-base rounded-sm cursor-pointer";
  const primaryClass = `
    text-white 
    bg-[#2749DE] shadow-[0px_8px_15px_0px_rgba(39,73,222,0.3)] 
    hover:bg-[#1A3ABD] hover:shadow-[0px_10px_20px_0px_rgba(39,73,222,0.4)]
  `;
  const secondaryClass = `
    text-[#B2B2B2] bg-[#F5F6F8]
    hover:text-[#898989] hover:bg-[#E5E5E5]
  `;
  
  return (
    <button 
      {...rest}
      className={clsx(baseClass, variant === "primary" ? primaryClass : secondaryClass, className)}
    >
      {text}
    </button>
  );
}

export { Button };
