//Creando función para determinar si un número es par o impar
//Necesitamos exportar esta función para que pueda ser utilizada en cualquier parte del proyecto, solamente llamando al script. Para ello tenemos que agregar las palabras reservadas `export default`
//Nota: no puede ser función flecha, sino función por declaración, por commonJS
export default function determinarParImpar(numero) {
    (numero % 2 === 0) ? console.log(`El número ${numero} es par`) : console.log(`El número ${numero} es impar`);
}
