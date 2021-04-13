# Tutorial Next JS

## Instalacion

npm i next react react-dom ----> los 3 paquetes principales para instalar Next JS

## Conceptos

### Pages
 Es la carpeta donde se van almacenar todos los 
archivos que seran visitados en el sitio o en la api que hagamos

### Package JSON

 "scripts": {
    "dev": "next dev"
  }, 
  Es como si fuera npm start en NODEJS
### [id].js

Definir rutas utilizando rutas predefinidas no siempre es suficiente para aplicaciones complejas. En Next.js puede agregar corchetes a una página ( [param]) para crear una ruta dinámica (también conocida como slugs de URL, URL bonitas y otras).

Cualquier ruta como /post/1, /post/abc, etc. será igualada por pages/post/[pid].js. El parámetro de ruta coincidente se enviará como un parámetro de consulta a la página y se combinará con los demás parámetros de consulta.

