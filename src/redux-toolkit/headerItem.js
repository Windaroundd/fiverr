import { createSlice } from '@reduxjs/toolkit'

const initialState = {
id: null,
}

const headerItem = createSlice({
  name: 'headerItem',
  initialState,
  reducers: {
    recieveId:(state,action)=>{
        state.id = action.payload
    }
  }
});

export const {recieveId} = headerItem.actions

export default headerItem.reducer