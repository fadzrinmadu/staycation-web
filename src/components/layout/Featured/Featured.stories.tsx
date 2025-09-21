import { mostPickedData } from "./data";
import { Featured } from "./Featured";

export default {
  title: "Components/Layout/Featured",
  component: Featured,
};

export const Default = {
  args: {
    title: "Most Picked",
    type: "highlight",
    data: mostPickedData,
  }
};

export const Highlighted = {
  args: {
    title: "Most Picked",
    type: "highlight",
    data: mostPickedData,
  }
};

export const Recommended = {
  args: {
    title: "Houses with backyard",
    type: "recommended",
    data: mostPickedData.slice(0, mostPickedData.length - 1),
  }
};
