import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "@/data";
import { Project } from "@/interfaces";
import { ActionEnum, TargetEnum } from "@/enum";
import alterDictionary from "@/dictionaries/alterDictionary";

export const projectSlice = createSlice({
  name: "projectSlice",
  initialState,
  reducers: {
    alterRecord: (
      state,
      action: PayloadAction<{
        target: TargetEnum;
        actionType: ActionEnum;
        id: string;
        payload?: Object;
      }>
    ) => {
      const { target, id, actionType, payload } = action.payload;
      return alterDictionary[target][actionType](id, state, payload);
    },
    addProject: (state, action: PayloadAction<Project>) => {
      return [...state, action.payload];
    },
    removeProject: (state, action: PayloadAction<string>) => {
      const updatedProjects = state.filter(
        (project) => project.id !== action.payload
      );
      return updatedProjects;
    },
    updateProject: (state, action: PayloadAction<Project>) => {
      const updatedProjects = state.map((project) => {
        if (project.id === action.payload.id) {
          return action.payload;
        }
        return project;
      });
      return updatedProjects;
    },
    addTask: () => {},
    removeTask: () => {},
    addGroup: () => {},
    removeGroup: () => {},
    updateTask: () => {},
  },
});

export const {
  alterRecord,
  addProject,
  addGroup,
  addTask,
  removeProject,
  removeGroup,
  removeTask,
  updateProject,
  updateTask,
} = projectSlice.actions;
export default projectSlice.reducer;
