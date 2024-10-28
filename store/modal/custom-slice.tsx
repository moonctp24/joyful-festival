import { createSlice } from "@reduxjs/toolkit";

const initialCustomState = {
  isOpen: false,
  title: "알림",
  cont: null,
  width: "520", // 900, 700, 520, 320
  callback: null,
  type: "custom",
};

const customSlice = createSlice({
  name: "custom",
  initialState: initialCustomState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.title = action.payload.title || initialCustomState.title;
      state.cont = action.payload.cont;
      state.width = action.payload.width || initialCustomState.width;
      state.callback = action.payload.callback || initialCustomState.callback;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.title = initialCustomState.title;
      state.cont = initialCustomState.cont;
      state.width = initialCustomState.width;
      state.callback = initialCustomState.callback;
    },
  },
});

export const customAction = customSlice.actions;

export default customSlice;
