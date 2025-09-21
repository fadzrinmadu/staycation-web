import { FeaturedItem } from "./FeaturedItem";
import { FeaturedExample1 } from "@/assets/images/examples";

export default {
  title: "Components/UI/FeaturedItem",
  component: FeaturedItem,
};

export const Default = () => {
  return (
    <FeaturedItem 
      imagePath={FeaturedExample1}
      title="Blue Origin Fams"
      description="Jakarta, Indonesia"
      badge={{ primaryText: "$50", secondaryText: "per night" }}
    />
  );
};
