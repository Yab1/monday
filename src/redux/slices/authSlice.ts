import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthState, IPrivateData, IUser } from "@/interfaces";
import { StatusEnum } from "@/enum";

const initialState: IAuthState = {
  authStatus: StatusEnum.IDLE,
  authError: null,
  authenticated: false,
  user: {} as IUser,
  privateData: {} as IPrivateData,
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
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    setPrivateData: (state, action: PayloadAction<IPrivateData>) => {
      state.privateData = action.payload;
    },
  },
});

export const {
  authIdle,
  authStart,
  authSucceeded,
  authFailed,
  setUser,
  setPrivateData,
} = authSlice.actions;
export default authSlice.reducer;
