import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBufferState } from "@/interfaces";
import { computeChanges } from "@/function";
import { BufferEnum } from "@/enum";

const initialState: IBufferState = {} as IBufferState;

for (const bufferType in BufferEnum) {
  initialState[BufferEnum[bufferType as keyof typeof BufferEnum]] = {
    cache: [],
    added: [],
    removed: [],
  };
}

export const projectSlice = createSlice({
  name: "buffer",
  initialState,
  reducers: {
    cleanBuffer: () => initialState,
    updateBuffer: (
      state,
      action: PayloadAction<{ bufferType: BufferEnum; fetched: string[] }>
    ) => {
      const { bufferType, fetched } = action.payload;
      const cached = state[bufferType].cache;

      const { added, removed, cache } = computeChanges(cached, fetched);

      state[bufferType].added = added;
      state[bufferType].removed = removed;
      state[bufferType].cache = [...cache, ...added];
    },
  },
});

export const { cleanBuffer, updateBuffer } = projectSlice.actions;

export default projectSlice.reducer;
