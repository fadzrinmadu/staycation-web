import React from "react";

interface TextProps {
  value: String;
}

const Text: React.FC<TextProps> = (props: TextProps) => {
  const { value } = props;
  return (
    <p className="text-base font-light text-[#969696] leading[1.7]">{value}</p>
  );
};

export { Text };
