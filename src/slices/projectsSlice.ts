import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { alterDictionary } from "@/dictionaries";
import { ActionEnum, TargetEnum } from "@/enum";
import { Project, User } from "@/interfaces";

const initialState = [] as Project[];

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    alterRecord: (
      _,
      action: PayloadAction<{
        id: string;
        data: Project[] | User[];
        payload?: Object;
        target: TargetEnum;
        actionType: ActionEnum;
      }>
    ) => {
      const { id, data, payload, target, actionType } = action.payload;
      return alterDictionary[target][actionType](id, data, payload);
    },
    selectProject: (_, action: PayloadAction<Project>) => {
      console.log(action.payload);
    },
  },
});

export const { alterRecord, selectProject } = projectSlice.actions;
export default projectSlice.reducer;
