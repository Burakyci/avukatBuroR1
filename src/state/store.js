import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth.slice";
import appSlice from "./slices/app.slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    app: appSlice.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const useAppDispatch = () => store.dispatch;

export default store;
