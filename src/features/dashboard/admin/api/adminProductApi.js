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
               draft.total_products = draft.products.length;
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
            url: `/products/${id}`,
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
         }),
         async onQueryStarted(arg, { dispatch, queryFulfilled }) {
            //optimistic cache update start
            const patchRes = dispatch(apiSlice.util.updateQueryData("getAllProducts", undefined, (draft) => {
               const draftObj = JSON.parse(JSON.stringify(draft))
               draftObj.products.forEach((product, index) => {
                  if (product._id === arg.id) {
                     draftObj.products[index] = { ...draftObj.products[index], ...arg.data }
                  }
               });
               draft.products = draftObj.products
            }))
            //optimistic cache update end

            try {
               await queryFulfilled
            } catch (error) {
               patchRes.undo()
            }
         }
      })
   })
})

export const { useGetAllProductsQuery, useDeleteProductMutation, useUpdateProductMutation } = adminProductApi