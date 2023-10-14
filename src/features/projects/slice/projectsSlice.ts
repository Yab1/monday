import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "@/data";
import { ActionEnum, TargetEnum } from "@/enum";
import alterDictionary from "@/dictionaries/alterDictionary";
// import { Project } from "@/interfaces";

export const projectSlice = createSlice({
  name: "projectSlice",
  initialState,
  reducers: {
    alterRecord: (
      state,
      action: PayloadAction<{
        target: TargetEnum;
        actionType: ActionEnum;
        id: string;
        payload?: Object;
      }>
    ) => {
      const { target, id, actionType, payload } = action.payload;

      return alterDictionary[target][actionType](id, state, payload);
    },
  },
});

export const { alterRecord } = projectSlice.actions;
export default projectSlice.reducer;
