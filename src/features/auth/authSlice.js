import { createSlice } from '@reduxjs/toolkit';

// get from localStorage
const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: user ? user : null,
  isError: false,
  isScuccess: false,
  isLoading: false,
  message: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isScuccess = false;
      state.isLoading = false;
      state.isError = false;
      state.message = '';
    },
  },
  extraReducers: () => {},
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
