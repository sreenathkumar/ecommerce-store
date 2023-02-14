import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import { authApi } from "../features/auth/authApi";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
   reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
      auth: authReducer
   },
   middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware,),

});