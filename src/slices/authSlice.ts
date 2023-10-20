import { createSlice } from "@reduxjs/toolkit";
import { userData } from "@/data";

const authSlice = createSlice({
  name: "auth",
  initialState: userData,
  reducers: {},
});

export default authSlice.reducer;
