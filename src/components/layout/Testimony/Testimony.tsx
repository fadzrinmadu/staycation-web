import React from "react";
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

const Testimony: React.FC<TestimonyProps> = (props) => {
  const { image, title, rating, quote, author, onReadStory } = props;

  return (
    <div className="flex flex-col md:flex-row items-center gap-[70px]">
      <div>
        <Image
          src={image}
          alt={author}
          className="w-[405px] max-w-full"
        />
      </div>
      <div className="w-[640px] max-w-full">
        <Title
          type="h2"
          text={title}
          className="mb-10"
        />
        <Rating
          value={rating}
          className="mb-2"
        />
        <Text
          type="testimonial"
          value={quote}
          className="mb-2"
        />
        <Text
          type="paragraph"
          value={author}
          className="mb-10"
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
