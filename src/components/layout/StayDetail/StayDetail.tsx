"use client"

import clsx from "clsx";
import { FC } from "react";

import { 
  BookingCard,
  ImageGallery,
  PageTitle,
  SectionParagraph,
  StatsItem,
} from "@/components/ui";

import { 
  AcIcon, 
  BathroomIcon, 
  BedroomIcon, 
  DiningRoomIcon, 
  LivingIcon, 
  Refrigator, 
  Television, 
  WifiIcon, 
} from "@/assets/images/icons";
import { PageTitleProps } from "@/components/ui/PageTitle/PageTitle";
import { ImageGalleryProps } from "@/components/ui/ImageGallery/ImageGallery";
import { SectionParagraphProps } from "@/components/ui/SectionParagraph/SectionParagraph";
import { StatsItemProps } from "@/components/ui/StatsItem";
import { BookingCardProps } from "@/components/ui/Card/BookingCard";

interface StayDetailProps {
  pageTitle: PageTitleProps;
  imageGallery: ImageGalleryProps;
  sectionParagraph: SectionParagraphProps;
  statsItems: StatsItemProps[];
  bookingCardData: BookingCardProps;
}

export const statsItemsData = {
  bedroom: { icon: <BedroomIcon />, value: "5", label: "bedroom" },
  "living room": { icon: <LivingIcon />, value: "1", label: "living room" },
  bathroom: { icon: <BathroomIcon />, value: "3", label: "bathroom" },
  "dining rooms": { icon: <DiningRoomIcon />, value: "1", label: "dining room" },
  "mbp/s": { icon: <WifiIcon />, value: "10", label: "mbp/s" },
  "unit ready": { icon: <AcIcon />, value: "7", label: "unity ready" },
  refigrator: { icon: <Refrigator />, value: "2", label: "refrigators" },
  televion: { icon: <Television />, value: "4", label: "television" },
};

const StayDetail: FC<StayDetailProps> = (props: StayDetailProps) => {
  const { 
    imageGallery,
    pageTitle,
    sectionParagraph,
    statsItems,
    bookingCardData,
  } = props;
  
  return (
    <div
      className={clsx("flex flex-col gap-y-8 md:gap-y-[50px]")}
    >
      <PageTitle 
        {...pageTitle}
      />
      
      <ImageGallery 
        {...imageGallery} 
      />
      
      <div
        className={clsx("flex flex-col gap-y-8 lg:flex-row lg:gap-x-[40px] lg:gap-y-0")}
      >
        <div
          className={clsx("flex flex-col gap-y-[30px] flex-1 min-w-0")}
        >
          <SectionParagraph
            {...sectionParagraph}
          />
          
          <div>
            <div
              className={clsx("grid grid-cols-2 gap-x-5 gap-y-6 sm:grid-cols-4")}
            >
              {statsItems.map((item, index) => (
                <StatsItem
                  key={index}
                  icon={item.icon}
                  value={item.value}
                  label={item.label}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-auto lg:flex-shrink-0">
          <div className="lg:sticky lg:top-6">
            <BookingCard
              {...bookingCardData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { StayDetail };
