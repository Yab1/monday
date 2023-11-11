import { combineReducers } from "@reduxjs/toolkit";
import {
  uiReducer,
  authReducer,
  firestoreReducer,
  bufferReducer,
} from "@/redux/slices";

export const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
  firestore: firestoreReducer,
  buffer: bufferReducer,
});
