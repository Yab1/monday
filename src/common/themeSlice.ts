import { createSlice } from "@reduxjs/toolkit";
import { ThemeState } from "@/interfaces";

const initialState: ThemeState = {
  darkMode: true,
  theme: "bg-gradient-to-br from-gray-700 to-gray-600",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeMode: (state) => {
      state.darkMode = !state.darkMode;
      state.theme = state.darkMode
        ? "bg-gradient-to-br from-blue-gray-800 to-blue-gray-900"
        : "bg-red-500 shadow-lg";
    },
  },
});

export const { changeMode } = themeSlice.actions;
export default themeSlice.reducer;
