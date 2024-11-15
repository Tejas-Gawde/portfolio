import { create } from "zustand";
import zukeeper from "zukeeper";

const useCursorStore = create(
  zukeeper((set) => ({
    isVisible: true,
    isLink: false,
    invert: false,
    setIsVisible: (visibility: boolean) => set({ isVisible: visibility }),
    setIsLink: (link: boolean) => set({ isLink: link }),
    setInvert: (invertValue: boolean) => set({ invert: invertValue }),
  })),
);

export default useCursorStore;
