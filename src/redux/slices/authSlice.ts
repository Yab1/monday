import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthState, IPrivateData, IUser } from "@/interfaces";

const initialState: IAuthState = {
  user: {} as IUser,
  privateData: {} as IPrivateData,
  authenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    setPrivateData: (state, action: PayloadAction<IPrivateData>) => {
      state.privateData = action.payload;
    },
    authenticate: (state, action: PayloadAction<boolean>) => {
      state.authenticated = action.payload;
    },
  },
});

export const { setUser, setPrivateData, authenticate } = authSlice.actions;
export default authSlice.reducer;
