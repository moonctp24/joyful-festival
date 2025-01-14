import { configureStore } from "@reduxjs/toolkit";

import nowTabSlice from "./nowTab/nowTab-slice";
import alertSlice from "./modal/alert-slice";
import confirmSlice from "./modal/confirm-slice";
import customSlice from "./modal/custom-slice";
import mapSlice from "./map/map-slice";
import loginSlice from "./login/login-slice";

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    nowTab: nowTabSlice.reducer,
    alert: alertSlice.reducer,
    confirm: confirmSlice.reducer,
    custom: customSlice.reducer,
    map: mapSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
