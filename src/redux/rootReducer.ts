import { combineReducers } from "@reduxjs/toolkit";
import { themeReducer, tabsReducer } from "@/common";
import { projectsReducer } from "@/features";

export const rootReducer = combineReducers({
  theme: themeReducer,
  projects: projectsReducer,
  tabs: tabsReducer,
});
