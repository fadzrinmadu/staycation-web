import { Rating } from "./Rating";

export default {
  title: "Components/UI/Rating",
  component: Rating,
};

export const Default = () => {
  return <Rating value={4} />;
};
