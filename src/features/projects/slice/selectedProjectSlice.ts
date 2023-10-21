import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Project } from "@/interfaces";

const initialState: Project = {} as Project;

export const selectProjectSlice = createSlice({
  name: "selectProject",
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

export const { selectProject, toggleGroup } = selectProjectSlice.actions;
export default selectProjectSlice.reducer;
