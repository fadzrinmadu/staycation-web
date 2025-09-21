import React from "react";

interface TitleProps {
  text: String;
}

const Title: React.FC<TitleProps> = (props: TitleProps) => {
  const { text } = props;
  return (
    <h1 className="text-[42px] font-bold text-[#152C5B]">{text}</h1>
  );
};

export { Title };
