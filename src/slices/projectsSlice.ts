import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { alterDictionary } from "@/dictionaries";
import { ActionEnum, TargetEnum } from "@/enum";
import { IProjectState, IProjectMetaData, IBatchMetaData } from "@/interfaces";

const initialState = {} as IProjectState;

export const alterCollection = createAsyncThunk(
  "project/alter-collection",
  async ({
    target,
    actionType,
    data,
    projectID,
    batchID,
    taskID,
  }: {
    target: TargetEnum;
    actionType: ActionEnum;
    data: IProjectMetaData | IBatchMetaData;
    projectID?: string;
    batchID?: string;
    taskID?: string;
  }) => {
    try {
      const docRef = alterDictionary[target][actionType](
        data,
        projectID,
        batchID,
        taskID
      );
      return docRef;
    } catch (error) {
      console.error("Error checking and creating user data: ", error);
      throw error;
    }
  }
);

export const projectSlice = createSlice({
  name: "project-manager",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(alterCollection.pending, (state) => {
        state.status = "loading";
      })
      .addCase(alterCollection.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
        console.log(action.payload);
      })
      .addCase(alterCollection.rejected, (state, action) => {
        state.status = "failed";
        console.log(action.error.code);
      });
  },
});

export default projectSlice.reducer;
