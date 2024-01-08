const botonRandom = document.getElementById("btn");
const botonReset = document.getElementById("reset");
const colorFondo = document.body.style.backgroundColor;

//Vamos a declarar una función que generar un número random tomando un parámetro number
const random = (number) => {
    return Math.floor(Math.random() * (number + 1));
}

//Crear eventos de click para que al presionar un botón pase algo
botonRandom.addEventListener("click", () => {
    const randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = randomColor;
});

// -- Botón de reset
botonReset.addEventListener("click", () => {
    document.body.style.backgroundColor = colorFondo;
});