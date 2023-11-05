import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProjectState } from "@/interfaces";
import { readProject } from "../thunks/crudThunks";

export const projectSlice = createSlice({
  name: "project-manager",
  initialState: {} as IProjectState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(readProject.pending, (state) => {
        state.status = "loading";
      })
      .addCase(readProject.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
        // console.log(action.payload);
      })
      .addCase(readProject.rejected, (state, action) => {
        state.status = "failed";
        console.log(action.error.code);
      });
  },
});

export default projectSlice.reducer;
