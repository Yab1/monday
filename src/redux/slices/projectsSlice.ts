import { createSlice } from "@reduxjs/toolkit";
import { IProjectState } from "@/interfaces";

export const projectSlice = createSlice({
  name: "project-manager",
  initialState: {} as IProjectState,
  reducers: {},
});

export default projectSlice.reducer;
