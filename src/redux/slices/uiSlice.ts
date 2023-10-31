import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUIStates } from "@/interfaces";
import {
  ToggleableEnum,
  TargetEnum,
  ProjectFilterStatesEnum,
  FilterTargetEnum,
} from "@/enum";

const initialState: IUIStates = {
  toggleable: {
    darkMode: false,
    isLoading: false,
    sideNav: false,
    alert: false,
    firebaseInitialized: false,
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
  filterSettings: {
    [FilterTargetEnum.PROJECTS]: ProjectFilterStatesEnum.ALL,
    // [FilterTargetEnum.BATCHES]: ProjectFilterStatesEnum.ALL,
    // [FilterTargetEnum.TASKS]: ProjectFilterStatesEnum.ALL,
    // [FilterTargetEnum.INVITATIONS]: ProjectFilterStatesEnum.ALL,
    // [FilterTargetEnum.MESSAGES]: ProjectFilterStatesEnum.ALL,
    // [FilterTargetEnum.USERS]: ProjectFilterStatesEnum.ALL,
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
    applyFilter: (
      state,
      action: PayloadAction<{
        target: FilterTargetEnum;
        value: ProjectFilterStatesEnum;
      }>
    ) => {
      const target = action.payload.target as FilterTargetEnum;
      state.filterSettings[target] = action.payload.value;
    },
  },
});

export const {
  toggler,
  toggleConfirmationDialog,
  toggleEditMode,
  updateSideNavState,
  applyFilter,
} = uiSlice.actions;
export default uiSlice.reducer;
