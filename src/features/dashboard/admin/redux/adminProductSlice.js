const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
   markedProducts: [],
   editProduct: {},
   deleteProduct: null
}
const adminProductSlice = createSlice({
   name: "adminProduct",
   initialState,
   reducers: {
      markProduct: (state, action) => {
         state.markedProducts.push(action.payload);
      },
      removeMarkedProduct: (state, action) => {
         state.markedProducts.filter((product) => {
            return product.id !== action.payload
         })
      },
      editProduct: (state, action) => {
         state.editProduct = action.payload;
      },
      cancelEditProduct: (state) => {
         state.markedProducts = initialState.markedProducts;
      },
      deleteSingleProduct: (state, action) => {
         state.deleteProduct = action.payload;
      },
      cancelDeleteProduct: (state) => {
         state.deleteProduct = null;
      }
   }
})

export const { markProduct, removeMarkedProduct, deleteSingleProduct, editProduct, cancelEditProduct, cancelDeleteProduct } = adminProductSlice.actions
export default adminProductSlice.reducer;
