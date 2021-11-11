function solicitarNombre (nombre, apellido) {
    let nombreIngresado = prompt("Ingresar Nombre y Apellido");
    console.log("¡Hola!" + " " + nombreIngresado);
}

solicitarNombre();

const producto1 = 600;
const producto2 = 700;
const producto3 = 800;
const iva = 0.21;
let producto1Iva = (precio, iva) => precio * iva;
let producto2Iva = (precio, iva) => precio * iva;
let producto3Iva = (precio, iva) => precio * iva;
let compraEfectiva = prompt("Seleccionar Producto \n 1 - Producto 1 \n 2 - Producto 2 \n 3 - Producto 3");



switch (compraEfectiva) {
    case "1":
    console.log(producto1 + (producto1Iva(producto1, iva)));
    break;
    case "2":
    console.log(producto2 + (producto2Iva(producto2, iva)));
    break;
    case "3":
    console.log(producto3 + (producto3Iva(producto3, iva)));
    break;
    default:
    break;
}

