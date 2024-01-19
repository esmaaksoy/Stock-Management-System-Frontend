import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
  purchases: [],
  brands: [],
  sales: [],
  categories: [],
  loading: false,
  error: false,
  firms: [],
};
const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getStockSuccess: (state, action) => {
      state[action.payload.url] = action.payload.apiData;
      state.loading = false;
      state.error = false;
    },
    getPromiseSuccess: (state, { payload }) => {
      state.loading = false;
      const dataKeys = payload?.endpoints;
      dataKeys.forEach((key, index) => {
        state[key] = payload.data[index];
      });
      state.error = false;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});
export const { fetchStart, fetchFail, getStockSuccess, getPromiseSuccess } =
  stockSlice.actions;
export default stockSlice.reducer;
