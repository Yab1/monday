import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "@/data";
import { ActionEnum, TargetEnum } from "@/enum";
import alterDictionary from "@/dictionaries/alterDictionary";
import { Project, UserInterface } from "@/interfaces";

export const projectSlice = createSlice({
  name: "projectSlice",
  initialState,
  reducers: {
    alterRecord: (
      _,
      action: PayloadAction<{
        id: string;
        data: Project[] | UserInterface[];
        payload?: Object;
        target: TargetEnum;
        actionType: ActionEnum;
      }>
    ) => {
      const { id, data, payload, target, actionType } = action.payload;
      return alterDictionary[target][actionType](id, data, payload);
    },
  },
});

export const { alterRecord } = projectSlice.actions;
export default projectSlice.reducer;
