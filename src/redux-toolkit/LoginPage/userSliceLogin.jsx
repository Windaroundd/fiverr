import { userLocalService } from "../../services/localService";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userLogin: userLocalService.get(),
};
const userSliceLogin = createSlice({
  name: "userSliceLogin",
  initialState,
  reducers: {
    setUserInfoLogin: (state, action) => {
      state.userLogin = action.payload;
    },
  },
});
export const { setUserInfoLogin } = userSliceLogin.actions;
export default userSliceLogin.reducer;
