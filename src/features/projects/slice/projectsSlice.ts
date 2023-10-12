import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "@/data";
import { Project } from "@/interfaces";

export const projectSlice = createSlice({
  name: "projectSlice",
  initialState,
  reducers: {
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
