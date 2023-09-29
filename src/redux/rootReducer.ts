import { combineReducers } from "@reduxjs/toolkit";
import { uiReducer } from "@/common";
import {
  projectsReducer,
  selectedProjectReducer,
} from "@/features/projects/slice";

export const rootReducer = combineReducers({
  ui: uiReducer,
  projects: projectsReducer,
  selectedProject: selectedProjectReducer,
});
