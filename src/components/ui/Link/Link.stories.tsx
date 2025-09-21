import { Link } from "./Link";

export default {
  title: "Components/UI/Link",
  component: Link,
};

export const Default = () => {
  return (
    <Link
      href="/#"
      title="New Account"
      onClick={() => {}}
    />
  );
};
