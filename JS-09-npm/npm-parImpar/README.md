# Crear y publicar un nuevo package de npm

## Creación del package
1. Inicializar npm desde CLI con el comando
```sh
npm init 
```
Me guiará a través de una serie de pasos donde me solicite información relacionada con mi package, como el nombre (nombre único), la versión, la descripción, el punto de entrada `index.js`, comando de prueba, repositorio de git en donde vive, palabras clave para coincidir con búsquedas, autor, licencia.

2. Presionar enter para aceptar que la información es correcta y generar el archivo `package.json`
> - package.json
    - Contiene información sobre el proyecto-módulo que vamos a crear. Son un estándar de nodejs para facilitar la estructura y ejecución de los proyectos dentro del entorno de ejecución y de esta manera poder compartirlo a través del sitio de [https://www.npmjs.com].
    - La información se estructura como objeto de Js con notación JSON

3. Crear una carpeta llamada `modules` en donde vivirá nuestro script
4. Dentro de `modules` crear el script (.js) con el nombre `parimpar.js`
5. Crear la función del script y exportarlo con `export default`
6. Importar el script desde el archivo `index.js` con `import + function + from + ruta con extensión` e invocamos la función con parámetros.
    ```javascript
    import determinarParImpar from "./modules/parimpar.js";
    ```
7. Configurar el `"type": "module"` en el archivo `package.json`
8. Ejecutamos el programa desde el entorno de nodejs con el comando
```sh
node index.js
```
## Publicar package en npm
1. Iniciar sesión de npm pero ahora desde CLI con el comando
```sh
npm login
```
2. Esperamos que cargue y presionamos enter para abrir el navegador
3. Recibiremos un correo con un password de una sola vez, lo agregamos y presionamos Login
4. Regresamos a la terminal y nos mostrará el mensaje `logged in on npmjs.org`
5. Publicar el package con acceso público desde CLI a npm con el comando.
```sh
npm publish --access=public
```