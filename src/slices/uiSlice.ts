import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UIStates } from "@/interfaces";
import { ToggleableEnum, TargetEnum } from "@/enum";

const initialState: UIStates = {
  toggleable: {
    darkMode: false,
    sideNav: true,
    editProjectDialog: false,
    addProjectDialog: false,
    addGroup: false,
  },
  confirmationDialog: {
    type: TargetEnum.Project,
    open: false,
  },
};

export const uiSlice = createSlice({
  name: "uiSlice",
  initialState,
  reducers: {
    toggler: (state, action: PayloadAction<ToggleableEnum>) => {
      state.toggleable[action.payload] = !state.toggleable[action.payload];
    },
    toggleConfirmationDialog: (state, action: PayloadAction<TargetEnum>) => {
      state.confirmationDialog.type = action.payload;
      state.confirmationDialog.open = !state.confirmationDialog.open;
    },
  },
});

export const { toggler, toggleConfirmationDialog } = uiSlice.actions;
export default uiSlice.reducer;
