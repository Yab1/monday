import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StatusEnum } from "@/enum";
import { IFirestoreState } from "@/interfaces";

const initialState: IFirestoreState = {
  firestoreStatus: StatusEnum.IDLE,
  firestoreError: null,
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
  },
});

export const {
  firestoreIdle,
  firestoreStart,
  firestoreSucceeded,
  firestoreFailure,
} = progressSlice.actions;
export default progressSlice.reducer;
