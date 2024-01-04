import { createSlice } from "@reduxjs/toolkit";

export const product = createSlice({
  name: "productStore",
  initialState: {
    products: [],
    product: {},
    currentPage: 1,
    totalPage: 1,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setTotalPage: (state, action) => {
      state.totalPage = action.payload;
    },
  },
});

export const { setProducts, setProduct, setCurrentPage, setTotalPage } =
  product.actions;

export default product.reducer;
