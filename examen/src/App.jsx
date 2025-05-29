import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { añadirCombo, borrarCombo } from "./redux/Comboslice";
import Combo from "./Combo";
import BtnAñadir from "./btn-añadir";
import BtnBorrar from "./btn-borrar";
import BotonEnviar from "./btn-enviar";

const MIN_COMBOS = 1;
const MAX_COMBOS = 5;

function App() {
  const combos = useSelector((state) => state.combo.combos);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <div>
          <BtnBorrar
            onClick={() => dispatch(borrarCombo())}
            disabled={combos.length <= MIN_COMBOS}
          />
          <BtnAñadir
            onClick={() => dispatch(añadirCombo())}
            disabled={combos.length >= MAX_COMBOS}
          />
        </div>

        <div>
          {combos.map((id) => (
            <Combo key={id} id={id} />
          ))}
        </div>
      </div>
      <Combo />
      <BotonEnviar />
    </>
  );
}

export default App;
