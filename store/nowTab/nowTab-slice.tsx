import { createSlice } from "@reduxjs/toolkit";

const initialNowTabState = {
  nowTabNum: 0,
};

const nowTabSlice = createSlice({
  name: "nowTab",
  initialState: initialNowTabState,
  reducers: {
    updateNowTab: (state, action) => {
      state.nowTabNum = action.payload.tabNum;
    },
  },
});

export const nowTabAction = nowTabSlice.actions;

export default nowTabSlice;
