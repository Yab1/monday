import { combineReducers } from "@reduxjs/toolkit";
import {
  uiReducer,
  authReducer,
  projectsReducer,
  invitationsReducer,
} from "@/slices";

export const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
  projects: projectsReducer,
  invitations: invitationsReducer,
});
