import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   loggedIn: false,
   user: undefined,
}

export const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      userLoggedIn: (state, action) => {
         state.loggedIn = true;
         state.user = action.payload;
      },
      userLoggedOut: (state, action) => {
         state = initialState
      }
   }
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions
export default authSlice.reducer;
