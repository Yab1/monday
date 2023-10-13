import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "@/data";
import { Project, PayloadValidator } from "@/interfaces";
import { TargetEnum } from "@/enum";

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
    addGroup: (state, action: PayloadAction<string>) => {
      switch (action.payload) {
        case TargetEnum.Project:
          return "project";
      }
      const updatedProjects = state.map((project) => {
        console.log(project);
      });
    },
    removeGroup: () => {},
    addTask: () => {},
    removeTask: () => {},
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
