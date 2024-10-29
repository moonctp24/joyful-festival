import { configureStore } from "@reduxjs/toolkit";

import nowTabSlice from "./nowTab/nowTab-slice";
import alertSlice from "./modal/alert-slice";
import confirmSlice from "./modal/confirm-slice";
import customSlice from "./modal/custom-slice";

const store = configureStore({
  reducer: {
    nowTab: nowTabSlice.reducer,
    alert: alertSlice.reducer,
    confirm: confirmSlice.reducer,
    custom: customSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
