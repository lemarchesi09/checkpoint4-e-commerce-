import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);

    },
    updateItem: (state, action) => {

      const { id, quantity } = action.payload;
      const findItem = state.find((item) => item.id === id);
      if (findItem) {
        findItem.quantity += quantity;
      }
    },
    deleteItem: (state, action) => {    
      return  state.filter((item)=> item.item.id !== action.payload);
      
      
    }
  },
});

export const { addItem, updateItem, deleteItem } = itemSlice.actions;
export default itemSlice.reducer;
