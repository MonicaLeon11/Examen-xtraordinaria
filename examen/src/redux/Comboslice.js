import { createSlice } from "@reduxjs/toolkit";

const MIN_COMBOS = 1;
const MAX_COMBOS = 5;

const initialState ={
  combos:[1],
  seleccionados: { },
  colores: [],
  error: null,
}
const comboSlice = createSlice({
  name: "combo",
  initialState,
  reducers: {
    añadirCombo: (state) => {
      if (state.combos.length < MAX_COMBOS) {
        const nuevoId = state.combos[state.combos.length - 1] + 1;
        state.combos.push(nuevoId);
      }
    },
    borrarCombo: (state, action) => {
      if (state.combos.length > MIN_COMBOS) {
        const ultimoId = state.combos[state.combos.length - 1];
        state.combos.pop();
        delete state.seleccionados[ultimoId];
      }
    },
    actualizarSeleccion: (state, action) => {
      const { id, valor } = action.payload;
      state.seleccionados[id] = valor;
    },
    actualizarColores: (state, action) => {
      state.colores = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.colores = [];
    },
  },
});

export const { añadirCombo, borrarCombo, actualizarColores,setError, actualizarSeleccion } = comboSlice.actions;
export default comboSlice.reducer;
