import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// let currentUser = JSON.parse(localStorage.getItem("currentUser"));

// Define our single API slice object
export const apiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: "api",
  // All of our requests will have URLs starting with '/products'
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  tagTypes: ["Cart"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
      // headers: {
      //   "content-type": "text/plain",
      //   authorization: `Bearer ${currentUser.token}`,
      // },
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
      providesTags: ["Cart"],
    }),
    deleteBasket: builder.mutation({
      query: (basketId) => ({
        url: `/Basket?id=${basketId}`,
        method: "DELETE",
      }),
      // providesTags: ["Cart"],
    }),

    updateBasket: builder.mutation({
      query: (userBasket) => ({
        url: "/Basket",
        method: "POST",
        body: userBasket,
      }),
      invalidatesTags: ["Cart"],
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
  useDeleteBasketMutation,
  useUpdateBasketMutation,
  useCreateOrderMutation,
  useCreatePaymentMutation,
} = apiSlice;
