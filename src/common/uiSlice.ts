import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UIStates } from "@/interfaces";

const initialState: UIStates = {
  darkMode: true,
  isEditDialogOpen: false,
  isCreateDialogOpen: false,
};

export const uiSlice = createSlice({
  name: "uiSlice",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    toggleDialog: (state, action: PayloadAction<string>) => {
      const propertyName = action.payload as keyof typeof state;
      state[propertyName] = !state[propertyName];
    },
  },
});

export const { toggleDarkMode, toggleDialog } = uiSlice.actions;
export default uiSlice.reducer;
