import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../store/slices/userSlice";
import dateReducer from "./slices/dateSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    date: dateReducer,
  },
});
