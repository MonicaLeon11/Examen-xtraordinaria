import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actualizarColores, setError } from "./redux/Comboslice";

const BotonEnviar = () => {
  const dispatch = useDispatch();
  const { combos, seleccionados, colores, error } = useSelector(
    (state) => state.combo
  );

  const todosSeleccionados = combos.every(
    (id) => seleccionados[id] !== undefined && seleccionados[id] !== -1
  );

  const enviar = async () => {
    try {
      const valoresSeleccionados = combos.map((id) => seleccionados[id]);
      const respuestas = await Promise.all(
        valoresSeleccionados.map((sel) =>
          fetch("http://localhost:3000/color", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ color: sel }),
          }).then((res) => {
            if (!res.ok) throw new Error("Error al obtener color");
            return res.json();
          })
        )
      );

      const coloresHex = respuestas.map((r) => r.hex);
      dispatch(actualizarColores(coloresHex));
      console.log("Colores obtenidos:", coloresHex);
      
      dispatch(setError(null));
    } catch (err) {
      dispatch(actualizarColores([]));
      dispatch(setError("Error al obtener los colores"));
    }
  };
  console.log("colores en render:", colores);

  return (
    <div>
      <button onClick={enviar} disabled={!todosSeleccionados}>
        Enviar
      </button>

      {error && <div style={{ color: "red" }}>{error}</div>}

      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        {colores.map((color, index) => (
          <div
            key={index}
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: color,
              border: "1px solid black",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BotonEnviar;
