import { create } from "zustand";

const useCursorStore = create((set) => ({
  isVisible: true,
  setIsVisible: (visibility: boolean) => set({ isVisible: visibility }),
}));

export default useCursorStore;
