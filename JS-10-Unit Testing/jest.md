# Pruebas unitarias con Jest

## Inicializar node 
```sh
$ npm init -y
```

### Crear archivo index.js
`index.js`

### Instalar y configurar Jest
```sh
npm install --save-dev jest
```
En el `package.json`, modificar los scripts de test
```javascript
    "scripts": {
        "test": "jest"
    },
```

Crear carpeta `modules` y dentro el archivo `calculator.js`

Crear carpeta `tests` y dentro el archivo `calculator.test.js`

Creamos los métodos y funciones, exportamos e importamos.

Ejecutamos Jest mediante el comando 
`npm test`