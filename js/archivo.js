/* Saludo */
alert("¡Hola! Vamos a presupuestar una comisión para realizar Emotes para tus redes sociales.")

/* Variables Constantes Globales*/
const precioA = 10;
const precioB = 20;
const precioC = 30;

/* Funciones */
function presupuesto () {

    let tamanio = prompt("Elije el tamaño de tus emojis (A/B/C)").toUpperCase();
    let cantidad = prompt("Escribe la cantidad requerida");

    /* Control de errores */
    if (tamanio != "A" && tamanio != "B" && tamanio != "C") {
        alert("El tamaño ingresado no es válido");
        return;
    }
    if ( isNaN(cantidad) ) {
        alert("La cantidad ingresada no es válida");
        return;
    } else {
        
    }

    calcularTotal(tamanio,cantidad);
    calcularTiempo(cantidad);    
}

function calcularTotal (tamanio,cantidad) {
    
    if (tamanio == "A") {
        total = precioA * cantidad;
        alert("El total de su pedido es de: " + total + " pesos")
    } else if (tamanio == "B") {
        total = precioB * cantidad;
        alert("El total de su pedido es de: " + total + " pesos")
    } else if (tamanio == "C") {
        total = precioC * cantidad;
        alert("El total de su pedido es de: " + total + " pesos")
    } 
}

function calcularTiempo(cantidad) {    
    let tiempoEntrega = 0
    for (let i = 1 ; i <= cantidad ; i++) {
        tiempoEntrega += 2;
    }
    alert("El tiempo de entrega del pedido será de: " + tiempoEntrega + " días");
}