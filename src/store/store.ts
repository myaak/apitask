import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./Reducers/NewsReducer.ts";
import newsItemSlice from "./Reducers/NewsItemReducer.ts";
import thunkMiddleware from "redux-thunk";

export const store = configureStore({
  reducer: {
    newsList: newsSlice,
    newsItem: newsItemSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([thunkMiddleware])
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
