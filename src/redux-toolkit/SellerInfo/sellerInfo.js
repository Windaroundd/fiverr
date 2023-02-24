import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: null,
};
const itemSellerInfo = createSlice({
  name: 'itemSellerInfo',
  initialState,
  reducers: {
    recieveItem: (state, action) => {
      state.item = action.payload;
    },
  },
});
export const { recieveItem } = itemSellerInfo.actions;

export default itemSellerInfo.reducer;
