import { createSlice } from "@reduxjs/toolkit";

export const product = createSlice({
  name: "productStore",
  initialState: {
    categories: [],
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
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const {
  setCategories,
  setProducts,
  setProduct,
  setCurrentPage,
  setTotalPage,
} = product.actions;

export default product.reducer;
