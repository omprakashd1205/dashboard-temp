export type MenuItem = {
  title: string;
  url: string;
  isActive: boolean;
};

export type Menu = {
  title: string;
  url: string;
  items: MenuItem[];
};
