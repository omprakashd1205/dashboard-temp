import { Menu } from "@/types";

//SIDEBAR SLICE
type SidebarState = {
  menu: Menu[];
};

type SidebarAction = {
  setActive: (mainTile: string, itemTile: string) => void;
};

type SidebarSlice = SidebarState & SidebarAction;

//STORE
type Store = SidebarSlice;
