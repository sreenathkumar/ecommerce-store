import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import { authApi } from "../features/auth/authApi";
import authReducer from "../features/auth/authSlice";
import adminProductReducer from "../features/dashboard/admin/redux/adminProductSlice"

export const store = configureStore({
   reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
      auth: authReducer,
      adminProduct: adminProductReducer
   },
   middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware, authApi.middleware),

});