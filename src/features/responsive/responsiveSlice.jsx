// src/features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const responsiveSlice = createSlice({
  name: 'responsive',
  initialState: {
    dashCSS: 'Dashboard-d',
    chatCSS: 'ChatPage-d',
  },
  reducers: {
    setDashCSS: (state, action) => {
      state.dashCSS = action.payload;
    },
    setChatCSS: (state, action) => {
      state.chatCSS = action.payload;
    },
  },
});

export const { setDashCSS, setChatCSS } = responsiveSlice.actions;

export default responsiveSlice.reducer;
