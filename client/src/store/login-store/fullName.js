import { createSlice } from "@reduxjs/toolkit";

export const fullName = createSlice({
  name: "fullNameStore",
  initialState: {
    value: "",
  },
  reducers: {
    setFullName: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFullName } = fullName.actions;

export default fullName.reducer;
