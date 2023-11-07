import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthState, IPrivateData, IUser } from "@/interfaces";
import { Status } from "@/enum";

const initialState: IAuthState = {
  user: {} as IUser,
  privateData: {} as IPrivateData,
  authenticated: false,
  status: Status.IDLE,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetState: () => initialState,
    signInWithGoogle: () => {
      type: "signInWithGoogle";
    },
    authStart: (state) => {
      state.status = Status.LOADING;
    },
    authSuccess: (state) => {
      state.status = Status.SUCCEEDED;
      state.error = null;
    },
    authFailure: (state, action: PayloadAction<string>) => {
      state.status = Status.FAILED;
      state.error = action.payload;
    },
  },
});

export const { resetState, authStart, authSuccess, authFailure } =
  authSlice.actions;
export default authSlice.reducer;
