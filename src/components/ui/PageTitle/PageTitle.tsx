import React, { FC } from 'react';
import clsx from 'clsx';

import Breadcrumb from "@/components/ui/Breadcrumb";
import { BreadcrumbItem } from "@/components/ui/Breadcrumb";

interface PageTitleProps {
  title: string;
  description?: string;
  breadcrumbItems: BreadcrumbItem[];
}

const PageTitle: FC<PageTitleProps> = (props: PageTitleProps) => {
  const { title, description, breadcrumbItems } = props;
  
  return (
    <div 
      className={clsx("flex items-center justify-between py-8")}
    >
      <Breadcrumb 
        items={breadcrumbItems} 
      />
      
      <div 
        className={clsx("text-center flex-1")}
      >
        <h1 
          className={clsx("text-[42px] font-semibold text-[#152C5B]")}
        >
          {title}
        </h1>
        <p
          className={clsx("text-[18px] font-light text-[#969696]")}
        >
          {description}
        </p>
      </div>
      
      <div 
        className="invisible"
      >
        <Breadcrumb 
          items={breadcrumbItems} 
        />
      </div>
    </div>
  );
};

export { PageTitle };
