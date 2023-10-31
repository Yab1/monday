import { createSlice } from "@reduxjs/toolkit";
import { Invitation } from "@/interfaces";

const initialState = [] as Invitation[];

export const invitationSlice = createSlice({
  name: "invitations",
  initialState,
  reducers: {},
});

// export const {  } = invitationSlice.actions;
export default invitationSlice.reducer;
