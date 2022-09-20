import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: localStorage.getItem('user') ? true : false,
}
export const loginSlice = createSlice({
  name: 'isLoggin',
  initialState,
  reducers: {
    toggle: (state, value) => {
      state.value = value.payload;
    }
  },
});

export const { toggle } = loginSlice.actions

export default loginSlice.reducer;
