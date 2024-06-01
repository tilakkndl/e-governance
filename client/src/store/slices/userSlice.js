import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  login_email: '',
  login_passowrd: '',
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
