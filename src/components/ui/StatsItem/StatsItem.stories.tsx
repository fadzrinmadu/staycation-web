import { TravelersIcon } from "@/assets/images/icons";
import { StatsItem } from "./StatsItem";

export default {
  title: "components/ui/StatsItem",
  component: StatsItem,
};

export const Default = () => <StatsItem icon={<TravelersIcon />} value="100K" label="Travelers" />;
