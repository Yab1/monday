import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "@/data";
import { Project } from "@/interfaces";

export const projectSlice = createSlice({
  name: "projectSlice",
  initialState,
  reducers: {
    addProject: (state, action) => {
      return [...state, action.payload];
    },
    removeProject: () => {},
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
    updateTask: () => {},
  },
});

export const {
  addProject,
  addTask,
  removeProject,
  removeTask,
  updateProject,
  updateTask,
} = projectSlice.actions;
export default projectSlice.reducer;
