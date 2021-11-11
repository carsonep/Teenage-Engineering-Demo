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
    getUser: builder.query({ query: () => `/Account` }),
    createUser: builder.mutation({
      query: (userInfo) => ({
        url: "/account/register",
        method: "POST",
        body: userInfo,
      }),
    }),
    loginUser: builder.mutation({
      query: (userInfo) => ({
        url: "/account/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    getBasket: builder.query({
      query: (basketId) => `/Basket?id=${basketId}`,
    }),
    updateBasket: builder.mutation({
      query: (userBasket) => ({
        url: "/Basket",
        method: "POST",
        body: userBasket,
      }),
    }),
    createOrder: builder.mutation({
      query: (orderInfo) => ({
        url: "/Orders",
        method: "POST",

        body: orderInfo,
      }),
    }),
    createPayment: builder.mutation({
      query: (basketId) => ({
        url: `/Payments/${basketId}`,
        method: "POST",

        body: basketId,
      }),
    }),
  }),
});

// Export the auto-generated hook for the `getPost` query endpoint
export const {
  useGetProductsQuery,
  useGetProductQuery,
  useGetBasketQuery,
  useCreateUserMutation,
  useLoginUserMutation,
  useUpdateBasketMutation,
  useCreateOrderMutation,
  useCreatePaymentMutation,
} = apiSlice;
