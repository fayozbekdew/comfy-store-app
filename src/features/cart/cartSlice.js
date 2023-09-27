import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
   cartItems: [],
   numItemsInCart: 0,
   cartTotal: 0,
   shipping: 500,
   tax: 0,
   orderTotal: 0
}

const getCartFromLocalStorage = () => {
   return JSON.parse(localStorage.getItem("cart")) || defaultState
}

const cartSlice = createSlice({
   name: 'cart',
   initialState: getCartFromLocalStorage(),
   reducers: {
      addItem: (state, action) => {
         const product = action.payload
         const item = state.cartItems.find((item) => item.cartId === product.cartId)
         console.log(item)
         if (item) {
            item.amount += product.amount
         } else {
            state.cartItems.push(product)
         }
         state.numItemsInCart += product.amount
         state.cartTotal += product.price * product.amount
         cartSlice.caseReducers.calculateProducts(state)
         toast.success("item added to cart!")

      },
      clearCart: (state) => { },
      removeItem: (state, action) => {
         const item = state.cartItems.find((item) => item.cartId === action.payload.cartId)
         state.numItemsInCart -= item.amount
         state.cartTotal -= item.amount * item.price
         state.cartItems = state.cartItems.filter(element => element.cartId !== item.cartId)
         cartSlice.caseReducers.calculateProducts(state)
         toast.error("cart removed!")
      },
      editItem: (state, action) => {
         const item = state.cartItems.find((item) => item.cartId === action.payload.cartId)
         const different = item.amount - action.payload.amount
         item.amount -= different
         state.numItemsInCart -= different
         state.cartTotal -= item.price * different
         cartSlice.caseReducers.calculateProducts(state)
         toast.success("cart updated!")

      },
      calculateProducts: (state) => {
         state.tax = 0.1 * state.cartTotal
         state.orderTotal = state.cartTotal + state.shipping + state.tax
         localStorage.setItem("cart", JSON.stringify(state))
      }
   }
})

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions
export default cartSlice.reducer