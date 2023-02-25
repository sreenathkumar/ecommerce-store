import { apiSlice } from "../api/apiSlice";
import { userLoggedIn, userLoggedOut } from "./authSlice";


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
            const { data } = await queryFulfilled;
            if (data.user) {
               dispatch(userLoggedIn(data.user))
            }
         }
      }),
      logout: builder.mutation({
         query: () => ({
            url: "/logout",
            method: 'POST',
         }),
         async onQueryStarted(arg, { dispatch, queryFulfilled }) {
            const { data } = await queryFulfilled;
            if (data.type === "success") {
               dispatch(userLoggedOut())
            }
         }
      }),
      getLoggedInUser: builder.query({
         query: () => ({
            url: '/user',
            method: 'GET',
            credentials: 'include'
         }),
         async onQueryStarted(arg, { dispatch, queryFulfilled }) {
            const { data } = await queryFulfilled
            dispatch(userLoggedIn(data.user))
         }
      })
   })
})
export const { useLoginMutation, useRegisterMutation, useGetLoggedInUserQuery, useLogoutMutation } = authApi