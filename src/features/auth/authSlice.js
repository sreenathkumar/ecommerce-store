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
      userLoggedIn: (state, action) => {
         state.loggedIn = true;
         state.token = action.payload.token;
         state.user = action.payload.user;
      }
   }
});

export const { userLoggedIn } = authSlice.actions
export default authSlice.reducer;
