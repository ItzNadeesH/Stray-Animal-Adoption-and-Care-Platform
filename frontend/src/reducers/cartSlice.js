import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: Cookies.get('cart') ? JSON.parse(Cookies.get('cart')) : [],
  reducers: {
    ADD_TO_CART: (state, action) => {
      state = state.filter(
        (item) => action.payload.productId !== item.productId
      );
      Cookies.set(
        'cart',
        JSON.stringify([
          ...state,
          {
            productId: action.payload.productId,
            quantity: action.payload.value,
          },
        ])
      );
      console.log();
      return [
        ...state,
        {
          productId: action.payload.productId,
          quantity: action.payload.value,
        },
      ];
    },
    REMOVE_FROM_CART: (state) => {
      state.value -= 1;
    },
  },
});

export const { ADD_TO_CART, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
