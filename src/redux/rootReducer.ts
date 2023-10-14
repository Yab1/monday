import { combineReducers } from "@reduxjs/toolkit";
import { uiReducer } from "@/slices";
import {
  projectsReducer,
  selectedProjectReducer,
} from "@/features/projects/slice";

export const rootReducer = combineReducers({
  ui: uiReducer,
  projects: projectsReducer,
  selectedProject: selectedProjectReducer,
});
