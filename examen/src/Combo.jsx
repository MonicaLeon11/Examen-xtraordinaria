
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actualizarSeleccion } from './redux/Comboslice';

const Combo = ({ id }) => {
    const [opciones, setOpciones] = useState([]);
    const [error, setError] = useState(false);     
    const dispatch = useDispatch();

    const selected = useSelector((state) => state.combo.seleccionados[id] ?? -1);
  useEffect(() => {
    const fetchOpciones = async () => {
      try {
        const response = await fetch(`http://localhost:3000/combo/${id}`);
        const data = await response.json();
        console.log("Datos recibidos del API:", data);
        setOpciones(Array.isArray(data.combo) ? data.combo : []);
        console.log('datos',data.combo);
        
      } catch (error) {
        console.error("Error obteniendo datos");
        setOpciones([]);
          setError(true);
      }
    };
    fetchOpciones();
  }, [id]);
  
 
  const handleChange = (e) => {
    dispatch(actualizarSeleccion({ id, valor: parseInt(e.target.value) }));
  };

  return (
    <select
    value={selected}
    onChange={handleChange}
    style={{ width: '200px', height: '30px', fontSize: '13px', margin: '5px' }}>
      <option value={-1}>{error ? "Error obteniendo datos" : ""}</option>
      {opciones.map((opcion) => (
        <option key={opcion.id} value={opcion.id}>
            {opcion.caption}
        </option>
      ))}
    </select>
  );
};
export default Combo;
