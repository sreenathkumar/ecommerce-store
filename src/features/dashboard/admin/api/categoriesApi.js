const { apiSlice } = require("../../../api/apiSlice");

const categoriesApi = apiSlice.injectEndpoints({
   endpoints: (builder) => ({
      getAllCategories: builder.query({
         query: (type) => ({
            url: `/categories/${type}`,
            method: "GET",
         }),
      }),

      addCategory: builder.mutation({
         query: ({ data, type }) => ({
            url: `/categories/${type}`,
            method: "POST",
            body: data,
         }),
      }),

      editCategory: builder.mutation({
         query: ({ id, data, type }) => ({
            url: `/categories/${type}/${id}`,
            method: "PATCH",
            body: data,
         })
      }),

      deleteCategory: builder.mutation({
         query: ({ id, type }) => ({
            url: `/categories/${type}/${id}`,
            method: "DELETE",
         }),
      }),
   })
})

export const { useGetAllCategoriesQuery, useAddCategoryMutation, useEditCategoryMutation, useDeleteCategoryMutation } = categoriesApi;