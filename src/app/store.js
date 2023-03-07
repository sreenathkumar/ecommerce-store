import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import { authApi } from "../features/auth/authApi";
import authReducer from "../features/auth/authSlice";
import adminReducer from "../features/dashboard/admin/redux/adminSlice"

export const store = configureStore({
   reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
      auth: authReducer,
      admin: adminReducer
   },
   middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware, authApi.middleware),

});