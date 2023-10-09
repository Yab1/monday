import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UIStates, ConfirmationState } from "@/interfaces";
import { DeleteType } from "@/enum";

const initialState: UIStates = {
  darkMode: true,
  isEditDialogOpen: false,
  isCreateDialogOpen: false,
  confirmationDialog: {
    type: DeleteType.Project,
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
    toggleDialog: (state, action: PayloadAction<string>) => {
      const propertyName = action.payload as keyof typeof state;
      if (
        typeof state[propertyName] === "boolean" &&
        propertyName !== "confirmationDialog"
      ) {
        state[propertyName] = !state[propertyName];
      }
    },
    toggleConfirmationDialog: (state, action: PayloadAction<DeleteType>) => {
      state.confirmationDialog.type = action.payload;
      state.confirmationDialog.open = !state.confirmationDialog.open;
    },
  },
});

export const { toggleDarkMode, toggleDialog, toggleConfirmationDialog } =
  uiSlice.actions;
export default uiSlice.reducer;
