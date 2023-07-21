import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "../Features/cartSlice"
import searchSlice from '../Features/searchSlice'


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchSlice,
  },
})