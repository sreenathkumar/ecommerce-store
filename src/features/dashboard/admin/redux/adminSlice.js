const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
   markedProducts: [],
   deleteProduct: null
}
const adminSlice = createSlice({
   name: "admin",
   initialState,
   reducers: {
      markProduct: (state, action) => {
         state.markedProducts.push(action.payload);
      },
      deleteSingleProduct: (state, action) => {
         state.deleteProduct = action.payload;
      },
      cancelDeleteProduct: (state) => {
         state.deleteProduct = null;
      }
   }
})

export const { markProduct, deleteSingleProduct, cancelDeleteProduct } = adminSlice.actions
export default adminSlice.reducer;
