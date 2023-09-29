import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Project } from "@/interfaces";

const initialState: Project = {
  id: "",
  label: "",
  status: "Pending",
  description: "",
  groups: [],
};

export const tabsSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    selectProject: (_, action: PayloadAction<Project>) => action.payload,
    toggleGroup: (state, action: PayloadAction<string>) => {
      const updatedGroups = state.groups.map((group) => {
        if (group.id === action.payload) {
          return {
            ...group,
            isCollapsed: !group.isCollapsed,
          };
        }
        return group;
      });
      return {
        ...state,
        groups: updatedGroups,
      };
    },
  },
});

export const { selectProject, toggleGroup } = tabsSlice.actions;
export default tabsSlice.reducer;
