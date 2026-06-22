import React, { FC } from "react";
import Link from "next/link";
import clsx from "clsx";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export type { BreadcrumbItem };

const Breadcrumb: FC<BreadcrumbProps> = (props: BreadcrumbProps) => {
  const { items } = props;
  
  return (
    <nav>
      <ol 
        className={clsx("flex items-center gap-6")}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li
              key={`${item.label} - ${index + 2}`}
              className={clsx("flex items-center gap-6 text-[18px]")}
            >
              {isLast ? (
                <span
                  className={clsx("font-medium text-[#152C5B]")}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href || "/"}
                  className={clsx("font-light text-[#969696]")}
                >
                  {item.label}
                </Link>
              )}
              
              {!isLast && (
                <span 
                  className={clsx("font-light text-[#969696]")}
                >
                  /
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
};

export { Breadcrumb };
