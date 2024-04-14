import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const useAppStore = create()(
  persist(
    immer((set) => ({
      mode: "즉시 로드",
      delay: 0,
      items: [],
      setMode: (mode) =>
        set((state) => {
          switch (mode) {
            case "즉시 로드":
              state.mode = mode;
              state.delay = 0;
              break;

            case "지연 로드":
              state.mode = mode;
              state.delay = 1000;
              break;
          }
        }),
      setItems: (items) =>
        set((state) => {
          state.items = items;
        }),
    })),
    {
      name: "store-restoration-example-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
      skipHydration: true,
    }
  )
);

export default useAppStore;
