const container = document.getElementById("container-div");
const button = document.getElementById("card-btn");
//Agregando estilos al container para visibilidad
container.style.visibility = "visible";

//Manejando eventos para ocultar el container desde el botón
button.addEventListener("click", () => {
    container.style.visibility = (container.style.visibility === "visible") ? "hidden" : "visible";
});

