import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: null,
    formSubmitted: false
}

const searchItem = createSlice({
  name: 'searchItem',
  initialState,
  reducers: {
    recievedName : (state,action)=>{
        state.name = action.payload;
        state.formSubmitted = true
    }
  }
});

export const {recievedName} = searchItem.actions

export default searchItem.reducer