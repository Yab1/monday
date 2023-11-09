import { combineReducers } from "@reduxjs/toolkit";
import {
  uiReducer,
  authReducer,
  firestoreReducer,
  projectsReducer,
  invitationsReducer,
} from "@/redux/slices";

export const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
  firestore: firestoreReducer,
  projects: projectsReducer,
  invitations: invitationsReducer,
});
