import { createSlice } from "@reduxjs/toolkit";

const MIN_COMBOS = 1;
const MAX_COMBOS = 5;

const comboSlice = createSlice({
  name: "combo",
  initialState: [],
  reducers: {
    añadirCombo: (state) => {
      if (state.length < MAX_COMBOS) {
        state.push(state.length + 1);
      }
    },
    borrarCombo: (state, action) => {
      const index = state.indexOf(action.payload);
      if (state.length > MIN_COMBOS) {
        state.pop();
      }
    },
  },
});

export const { añadirCombo, borrarCombo } = comboSlice.actions;
export default comboSlice.reducer;
