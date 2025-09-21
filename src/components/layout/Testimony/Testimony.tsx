import React from "react";
import Image from "next/image";

import { TestimonyExample1 } from "@/assets/images/examples";
import { Button, Rating, Text, Title } from "@/components/ui";

const Testimony: React.FC = () => {
  return (
    <div id="hero" className="flex flex-col md:flex-row items-center gap-[70px]">
      <div>
        <Image
          src={TestimonyExample1}
          alt="Test Banner"
          className="w-[405px] max-w-full"
        />
      </div>
      <div className="w-[640px] max-w-full">
        <Title
          type="h2"
          text="Happy Family"
          className="mb-10"
        />
        <Rating 
          value={5} 
          className="mb-2" 
        />
        <Text
          type="testimonial"
          value="What a great trip with my family and i should try again and again next time soon ..." 
          className="mb-2"
        />
        <Text
          type="paragraph"
          value="Rian, Product Designer" 
          className="mb-10"
        />
        <Button
          text="Read Their Story" 
          variant="primary"
        />
      </div>
    </div>
  );
};

export { Testimony };
