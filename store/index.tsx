import { configureStore } from "@reduxjs/toolkit";

import nowTabSlice from "./nowTab/nowTab-slice";

const store = configureStore({
  reducer: {
    nowTab: nowTabSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
