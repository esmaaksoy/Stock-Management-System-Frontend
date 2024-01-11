import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    products: [],
    purchases: [],
    brands: [],
    sales: [],
    categories: [],
    loading: false,
    error: false,
    firms: [],
  }

  
  const stockSlice = createSlice({
    name:"stock",
    initialState,
    reducers:{
        fetchStart: (state) => {
            state.loading = true
          },
          getStockSuccess: (state, action) =>{
            state[action.payload.url] = action.payload.apiData
            state.loading = false
          },
          fetchFail: (state) => {
            state.loading = false
            state.error = true
          },
    }
  })
  export const {fetchStart,fetchFail,getStockSuccess} = stockSlice.actions
  export default stockSlice.reducer