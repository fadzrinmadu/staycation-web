import React from "react";

interface LinkProps {
  title: string;
  href: string;
  onClick?: () => void;
}

export type { LinkProps };

const Link: React.FC<LinkProps> = (props: LinkProps) => {
  const { title, href, onClick } = props;

  return (
    <a
      href={href}
      onClick={onClick}
      className="text-[#969696] font-light text-[16px] hover:underline transition-colors duration-200"
    >
      {title}
    </a>
  );
};

export { Link };
