import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userSignup: null,
};
const userSliceSignup = createSlice({
  name: "userSliceSignup",
  initialState,
  reducers: {
    setUserInforSignup: (state, action) => {
      state.userSignup = action.payload;
    },
  },
});

export const { setUserInforSignup } = userSliceSignup.actions;
export default userSliceSignup.reducer;
