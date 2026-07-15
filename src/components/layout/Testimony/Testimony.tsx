import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";

import { Button, Rating, Text, Title } from "@/components/ui";

interface TestimonyProps {
  image: StaticImageData | string;
  title: string;
  rating: number;
  quote: string;
  author: string;
  onReadStory?: () => void;
}

export type { TestimonyProps };

const Testimony: FC<TestimonyProps> = (props: TestimonyProps) => {
  const { image, title, rating, quote, author, onReadStory } = props;

  return (
    <div className="flex flex-col md:flex-row items-center gap-[70px]">
      <div className="relative w-[405px] h-[512px] shrink-0">
        <div className="absolute top-0 left-0 w-[373px] h-[480px] rounded-2xl border border-[#E5E5E5]" />
        <div className="absolute bottom-0 right-0 w-[373px] h-[480px] rounded-2xl rounded-br-[70px] overflow-hidden">
          <Image
            src={image}
            alt={author}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="w-[640px] max-w-full">
        <Title
          type="h2"
          text={title}
          className="mb-6"
        />

        <Rating
          value={rating}
          className="mb-3"
        />

        <Text
          type="testimonial"
          value={quote}
          className="mb-3"
        />

        <Text
          type="paragraph"
          value={author}
          className="mb-8"
        />

        <Button
          text="Read Their Story"
          variant="primary"
          onClick={onReadStory}
        />
      </div>
    </div>
  );
};

export { Testimony };
