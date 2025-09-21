import { FeaturedItemProps } from "@/components/ui/FeaturedItem";

import { 
  FeaturedExample1, 
  FeaturedExample2, 
  FeaturedExample3, 
  FeaturedExample4, 
  FeaturedExample5, 
} from "@/assets/images/examples";

const mostPickedData: FeaturedItemProps[] = [
  {
    imagePath: FeaturedExample1,
    title: "Blue Origin Fams",
    description: "Jakarta, Indonesia",
    badge: {
      primaryText: "$50",
      secondaryText: "per night",
    },
  },
  {
    imagePath: FeaturedExample2,
    title: "Ocean Land",
    description: "Bandung, Indonesia",
    badge: {
      primaryText: "$22",
      secondaryText: "per night",
    },
  },
  {
    imagePath: FeaturedExample3,
    title: "Stark House",
    description: "Kendari, Indonesia",
    badge: {
      primaryText: "$85",
      secondaryText: "per night",
    },
  },
  {
    imagePath: FeaturedExample4,
    title: "Vinna Vill",
    description: "Malang, Indonesia",
    badge: {
      primaryText: "$62",
      secondaryText: "per night",
    },
  },
  {
    imagePath: FeaturedExample5,
    title: "Bobox Rows",
    description: "Medan, Indonesia",
    badge: {
      primaryText: "$72",
      secondaryText: "per night",
    },
  },
];

export { mostPickedData };
