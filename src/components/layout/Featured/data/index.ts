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
import { ThingsToDo1, ThingsToDo2, ThingsToDo3, ThingsToDo4 } from "@/assets/images/examples/things";

const mostPickedData: FeaturedItemProps[] = [
  {
    id: "most-picked-1",
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
    id: "most-picked-2",
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
    id: "most-picked-3",
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
    id: "most-picked-4",
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
    id: "most-picked-5",
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
    id: "house-backyard-1",
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
    id: "house-backyard-2",
    type: "recommended",
    imagePath: FeaturedExample7,
    title: "Anggona Rise",
    description: "Medan, Indonesia",
  },
  {
    id: "house-backyard-3",
    type: "recommended",
    imagePath: FeaturedExample8,
    title: "Seattle Rain",
    description: "Jakarta, Indonesia",
  },
  {
    id: "house-backyard-4",
    type: "recommended",
    imagePath: FeaturedExample9,
    title: "Wodden Pit",
    description: "Bengkulu, Indonesia",
  },
];

const hotelsWithLivingRoom: FeaturedItemProps[] = [
  {
    id: "hotel-living-room-1",
    type: "recommended",
    imagePath: FeaturedExample10,
    title: "Tabby Town",
    description: "Green Park",
  },
  {
    id: "hotel-living-room-2",
    type: "recommended",
    imagePath: FeaturedExample11,
    title: "Podo Wose",
    description: "Surabaya, Indonesia",
  },
  {
    id: "hotel-living-room-3",
    type: "recommended",
    imagePath: FeaturedExample12,
    title: "Silver Rain",
    description: "Bandung, Indonesia",
  },
  {
    id: "hotel-living-room-4",
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
    id: "apartment-kitchen-1",
    type: "recommended",
    imagePath: FeaturedExample14,
    title: "PS Wood",
    description: "Depok, Indonesia",
  },
  {
    id: "apartment-kitchen-2",
    type: "recommended",
    imagePath: FeaturedExample15,
    title: "One Five",
    description: "Jakarta, Indonesia",
  },
  {
    id: "apartment-kitchen-3",
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
    id: "apartment-kitchen-4",
    type: "recommended",
    imagePath: FeaturedExample17,
    title: "Stays Home",
    description: "Makassar, Indonesia",
  },
];

const thingsToDo: FeaturedItemProps[] = [
  {
    id: "things-to-do-1",
    type: "recommended",
    imagePath: ThingsToDo1,
    title: "Green Lake",
    description: "Nature",
  },
  {
    id: "things-to-do-2",
    type: "recommended",
    imagePath: ThingsToDo2,
    title: "Golf Area",
    description: "Sport",
  },
  {
    id: "things-to-do-3",
    type: "recommended",
    imagePath: ThingsToDo3,
    title: "Labour and Wait",
    description: "Shopping",
  },
  {
    id: "things-to-do-4",
    type: "recommended",
    imagePath: ThingsToDo4,
    title: "Snorkelling",
    description: "Beach",
  },
];

export { 
  apartmentsWithKitchenSet,
  hotelsWithLivingRoom,
  houseWithBakyardData,
  mostPickedData,
  thingsToDo,
};
