import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UIStates } from "@/interfaces";
import { TargetEnum } from "@/enum";

const initialState: UIStates = {
  darkMode: true,
  isSideNavOpen: true,
  isEditDialogOpen: false,
  isCreateDialogOpen: false,
  confirmationDialog: {
    type: TargetEnum.Project,
    open: false,
  },
};

export const uiSlice = createSlice({
  name: "uiSlice",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    toggleSideNav: (state) => {
      state.isSideNavOpen = !state.isSideNavOpen;
    },
    toggleDialog: (state, action: PayloadAction<string>) => {
      const propertyName = action.payload as keyof typeof state;
      if (
        typeof state[propertyName] === "boolean" &&
        propertyName !== "confirmationDialog"
      ) {
        state[propertyName] = !state[propertyName];
      }
    },
    toggleConfirmationDialog: (state, action: PayloadAction<TargetEnum>) => {
      state.confirmationDialog.type = action.payload;
      state.confirmationDialog.open = !state.confirmationDialog.open;
    },
  },
});

export const {
  toggleDarkMode,
  toggleSideNav,
  toggleDialog,
  toggleConfirmationDialog,
} = uiSlice.actions;
export default uiSlice.reducer;
