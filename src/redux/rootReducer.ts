import { combineReducers } from "@reduxjs/toolkit";
import { uiReducer, authReducer } from "@/slices";
import {
  projectsReducer,
  selectedProjectReducer,
} from "@/features/projects/slice";

export const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  projects: projectsReducer,
  selectedProject: selectedProjectReducer,
});
