import { FeaturedItem } from "./FeaturedItem";
import FeaturedExample from '@/assets/images/examples/featured-example.jpg'

export default {
  title: "Components/UI/FeaturedItem",
  component: FeaturedItem,
};

export const Default = () => {
  return (
    <FeaturedItem 
      imagePath={FeaturedExample}
      title="Blue Origin Fams"
      description="Jakarta, Indonesia"
      badge={{ primaryText: "$50", secondaryText: "per night" }}
    />
  );
};
