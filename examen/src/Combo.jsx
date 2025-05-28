{
  /*Apartado 1 (2 puntos)
Crea un componente React llamado Combo. Dicho componente tendrá el siguiente comportamiento:
•
Recibirá un id como propiedad
•
Al montarse, lanzará una petición al API para obtener los valores a mostrar. La petición será al endpoint /combo/:id, utilizando el id que se le ha pasado como parámetro
•
Deberá mostrar las opciones devueltas por el API
•
Siempre incluirá una opción con valor -1 y texto en blanco
•
En el caso de que la llamada al API haya fallado, el texto de la opción con valor -1 tendrá el texto “Error obteniendo datos” y se mostrará el error por consola.
El código HTML que debe generar el componente es el correspondiente al fichero apartado_1/combo.html
No utilices Redux toolkit para este componente.*/
}

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
    <select style={{ width: '300px', height: '40px', fontSize: '16px' }}>
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
