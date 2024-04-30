// src/features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loggedInUser: '',
    log: false,
  },
  reducers: {
    login: (state, action) => {
      state.loggedInUser = action.payload.email;
      state.log = true;
    },
    logout: (state) => {
      state.loggedInUser = '';
      state.log = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
