import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";


export const authApi = apiSlice.injectEndpoints({
   endpoints: (builder) => ({
      register: builder.mutation({
         query: (data) => ({
            url: "/register",
            method: 'POST',
            body: data
         })
      }),
      login: builder.mutation({
         query: (data) => ({
            url: "/login",
            method: 'POST',
            body: data
         }),
         async onQueryStarted(arg, { dispatch, queryFulfilled }) {
            const result = await queryFulfilled;
            dispatch(userLoggedIn(result.data))
         }
      })
   })
})
export const { useLoginMutation, useRegisterMutation } = authApi