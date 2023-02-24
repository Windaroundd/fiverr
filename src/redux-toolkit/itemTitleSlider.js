import { createSlice } from '@reduxjs/toolkit'

const initialState = {
item: null
}

const itemTitleSlider = createSlice({
  name: 'itemTitleSlider',
  initialState,
  reducers: {
    recievedItem: (state, action) => { 
        state.item = action.payload
     }
  }
});

export const {recievedItem} = itemTitleSlider.actions

export default itemTitleSlider.reducer