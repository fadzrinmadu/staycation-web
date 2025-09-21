import { LinkProps } from "@/components/ui/Link";

type FooterLink = {
  title: string;
  items: LinkProps[];
}

const footerLinks: FooterLink[] = [
  {
    title: "For Beginners",
    items: [
      {
        title: "New Account",
        href: "/#",
      },
      {
        title: "Start Booking a Room",
        href: "/#",
      },
      {
        title: "Use Payments",
        href: "/#",
      },
    ],
  },
  {
    title: "Explore Us",
    items: [
      {
        title: "About",
        href: "/#",
      },
      {
        title: "Privacy Policy",
        href: "/#",
      },
      {
        title: "Terms & Conditions",
        href: "/#",
      },
    ],
  },
  {
    title: "Getting Touch",
    items: [
      {
        title: "support@staycation.id",
        href: "/#",
      },
      {
        title: "021 - 2208 - 1996",
        href: "/#",
      },
      {
        title: "Staycation Dy, Jakarta",
        href: "/#",
      },
    ],
  },
];

export { footerLinks };
