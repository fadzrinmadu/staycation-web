import { FeaturedItem } from "./FeaturedItem";
import { FeaturedExample1 } from "@/assets/images/examples";

export default {
  title: "Components/UI/FeaturedItem",
  component: FeaturedItem,
};

export const Default = () => {
  return (
    <FeaturedItem 
      id="featured-item-1"
      imagePath={FeaturedExample1}
      title="Blue Origin Fams"
      description="Jakarta, Indonesia"
      type="highlight"
      badge={{ primaryText: "$50", secondaryText: "per night" }}
    />
  );
};

export const Recommended = () => {
  return (
    <FeaturedItem
      id="featured-item-2"
      imagePath={FeaturedExample1}
      title="Blue Origin Fams"
      description="Jakarta, Indonesia"
      type="recommended"
    />
  );
};

export const Booking = () => {
  return (
    <FeaturedItem
      id="featured-item-3"
      imagePath={FeaturedExample1}
      title="Blue Origin Fams"
      description="Jakarta, Indonesia"
      type="booking"
      price="$480 USD"
      duration="2 night"
    />
  );
};
