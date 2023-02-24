import { createSlice } from '@reduxjs/toolkit'

const initialState = {
navBar: true
}

const navBar = createSlice({
  name: 'navBar',
  initialState,
  reducers: {
    setNavBarOn: (state,action)=>{
        return state.navBar = true
    },
    setNavBarOff: (state,action)=>{
        return state.navBar = false
    }
  }
});

export const {setNavBarOn,setNavBarOff} = navBar.actions

export default navBar.reducer