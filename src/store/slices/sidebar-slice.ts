import { StateCreator } from "zustand";

import { menu } from "@/data";
import { SidebarSlice } from "@/types/store.types";

export const CreateSidebarSlice: StateCreator<
  SidebarSlice,
  [],
  [],
  SidebarSlice
> = (set) => ({
  menu,
  setActive: (mainTitle, itemTitle) =>
    set((state) => ({
      menu: state.menu.map((main) =>
        main.title === mainTitle
          ? {
              ...main,
              items: main.items.map((item) =>
                item.title === itemTitle
                  ? {
                      ...item,
                      isActive: !item.isActive,
                    }
                  : { ...item, isActive: false }
              ),
            }
          : main
      ),
    })),
});
