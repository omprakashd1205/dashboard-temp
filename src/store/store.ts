import { create } from "zustand";

import { CreateSidebarSlice } from "@/store/slices/sidebar-slice";
import { Store } from "@/types/store.types";

export const useStore = create<Store>()((...a) => ({
  ...CreateSidebarSlice(...a),
}));
