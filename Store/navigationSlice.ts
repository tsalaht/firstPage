import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeComponent: 'MyProfil',
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setActiveComponent: (state, action) => {
      state.activeComponent = action.payload;
    },
  },
});

export const { setActiveComponent } = navigationSlice.actions;

export default navigationSlice.reducer;