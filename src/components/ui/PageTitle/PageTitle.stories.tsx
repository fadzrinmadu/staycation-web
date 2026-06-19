import { PageTitle } from './PageTitle';

export default {
  title: 'Components/UI/PageTitle',
  component: PageTitle,
};

export const Default = () => {
  return (
    <PageTitle 
      title="Blue Origin Fams"
      description="Jakarta, Indonesia"
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "House Details", href: "/stays/most-picked-1" },
      ]}
    />
  );
};
