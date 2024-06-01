import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  date: new Date(),
};

export const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    setDate: (state, action) => {
      return { ...state, date: action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDate } = dateSlice.actions;

export default dateSlice.reducer;
