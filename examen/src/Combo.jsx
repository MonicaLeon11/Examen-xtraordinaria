
import { useEffect, useState } from "react";

const Combo = ({ id }) => {
    const [opciones, setOpciones] = useState([]);
    const [error, setError] = useState(false); 

  useEffect(() => {
    const fetchOpciones = async () => {
      try {
        const response = await fetch(`http://localhost:3000/combo/${id}`);
        const data = await response.json();
        console.log("Datos recibidos del API:", data);
        setOpciones(data.combo);
        console.log('datos',data.combo);
        
      } catch (error) {
        console.error("Error obteniendo datos");
          setError(true);
      }
    };
    fetchOpciones();
  }, [id]);

  return (
    <select style={{ width: '200px', height: '30px', fontSize: '13px', margin: '5px' }}>
      <option value={-1}>{opciones.length === 0 ? "" : ""}</option>
      {opciones.map((opcion) => (
        <option key={opcion.id} value={opcion.caption}>
            {opcion.caption}
        </option>
      ))}
    </select>
  );
};
export default Combo;
