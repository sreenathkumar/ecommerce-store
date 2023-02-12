import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const apiSlice = createApi({
   redeucerPath: 'api',
   baseQuery: fetchBaseQuery({
      baseUrl: process.env.REACT_API_URL,
      prepareHeaders: async(headers,{getState,endpoints})=>{
         const token= getState()?.auth?.accessToken;
         if(token){
            headers.set("Authorization",`Bearer ${token}`)
         }
         return headers
      }
   }),
   endpoints: (builder) => ({}),
})