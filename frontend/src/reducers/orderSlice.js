import { createSlice } from '@reduxjs/toolkit';

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    isOrderComplete: false,
  },
  reducers: {
    COMPLETE_ORDER: (state) => {
      return {
        ...state,
        isOrderComplete: true,
      };
    },
    CLEAR_ORDER_STATUS: (state) => {
      return {
        ...state,
        isOrderComplete: false,
      };
    },
  },
});

export const { COMPLETE_ORDER, CLEAR_ORDER_STATUS } = orderSlice.actions;

export default orderSlice.reducer;
