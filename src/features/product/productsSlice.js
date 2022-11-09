// import { createSlice } from "@reduxjs/toolkit";

// const initialState = [];

// export const productsSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {
//     addProduct: (state, action) => {
//       state.push(action.payload);
//     },
//     updateProduct: (state, action) => {
//       const { id, title, price, category, description, image, stock } = action.payload;
//       const findProduct = state.find((product) => product.id === id);
//       if (findProduct) {
//         findProduct.title = title;
//         findProduct.price = price;
//         findProduct.category = category;
//         findProduct.description = description;
//         findProduct.image = image;
//         findProduct.stock = stock;
//       }
//     },
//     deleteProduct: (state, action) => {
//       return state.filter((product) => product.id !== action.payload);
//     },
//   },
// });

// export const { addProduct, updateProduct, deleteProduct } = productsSlice.actions;
// export default productsSlice.reducer;
