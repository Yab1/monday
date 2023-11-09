import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthState, IPrivateData, IUser } from "@/interfaces";
import { StatusEnum } from "@/enum";

const initialState: IAuthState = {
  user: {} as IUser,
  privateData: {} as IPrivateData,
  authenticated: false,
  authStatus: StatusEnum.IDLE,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<StatusEnum>) => {
      switch (action.payload) {
        case StatusEnum.IDLE:
          return initialState;
        case StatusEnum.LOADING:
          state.authStatus = action.payload;
          state.authenticated = false;
          break;
        case StatusEnum.SUCCEEDED:
          state.authenticated = true;
          state.authStatus = action.payload;
          break;
        case StatusEnum.FAILED:
          state.authenticated = false;
          state.authStatus = action.payload;
          break;
        default:
          break;
      }
    },
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    setPrivateData: (state, action: PayloadAction<IPrivateData>) => {
      state.privateData = action.payload;
    },
  },
});

export const { setStatus, setUser, setPrivateData } = authSlice.actions;
export default authSlice.reducer;
