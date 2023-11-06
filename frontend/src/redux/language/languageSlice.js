import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentLanguage: "en",
  switchLanguage: false,
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.currentLanguage = action.payload;
    },
    setSwitchLanguage: (state, action) => {
      state.switchLanguage = action.payload;
    },
  },
});

export const { setLanguage, setSwitchLanguage } = languageSlice.actions;
export default languageSlice.reducer;
