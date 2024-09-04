import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from './navigationSlice';

export const store:any = configureStore({
  reducer: {
    navigation: navigationReducer,
  },
});

