import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TabsState } from "@/interfaces";

const initialState: TabsState = {
  activeTab: "Project 1",
};

export const tabsSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    switchTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload;
    },
  },
});

export const { switchTab } = tabsSlice.actions;
export default tabsSlice.reducer;
