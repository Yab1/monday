import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StatusEnum } from "@/enum";
import { IProgressState } from "@/interfaces";

const initialState: IProgressState = {
  status: StatusEnum.IDLE,
  error: null,
};

const progressSlice = createSlice({
  name: "progress",
  initialState,
  reducers: {
    resetProgressState: () => initialState,
    progressStart: (state) => {
      state.status = StatusEnum.LOADING;
    },
    progressSuccess: (state) => {
      state.status = StatusEnum.SUCCEEDED;
      state.error = null;
    },
    progressFailure: (state, action: PayloadAction<string>) => {
      state.status = StatusEnum.FAILED;
      state.error = action.payload;
    },
  },
});

export const {
  resetProgressState,
  progressStart,
  progressSuccess,
  progressFailure,
} = progressSlice.actions;
export default progressSlice.reducer;
