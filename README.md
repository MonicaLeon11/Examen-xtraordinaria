>[!IMPORTANT]
>Esto es el examen de extraordinaria de Entorno cliente
>
>Apartado 1
Crea un componente React llamado Combo. Dicho componente tendrá el siguiente comportamiento:
•Recibirá un id como propiedad
•Al montarse, lanzará una petición al API para obtener los valores a mostrar. La petición será al endpoint /combo/:id, utilizando el id que se le ha pasado como parámetro
•Deberá mostrar las opciones devueltas por el API
•Siempre incluirá una opción con valor -1 y texto en blanco
•En el caso de que la llamada al API haya fallado, el texto de la opción con valor -1 tendrá el texto “Error obteniendo datos” y se mostrará el error por consola.
El código HTML que debe generar el componente es el correspondiente al fichero apartado_1/combo.html
No utilices Redux toolkit para este componente.
