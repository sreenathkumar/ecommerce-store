import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const apiSlice = createApi({
   redeucerPath: 'api',
   baseQuery: fetchBaseQuery({
      baseUrl: process.env.REACT_API_URL
   }),
   endpoints: (builder) => ({}),
})