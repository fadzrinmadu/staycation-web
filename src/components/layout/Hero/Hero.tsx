
import React from "react";
import Image from "next/image";

import type { StatsItemProps } from "@/components/ui/StatsItem";

import HeroBanner from "@/assets/images/banners/hero-banner.jpg";
import { Button, StatsItem, Text, Title } from "@/components/ui";
import { CitiesIcon, TravelersIcon, TreasuresIcon } from "@/assets/images/icons";

interface HeroProps {
  statsItems: StatsItemProps[];
}

const Hero: React.FC<HeroProps> = (props: HeroProps) => {
  const { statsItems } = props;
  
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10">
      <div className="w-[430px] max-w-full">
        <Title 
          type="h1"
          text="Forget busy work, start next vacation"
          className="mb-5"
        />
        <Text 
          type="paragraph"
          value="We provide  what you need to enjoy your holiday with family. Time to make another memorable moments."
          className="mb-[30px] w-[365px] max-w-full"
        />
        <div className="mb-[60px]">
          <Button 
            text="Show Me Now" 
            variant="primary"
          />
        </div>
        <div 
          className="flex flex-wrap gap-6"
        >
          {statsItems.map((item, index) => (
            <StatsItem
              key={item.label + index}
              icon={item.icon} 
              value={item.value} 
              label={item.label} 
            />
          ))}
        </div>
      </div>
      <div>
        <Image 
          src={HeroBanner}
          alt="Hero Banner"
          className="w-[537px] max-w-full"
        />
      </div>
    </div>
  );
}

export { Hero };
