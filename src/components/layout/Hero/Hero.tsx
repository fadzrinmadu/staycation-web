
import React from "react";
import Image from "next/image";

import type { StatsItemProps } from "@/components/ui/StatsItem";

import HeroBanner from "@/assets/images/banners/hero-banner.jpg";
import { Button, StatsItem, Text, Title } from "@/components/ui";
import { CitiesIcon, TravelersIcon, TreasuresIcon } from "@/assets/images/icons";

interface HeroProps {}

const statsItems: StatsItemProps[] = [
  {
    icon: <TravelersIcon />,
    value: "80K",
    label: "travelers"
  },
  {
    icon: <TreasuresIcon />,
    value: "862",
    label: "treasures"
  },
  {
    icon: <CitiesIcon />,
    value: "1K",
    label: "cities"
  },
];

const Hero: React.FC<HeroProps> = (props: HeroProps) => {
  return (
    <div id="hero" className="flex flex-col-reverse md:flex-row justify-between items-center gap-10">
      <div className="max-w-[430px]">
        <Title 
          type="h1"
          text="Forget busy work, start next vacation"
          className="mb-5"
        />
        <Text 
          type="paragraph"
          value="We provide  what you need to enjoy your holiday with family. Time to make another memorable moments."
          className="mb-[30px] max-w-[365px]"
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
          className="max-w-[537px]"
        />
      </div>
    </div>
  );
}

export { Hero };
