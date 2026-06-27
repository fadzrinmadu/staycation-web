import React, { FC } from 'react';
import clsx from 'clsx';

import Breadcrumb from "@/components/ui/Breadcrumb";
import { BreadcrumbItem } from "@/components/ui/Breadcrumb";

interface PageTitleProps {
  title: string;
  description?: string;
  breadcrumbItems?: BreadcrumbItem[];
  showBreadCrumb?: boolean;
}

const PageTitle: FC<PageTitleProps> = (props: PageTitleProps) => {
  const { title, description, breadcrumbItems, showBreadCrumb } = props;
  
  return (
    <div 
      className={clsx("flex flex-col items-center gap-3 py-6 md:flex-row md:items-center md:justify-between md:py-8")}
    >
      <div 
        className={clsx(
          "w-full md:w-auto",
          showBreadCrumb && "hidden"
        )}
      >
        <Breadcrumb 
          items={breadcrumbItems || []} 
        />
      </div>
      
      <div 
        className={clsx("text-center flex-1 px-4")}
      >
        <h1 
          className={clsx("text-2xl font-semibold text-[#152C5B] sm:text-3xl md:text-[42px]")}
        >
          {title}
        </h1>
        {description && (
          <p
            className={clsx("mt-1 text-sm font-light text-[#969696] sm:text-base md:text-[18px]")}
          >
            {description}
          </p>
        )}
      </div>
      
      <div 
        className="hidden md:block md:invisible md:w-auto"
      >
        <Breadcrumb 
          items={breadcrumbItems || []} 
        />
      </div>
    </div>
  );
};

export { PageTitle };
