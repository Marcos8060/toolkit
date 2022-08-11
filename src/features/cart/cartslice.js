import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState ={
    cartItems : cartItems,
    amount: 2,
    total: 0,
    isLoading: true
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        clearCart:(state)=>{
            state.cartItems = []
        },

        // remove item
        removeItem: (state,action)=>{
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
        },

        // increase item quantity
        increase:( state, { payload})=>{
            const cartitem = state.cartItems.find((item) => item.id === payload.id)
            cartitem.amount = cartitem.amount + 1
        },

        // decrease item quantity
        decrease:(state,{ payload})=>{
            const cartitem = state.cartItems.find((item) => item.id === payload.id)
            cartitem.amount = cartitem.amount - 1
        }
    }
})
 
// console.log(cartSlice);

export const { clearCart, removeItem, increase, decrease} = cartSlice.actions;

export default cartSlice.reducer

