type MenuId = "home" | "browseBy" | "stories" | "agents";

type Menu = {
  id: MenuId;
  name: string;
  href: string;
};

const menus: Menu[] = [
  { id: "home", name: "Home", href: "/#" },
  { id: "browseBy", name: "Browse by", href: "/#" },
  { id: "stories", name: "Stories", href: "/#" },
  { id: "agents", name: "Agents", href: "/#" },
];

export { menus };
