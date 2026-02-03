
function saludar() {
    let nombre = document.getElementById("nombre").value;
    let mensaje = document.getElementById("mensaje");

    if (nombre === "") {
        mensaje.textContent = "Por favor, ingresa tu nombre.";
        mensaje.style.color = "red";
    } else {
        mensaje.textContent = "¡Bienvenido/a " + nombre + "! Gracias por visitarnos.";
        mensaje.style.color = "green";
    }
}
