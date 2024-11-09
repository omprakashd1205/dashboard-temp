import { Menu } from "@/types";

export const menu: Menu[] = [
  {
    title: "Dashboard",
    url: "/",
    items: [
      {
        title: "Home",
        url: "/",
        isActive: true,
      },
      {
        title: "Projects",
        url: "/",
        isActive: false,
      },
    ],
  },
];
