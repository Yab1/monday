import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserInterface } from "@/interfaces";

const initialState: UserInterface = {} as UserInterface;

export const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    initializeCurrentUser: (_, action: PayloadAction<UserInterface>) =>
      action.payload,
  },
});

export const { initializeCurrentUser } = currentUserSlice.actions;
export default currentUserSlice.reducer;
