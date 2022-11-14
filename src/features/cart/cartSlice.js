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
            console.log("el state",state)
            console.log("el action",action.payload);
        return state.filter((product) => product.id !== action.payload);
        }
    }
})
export const { addCart, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;
