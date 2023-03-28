import { apiSlice } from "../../../api/apiSlice";


export const adminProductApi = apiSlice.injectEndpoints({
   endpoints: (builder) => ({
      getAllProducts: builder.query({
         query: () => ({
            url: '/products',
            method: 'GET',
         })
      }),
      deleteProduct: builder.mutation({
         query: (id) => ({
            url: `/products/${id}`,
            method: 'DELETE',
         })
      }),
      updateProduct: builder.mutation({
         query: ({ id, data }) => ({
            url: `/products/:${id}`,
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
         })
      })
   })

})

export const { useGetAllProductsQuery, useDeleteProductMutation } = adminProductApi