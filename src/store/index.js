import { configureStore } from '@reduxjs/toolkit';
import couterSlice from './couterSlice';
import favoriteSlice from './favoriteSlice';
import loginSlice from './loginSlice';

export default configureStore({
  reducer: {
    favorite: favoriteSlice,
    couter: couterSlice,
    isLoggin: loginSlice
  }
});
