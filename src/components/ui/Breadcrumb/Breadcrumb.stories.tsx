import { Breadcrumb } from "./Breadcrumb";

export default {
  title: "Components/UI/Breadcrumb",
  component: Breadcrumb,
};

export const Default = () => {
  return (
    <Breadcrumb 
      items={[
        { label: "Home", href: "/" },
        { label: "House Details", href: "/stays/most-picked-1" },
      ]}
    />
  );
};
