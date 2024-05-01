import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth/authSlice';
import responsiveReducer from './features/responsive/responsiveSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    responsive: responsiveReducer,
  },
})