import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUIStates } from "@/interfaces";
import { ToggleableEnum, TargetEnum } from "@/enum";

const initialState: IUIStates = {
  toggleable: {
    darkMode: false,
    sideNav: false,
    editProjectDialog: false,
    addProjectDialog: false,
    addGroup: false,
  },
  confirmationDialog: {
    id: "",
    type: TargetEnum.Project,
    open: false,
  },
  editing: {
    id: "",
    isEditing: false,
  },
};

export const uiSlice = createSlice({
  name: "uiSlice",
  initialState,
  reducers: {
    toggler: (state, action: PayloadAction<ToggleableEnum>) => {
      state.toggleable[action.payload] = !state.toggleable[action.payload];
    },
    toggleConfirmationDialog: (
      state,
      action: PayloadAction<{ id: string; type: TargetEnum }>
    ) => {
      state.confirmationDialog.id = action.payload.id;
      state.confirmationDialog.type = action.payload.type;
      state.confirmationDialog.open = !state.confirmationDialog.open;
    },
    toggleEditMode: (state, action: PayloadAction<string>) => {
      state.editing.id = action.payload;
      state.editing.isEditing = !state.editing.isEditing;
    },
    updateSideNavState: (state, action: PayloadAction<number>) => {
      if (action.payload >= 1140) {
        state.toggleable.sideNav = true;
      } else {
        state.toggleable.sideNav = false;
      }
    },
  },
});

export const {
  toggler,
  toggleConfirmationDialog,
  toggleEditMode,
  updateSideNavState,
} = uiSlice.actions;
export default uiSlice.reducer;
