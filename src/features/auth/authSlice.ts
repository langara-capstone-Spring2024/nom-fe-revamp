import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { TokenProps } from "types/store/AuthState";

const initialState: TokenProps = {
  token: null,
  firstName: "",
  lastName: "",
  imageUrl: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken, firstName, lastName, imageUrl } = action.payload;
      state.token = accessToken;
      state.firstName = firstName;
      state.lastName = lastName;
      state.imageUrl = imageUrl;
    },
    logOut: (state) => {
      state.token = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state: RootState) => state.auth.token;
export const selectUserInfo = (state: RootState) => state.auth;
