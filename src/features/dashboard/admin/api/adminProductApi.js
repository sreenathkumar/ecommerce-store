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
         }),
         async onQueryStarted(arg, { dispatch, queryFulfilled }) {
            //optimistic cache update start
            const patchRes = dispatch(apiSlice.util.updateQueryData("getAllProducts", undefined, (draft) => {
               const draftObj = JSON.parse(JSON.stringify(draft))
               draft.products = draftObj.products.filter((product) => product._id !== arg);

            }))
            //optimistic cache update end

            try {
               await queryFulfilled
            } catch (error) {
               patchRes.undo()
            }
         }
      }),
      updateProduct: builder.mutation({
         query: ({ id, data }) => ({
            url: `/products/:${id}`,
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
         }),
         async onQueryStarted() {
            //optimistic cache update start
            apiSlice.util.updateQueryData('getAllProducts',)
            //optimistic cache update end
         }
      })
   })
})

export const { useGetAllProductsQuery, useDeleteProductMutation, useUpdateProductMutation } = adminProductApi