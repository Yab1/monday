import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthState } from "@/interfaces";
import { StatusEnum } from "@/enum";

const initialState: IAuthState = {
  authStatus: StatusEnum.IDLE,
  authError: null,
  authenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authIdle: () => initialState,
    authStart: (state) => {
      state.authStatus = StatusEnum.LOADING;
      state.authenticated = false;
    },
    authSucceeded: (state) => {
      state.authStatus = StatusEnum.SUCCEEDED;
      state.authenticated = true;
    },
    authFailed: (state, action: PayloadAction<string>) => {
      state.authStatus = StatusEnum.FAILED;
      state.authError = action.payload;
      state.authenticated = false;
    },
  },
});

export const { authIdle, authStart, authSucceeded, authFailed } =
  authSlice.actions;
export default authSlice.reducer;
