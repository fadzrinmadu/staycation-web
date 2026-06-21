import React, { FC } from 'react';
import clsx from 'clsx';

interface SectionParagraphProps {
  title?: string;
  paragraphs?: string[];
}

const SectionParagraph: FC<SectionParagraphProps> = (props: SectionParagraphProps) => {
  const { title, paragraphs } = props;
  
  return (
    <div
      className={clsx("flex flex-col gap-2")}
    >
      {title && (
        <h2 
          className={clsx("text-[20px] font-medium text-[#152C5B]")}
        >
          {title}
        </h2>
      )}
      
      <div
        className={clsx("flex flex-col gap-2")}
      >
        {paragraphs && paragraphs.map((paragraph, index) => (
          <p 
            key={index}
            className={clsx("text-[16px] font-light text-[#969696]")}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export { SectionParagraph };
