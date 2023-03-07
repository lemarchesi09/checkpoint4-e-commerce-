import { createSlice } from "@reduxjs/toolkit";
// import { Action } from "@remix-run/router";

const initialState  = [];

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addCart: (state, action)=> {
            state.push(action.payload);
        },
        deleteProduct: (state,action)=>{ 
        return state.filter((product) => product.id !== action.payload);
        
        },
        resetCart: () =>{
            return initialState
        }
    }
})
export const { addCart, deleteProduct, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
