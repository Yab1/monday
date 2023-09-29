import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { rootReducer } from "./rootReducer";
import { selectProject } from "@/features/projects/slice";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

if (store.getState().projects.length > 0) {
  store.dispatch(selectProject(store.getState().projects[0]));
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
