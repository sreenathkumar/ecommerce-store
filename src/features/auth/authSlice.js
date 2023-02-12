import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   loggedIn: false,
   token: null,
   user: null,
}

export const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      login: (state) => {

      }
   }
});

export const { login } = authSlice.actions
export default authSlice.reducer;
