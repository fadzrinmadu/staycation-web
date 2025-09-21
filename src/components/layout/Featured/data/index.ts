import { FeaturedItemProps } from "@/components/ui/FeaturedItem";

import { 
  FeaturedExample1, 
  FeaturedExample10, 
  FeaturedExample11, 
  FeaturedExample12, 
  FeaturedExample13, 
  FeaturedExample14, 
  FeaturedExample15, 
  FeaturedExample16, 
  FeaturedExample17, 
  FeaturedExample2, 
  FeaturedExample3, 
  FeaturedExample4, 
  FeaturedExample5,
  FeaturedExample6,
  FeaturedExample7,
  FeaturedExample8,
  FeaturedExample9, 
} from "@/assets/images/examples";

const mostPickedData: FeaturedItemProps[] = [
  {
    type: "highlight",
    imagePath: FeaturedExample1,
    title: "Blue Origin Fams",
    description: "Jakarta, Indonesia",
    badge: {
      primaryText: "$50",
      secondaryText: "per night",
    },
  },
  {
    type: "highlight",
    imagePath: FeaturedExample2,
    title: "Ocean Land",
    description: "Bandung, Indonesia",
    badge: {
      primaryText: "$22",
      secondaryText: "per night",
    },
  },
  {
    type: "highlight",
    imagePath: FeaturedExample3,
    title: "Stark House",
    description: "Kendari, Indonesia",
    badge: {
      primaryText: "$85",
      secondaryText: "per night",
    },
  },
  {
    type: "highlight",
    imagePath: FeaturedExample4,
    title: "Vinna Vill",
    description: "Malang, Indonesia",
    badge: {
      primaryText: "$62",
      secondaryText: "per night",
    },
  },
  {
    type: "highlight",
    imagePath: FeaturedExample5,
    title: "Bobox Rows",
    description: "Medan, Indonesia",
    badge: {
      primaryText: "$72",
      secondaryText: "per night",
    },
  },
];

const houseWithBakyardData: FeaturedItemProps[] = [
  {
    type: "recommended",
    imagePath: FeaturedExample6,
    title: "Tabby Town",
    description: "Bogor, Indonesia",
    badge: {
      primaryText: "Popular",
      secondaryText: "choice",
    },
  },
  {
    type: "recommended",
    imagePath: FeaturedExample7,
    title: "Anggona Rise",
    description: "Medan, Indonesia",
  },
  {
    type: "recommended",
    imagePath: FeaturedExample8,
    title: "Seattle Rain",
    description: "Jakarta, Indonesia",
  },
  {
    type: "recommended",
    imagePath: FeaturedExample9,
    title: "Wodden Pit",
    description: "Bengkulu, Indonesia",
  },
];

const hotelsWithLivingRoom: FeaturedItemProps[] = [
  {
    type: "recommended",
    imagePath: FeaturedExample10,
    title: "Tabby Town",
    description: "Green Park",
  },
  {
    type: "recommended",
    imagePath: FeaturedExample11,
    title: "Podo Wose",
    description: "Surabaya, Indonesia",
  },
  {
    type: "recommended",
    imagePath: FeaturedExample12,
    title: "Silver Rain",
    description: "Bandung, Indonesia",
  },
  {
    type: "recommended",
    imagePath: FeaturedExample13,
    title: "Cashville",
    description: "Kemang, Indonesia",
    badge: {
      primaryText: "Popular",
      secondaryText: "choice",
    },
  },
];

const apartmentsWithKitchenSet: FeaturedItemProps[] = [
  {
    type: "recommended",
    imagePath: FeaturedExample14,
    title: "PS Wood",
    description: "Depok, Indonesia",
  },
  {
    type: "recommended",
    imagePath: FeaturedExample15,
    title: "One Five",
    description: "Jakarta, Indonesia",
  },
  {
    type: "recommended",
    imagePath: FeaturedExample16,
    title: "Minimal sun",
    description: "Bogor, Indonesia",
    badge: {
      primaryText: "Popular",
      secondaryText: "choice",
    },
  },
  {
    type: "recommended",
    imagePath: FeaturedExample17,
    title: "Stays Home",
    description: "Makassar, Indonesia",
  },
];

export { 
  apartmentsWithKitchenSet,
  hotelsWithLivingRoom,
  houseWithBakyardData,
  mostPickedData,
};
