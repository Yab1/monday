import { combineReducers } from "@reduxjs/toolkit";
import {
  uiReducer,
  authReducer,
  progressReducer,
  projectsReducer,
  invitationsReducer,
} from "@/redux/slices";

export const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
  progress: progressReducer,
  projects: projectsReducer,
  invitations: invitationsReducer,
});
