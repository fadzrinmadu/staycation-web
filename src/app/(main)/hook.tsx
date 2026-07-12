"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hook";
import { fetchLandingPage } from "@/lib/redux/features/member/memberSlice";
import { StatsItemProps } from "@/components/ui/StatsItem";
import { CitiesIcon, TravelersIcon, TreasuresIcon } from "@/assets/images/icons";
import { formatNumber } from "@/utils/number";
import { FeaturedItemProps } from "@/components/ui/FeaturedItem";
import { IMAGE_PATH } from "@/constants";
import { CategoryItem } from "@/services/member/memberService.types";

export interface TestimonialData {
  id: string;
  imagePath: string;
  name: string;
  rate: number;
  content: string;
  familyName: string;
  familyOccupation: string;
}

export function useHome() {
  const dispatch = useAppDispatch();
  const { landingPage, status, error } = useAppSelector((state) => state.member);

  useEffect(() => {
    dispatch(fetchLandingPage());
  }, [dispatch]);

  function getStatsItemsHero(): StatsItemProps[] {
    if (!landingPage) return [];

    const { hero } = landingPage;

    return [
      {
        icon: <TravelersIcon />,
        value: formatNumber(hero.trevelers),
        label: "travelers",
      },
      {
        icon: <TreasuresIcon />,
        value: formatNumber(hero.treasures),
        label: "treasures",
      },
      {
        icon: <CitiesIcon />,
        value: formatNumber(hero.cities),
        label: "cities",
      },
    ];
  }
  
  function getMostPickedData(): FeaturedItemProps[]{
    if (!landingPage) return [];
    
    const { mostPicked } = landingPage;
    
    return mostPicked.map((item) => ({
      id: item._id || "",
      type: "highlight",
      imagePath: `${IMAGE_PATH}${item.imageId[0]?.imageUrl || ""}`,
      title: item.title || "",
      description: `${item.city || ""}, ${item.country || ""}`,
      badge: {
        primaryText: `$${item.price || 0}`,
        secondaryText: "per night",
      },
    }));
  }
  
  function getHouseWithBakyardData(data: CategoryItem[]): FeaturedItemProps[] {
    if (!landingPage) return [];
    
    return data.map((item) => {
      let result: FeaturedItemProps = {
        id: item._id || "",
        type: "recommended",
        imagePath: `${IMAGE_PATH}${item.imageId[0]?.imageUrl || ""}`,
        title: item.title || "",
        description: `${item.city || ""}, ${item.country || ""}`,
      };
      
      if (item.isPopular) {
        result = {
          ...result,
          badge: {
            primaryText: "Popular",
            secondaryText: "choice",
          },
        }
      }
      
      return result;
    });
  }
  
  function getTestimonialData(): TestimonialData {
    return {
      id: landingPage?.testimonial._id || "",
      imagePath: `${IMAGE_PATH}${landingPage?.testimonial.imageUrl || ""}`,
      name: landingPage?.testimonial.name || "",
      rate: landingPage?.testimonial.rate || 0,
      content: landingPage?.testimonial.content || "",
      familyName: landingPage?.testimonial.familyName || "",
      familyOccupation: landingPage?.testimonial.familyOccupation || "",
    };
  }

  const statsItemsHero = landingPage ? getStatsItemsHero() : [];
  const mostPickedData = landingPage ? getMostPickedData() : [];
  const testimonialData = getTestimonialData();

  return {
    error,
    landingPage,
    mostPickedData,
    statsItemsHero,
    status,
    testimonialData,
    getHouseWithBakyardData,
  };
}
