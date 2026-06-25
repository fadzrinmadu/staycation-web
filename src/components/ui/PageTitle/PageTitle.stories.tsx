import { PageTitle } from './PageTitle';

export default {
  title: 'Components/UI/PageTitle',
  component: PageTitle,
};

const defaultBreadcrumbs = [
  { label: "Home", href: "/" },
  { label: "House Details", href: "/stays/most-picked-1" },
];

const deepBreadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Explore", href: "/explore" },
  { label: "House Details", href: "/stays/most-picked-1" },
];

export const Default = () => {
  return (
    <PageTitle
      title="Blue Origin Fams"
      description="Jakarta, Indonesia"
      breadcrumbItems={defaultBreadcrumbs}
    />
  );
};

export const WithoutBreadcrumb = () => {
  return (
    <PageTitle
      title="Blue Origin Fams"
      description="Jakarta, Indonesia"
      breadcrumbItems={defaultBreadcrumbs}
      showBreadCrumb={true}
    />
  );
};

export const TitleOnly = () => {
  return (
    <PageTitle
      title="Blue Origin Fams"
      breadcrumbItems={defaultBreadcrumbs}
    />
  );
};

export const DeepNavigation = () => {
  return (
    <PageTitle
      title="Blue Origin Fams"
      description="Jakarta, Indonesia"
      breadcrumbItems={deepBreadcrumbs}
    />
  );
};
