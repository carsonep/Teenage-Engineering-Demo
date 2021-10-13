import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define our single API slice object
export const apiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: "api",
  // All of our requests will have URLs starting with '/products'
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:5001/api" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
    }),
    getProduct: builder.query({
      query: (productId) => `/Products/${productId}`,
    }),
    createUser: builder.mutation({
      query: (userInfo) => ({
        url: "/account/register",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

// Export the auto-generated hook for the `getPost` query endpoint
export const {
  useGetProductsQuery,
  useGetProductQuery,
  useCreateUserMutation,
} = apiSlice;
