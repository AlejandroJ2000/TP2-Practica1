# TP2-Practica2

  

Este proyecto resuelve el siguiente enunciado:
*"Incorporar notas de alumnos a un recurso persistente en la memoria del servidor, siguiendo la lógica de la separación del proceso en capas. Cada nota de un alumno que ingrese al servidor tendrá el siguiente formato: { nombre: "Juana Gimenez" , nota: 10, curso: "21A"} y se almacenará en formato objeto dentro un array de notas. Agregar dinámicamente el id a la nota en el momento de ingreso. También obtener utilizando endpoints separados el listado total de notas con todos sus datos, el promedio total de notas ingresadas, la nota más baja y los datos del alumno y la nota más alta y los datos del alumno. En estos últimos tres endpoints, describir la información con un mensaje. Ejemplo: “La nota más baja es 2 del parcial de Luciano Rodriguez” y “El promedio de notas ingresadas al momento es: 14”*

  

---

  
## Tecnologías Utilizadas
- Node.js
- Express.js
- Arquitectura en capas (DAO, Service, Controller, Routes)
- Persistencia en memoria y opcional con File System (notas.json)
- Dotenv para variables de entorno


## Cómo levantar el servidor

  

### 1. Requisitos

  

- Node.js (versión 18 o superior)

- Postman (opcional para probar)

  

### 2. Pasos para iniciar el proyecto

  

```bash

npm install  # Instala las dependencias

npm start  # Levanta el servidor

npm run  watch  # También inicia el servidor pero con recarga automática
