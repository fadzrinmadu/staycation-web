import { StatsItemProps } from "@/components/ui/StatsItem";
import { Hero } from "./Hero";
import { CitiesIcon, TravelersIcon, TreasuresIcon } from "@/assets/images/icons";

const statsItems: StatsItemProps[] = [
  {
    icon: <TravelersIcon />,
    value: "80K",
    label: "travelers"
  },
  {
    icon: <TreasuresIcon />,
    value: "862",
    label: "treasures"
  },
  {
    icon: <CitiesIcon />,
    value: "1K",
    label: "cities"
  },
];

export default {
  title: "components/layout/Hero",
  component: Hero,
};

export const Default = () => <Hero statsItems={statsItems} />;
