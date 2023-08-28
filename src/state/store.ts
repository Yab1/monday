import { create } from "zustand";

interface themeState {
  darkMode: boolean;
  theme: string;
}

interface themeAction {
  changeMode: () => void;
}

const useStore = create<themeState & themeAction>((set) => ({
  darkMode: true,
  theme: "bg-gradient-to-br from-gray-700 to-gray-600",
  changeMode() {
    set((state) => ({
      darkMode: !state.darkMode,
      theme: state.darkMode
        ? "bg-gradient-to-br from-blue-gray-800 to-blue-gray-900 "
        : "bg-red-500 shadow-lg",
    }));
  },
}));

export default useStore;
