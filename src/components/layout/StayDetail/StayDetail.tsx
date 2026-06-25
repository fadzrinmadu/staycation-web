"use client"

import { FC } from "react";
import clsx from "clsx";

import FeaturedExample1Image from "@/assets/images/examples/featured-example-1.jpg";
import FeaturedExample2Image from "@/assets/images/examples/featured-example-2.jpg";
import FeaturedExample3Image from "@/assets/images/examples/featured-example-3.jpg";

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

const StayDetail: FC = () => {
  return (
    <div
      className={clsx("flex flex-col gap-y-8 md:gap-y-[50px]")}
    >
      <PageTitle 
        title="Blue Origin Fams"
        description="Jakarta, Indonesia"
        breadcrumbItems={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "House Details",
            href: "/",
          },
        ]}
      />
      
      <ImageGallery
        mainImage={FeaturedExample1Image}
        secondaryImages={[FeaturedExample2Image, FeaturedExample3Image]}
        alt="Sample Image Gallery"
      />
      
      {/* Di mobile: kolom (detail dulu, booking di bawah). Di desktop: baris seperti semula */}
      <div
        className={clsx("flex flex-col gap-y-8 lg:flex-row lg:gap-x-[40px] lg:gap-y-0")}
      >
        {/* Kiri: deskripsi + stats */}
        <div
          className={clsx("flex flex-col gap-y-[30px] flex-1 min-w-0")}
        >
          <SectionParagraph
            title="About the place"
            paragraphs={[
              "Blue Origin Fams, LLC is an American privately funded aerospace manufacturer and sub-orbital spaceflight services company headquartered in Kent, Washington. Founded in 2000 by Jeff Bezos, the company is led by CEO Bob Smith and aims to make access to space cheaper and more reliable through reusable launch vehicles.",
              "Blue Origin Fams is employing an incremental approach from suborbital to orbital flight, with each developmental step building on its prior work. The company motto is Gradatim Ferociter, Latin for \"Step by Step, Ferociously\".",
              "Initially focused on suborbital spaceflight, the company has designed, built and flown multiple testbeds of its New Shepard vehicle at its facilities in Culberson County, Texas. Named after the first American in space Alan Shepard, began in April 2015, and flight testing is ongoing.",
            ]}
          />
          
          <div>
            <div
              className={clsx("grid grid-cols-2 gap-x-5 gap-y-6 sm:grid-cols-4")}
            >
              <StatsItem 
                icon={<BedroomIcon />} 
                value="5" 
                label="bedroom" 
              />
              <StatsItem 
                icon={<LivingIcon />} 
                value="1" 
                label="living room" 
              />
              <StatsItem 
                icon={<BathroomIcon />} 
                value="3" 
                label="bathroom" 
              />
              <StatsItem 
                icon={<DiningRoomIcon />} 
                value="1" 
                label="dining room" 
              />
              <StatsItem 
                icon={<WifiIcon />} 
                value="10" 
                label="mbp/s" 
              />
              <StatsItem 
                icon={<AcIcon />} 
                value="7" 
                label="unity ready" 
              />
              <StatsItem 
                icon={<Refrigator />} 
                value="2" 
                label="refrigators" 
              />
              <StatsItem 
                icon={<Television />} 
                value="4" 
                label="television" 
              />
            </div>
          </div>
        </div>
        
        {/* Kanan: BookingCard — full width di mobile, sticky di desktop */}
        <div className="w-full lg:w-auto lg:flex-shrink-0">
          <div className="lg:sticky lg:top-6">
            <BookingCard
              pricePerNight={280}
              defaultNights={2}
              defaultStartDate={new Date("2025-01-20")}
              defaultEndDate={new Date("2025-01-22")}
              onBook={(nights, start, end) => {
                console.log("Booking:", { nights, start, end });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { StayDetail };
