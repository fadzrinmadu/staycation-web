import { FeaturedBadge } from "./FeaturedBadge";

export default {
  title: "Components/UI/FeaturedBadge",
  component: FeaturedBadge,
};

export const Default = () => {
  return (
    <FeaturedBadge 
      primaryText="$50"
      secondaryText="per night"
    />
  );
};
