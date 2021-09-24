import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import storeApi from "../../common/storeApi";

export const fetchAsyncProducts = createAsyncThunk(
  "products/fetchAsyncProducts",
  async () => {
    const response = await storeApi.get("api/Products");
    return response.data;
  }
);

export const fetchAsyncProduct = createAsyncThunk(
  "products/fetchAsyncProduct",
  async (id) => {
    const response = await storeApi.get(`api/Products/${id}`);
    return response.data;
  }
);

const initialState = {
  products: {},
  selectProduct: {},
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncProducts.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncProducts.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, products: payload };
    },
    [fetchAsyncProducts.rejected]: () => {
      console.log("Rejected!");
    },

    [fetchAsyncProduct.fulfilled]: (state, { payload }) => {
      return { ...state, selectProduct: payload };
    },
  },
});

export const getAllProducts = (state) => state.products.products;
export const getProduct = (state) => state.products.selectProduct;

export default productSlice.reducer;
