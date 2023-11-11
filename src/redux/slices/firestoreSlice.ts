import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StatusEnum } from "@/enum";
import {
  IFirestoreState,
  IInvitation,
  IProject,
  IUser,
  IUserSettings,
} from "@/interfaces";

const initialState: IFirestoreState = {
  firestoreStatus: StatusEnum.IDLE,
  firestoreError: null,
  user: {} as IUser,
  settings: {} as IUserSettings,
  projects: [] as IProject[],
  invitations: [] as IInvitation[],
  messages: null,
};

const progressSlice = createSlice({
  name: "firestore",
  initialState,
  reducers: {
    firestoreIdle: () => initialState,
    firestoreStart: (state) => {
      state.firestoreStatus = StatusEnum.LOADING;
    },
    firestoreSucceeded: (state) => {
      state.firestoreStatus = StatusEnum.SUCCEEDED;
      state.firestoreError = null;
    },
    firestoreFailure: (state, action: PayloadAction<string>) => {
      state.firestoreStatus = StatusEnum.FAILED;
      state.firestoreError = action.payload;
    },
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    setSettings: (state, action: PayloadAction<IUserSettings>) => {
      state.settings = { ...action.payload };
    },
    setProjects: (state, action: PayloadAction<IProject>) => {
      const isDuplicated = state.projects.filter(
        (project) => project.id === action.payload.id
      );

      if (isDuplicated.length === 0)
        state.projects = [...state.projects, action.payload];
    },
  },
});

export const {
  firestoreIdle,
  firestoreStart,
  firestoreSucceeded,
  firestoreFailure,
  setUser,
  setSettings,
  setProjects,
} = progressSlice.actions;
export default progressSlice.reducer;
