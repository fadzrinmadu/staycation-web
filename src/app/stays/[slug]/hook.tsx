import { statsItemsData } from "@/components/layout/StayDetail/StayDetail";
import { TestimonyProps } from "@/components/layout/Testimony";
import { BookingCardProps } from "@/components/ui/Card/BookingCard";
import { FeaturedItemProps } from "@/components/ui/FeaturedItem";
import { ImageGalleryProps } from "@/components/ui/ImageGallery/ImageGallery";
import { PageTitleProps } from "@/components/ui/PageTitle/PageTitle";
import { SectionParagraphProps } from "@/components/ui/SectionParagraph/SectionParagraph";
import { StatsItemProps } from "@/components/ui/StatsItem";
import { IMAGE_PATH } from "@/constants";
import { setItemBookingState } from "@/lib/redux/features/member/bookingSlice";
import { fetchDetailPage } from "@/lib/redux/features/member/detailSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hook";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export function useStay() {
  const dispatch = useAppDispatch();
  const { slug } = useParams();
  const router = useRouter();
  
  const { data, status, error } = useAppSelector((state) => state.detail); 
  
  useEffect(() => {
    if (slug) {
      dispatch(fetchDetailPage(slug as string));
    }
  }, [dispatch, slug]);
  
  function getPageTitleData(): PageTitleProps {
    return {
      title: data?.title || "",
      description: `${data?.city || ""}, ${data?.country || ""}`,
      breadcrumbItems: [
        {
          label: "Home",
          href: "/",
        },
        {
          label: "House Details",
          href: "/",
        },
      ],
    };
  }
  
  function getImageGalleryData(): ImageGalleryProps {
    return {
      mainImage: `${IMAGE_PATH}${data?.imageId?.[0].imageUrl || ""}` || "",
      secondaryImages: data?.imageId.map((image) => `${IMAGE_PATH}${image.imageUrl}`) || [],
      alt: "Sample Image Gallery",
    };
  }
  
  function getSectionParagraphData(): SectionParagraphProps {
    return {
      title: "About the place",
      paragraphs: [data?.description || ""],
    };
  }
  
  function getStatsItemData(): StatsItemProps[] {
    return data?.featureId.map((feature) => {
      let data = statsItemsData[feature.name as keyof typeof statsItemsData];
      return {
        icon: data.icon,
        value: data.value,
        label: data.label,
      };
    }) || [];
  }
  
  function getThingsToDoData(): FeaturedItemProps[] {
    return data?.activityId.map((activity) => ({
      id: activity._id || "",
      type: "recommended",
      imagePath: `${IMAGE_PATH}${activity.imageUrl || ""}`,
      title: activity.name || "",
      description: activity.type || "",
    })) || [];
  }
  
  function getTestimonyData(): TestimonyProps {
    return {
      image: `${IMAGE_PATH}${data?.testimonial?.imageUrl || ""}`,
      title: data?.testimonial?.name || "",
      rating: data?.testimonial?.rate || 0,
      quote: data?.testimonial?.content || "",
      author: `${data?.testimonial.familyName || ""}, ${data?.testimonial?.familyOccupation || ""}`,
    };
  }
  
  function getBookingCardData(): BookingCardProps {
    return {
      pricePerNight: data?.price || 0,
      defaultNights: data?.sumBooking || 2,
      defaultStartDate: new Date(),
      defaultEndDate: new Date(new Date().setDate(new Date().getDate() + (data?.sumBooking || 2))),
      onBook: (nights, start, end) => {
        console.log("Booking:", { nights, start, end });
        if (!data) return;
        dispatch(setItemBookingState({
          item: data,
          nights: nights,
          bookingStartDate: (start || new Date()).toISOString(),
          bookingEndDate: (end || new Date()).toISOString(),
        }));
        router.push("/booking")
      }
    };
  }
  
  const pageTitleData = getPageTitleData();
  const imageGalleryData = getImageGalleryData();
  const sectionParagraphData = getSectionParagraphData();
  const statsItemData = getStatsItemData();
  const thingsToDoData = getThingsToDoData();
  const testimonyData = getTestimonyData();
  const bookingCardData = getBookingCardData();
  
  return { 
    bookingCardData,
    data,
    error,
    imageGalleryData,
    pageTitleData,
    sectionParagraphData,
    statsItemData,
    status,
    testimonyData,
    thingsToDoData,
  };
}
