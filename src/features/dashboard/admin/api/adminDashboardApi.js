import { apiSlice } from "../../../api/apiSlice";

export const adminDashBoardApi = apiSlice.injectEndpoints({
   endpoints: (builder) => ({
      addMenu: builder.mutation({
         query: () => ({
            url: '/add-menu',
            method: 'POST'
         })
      }),

      getAdminDashboardMenu: builder.query({
         query: (title) => ({
            url: `/menus/${title}`,
            method: 'GET'
         })
      })
   })

})

export const { useAddMenuMutation, useGetAdminDashboardMenuQuery } = adminDashBoardApi