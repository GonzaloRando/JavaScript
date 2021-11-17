let usuario;
let pedido;
let cantUsuarios = 1;


class Usuario {
    constructor(nombre, apellido, email, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.edad = edad;
    }
    
}
class Productos {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}
const producto1 = new Productos("Malbec", "850");
const producto2 = new Productos("Cabernet Sauvignon", "800");
const producto3 = new Productos("Malbec Tannat", "1150");
const producto4 = new Productos("Chardonnay", "1300");
producto1.sumaIva();
producto2.sumaIva(); 
producto3.sumaIva(); 
producto4.sumaIva();  

function datosUsuario(){
    const nombreUsuario = prompt('Ingresa tu nombre:');
    const apellidoUsuario = prompt('Ingrese su apellido:');
    const emailUsuario = prompt('Ingrese su email:')
    const edadUsuario = parseInt(prompt('Ingresa tu edad:'));
    console.log ('!Bienvenido¡' + " " + nombreUsuario + " " + apellidoUsuario);
    console.log('Su email es ' + emailUsuario);
    console.log('Tu edad es: ' + edadUsuario );


    usuario = new Usuario (nombreUsuario, apellidoUsuario, emailUsuario, edadUsuario);
    console.log(usuario)

}
datosUsuario();

let productosSeleccionados = prompt("Selecciona un producto \n 1 - Malbec \n 2 - Cabernet Sauvignon \n 3 - Malbec Tannat \n 4 - Chardonnay");

switch (productosSeleccionados) {
    case "1":
        console.log('Precio final ' + producto1.precio)
        break;
    case "2":
        console.log('Precio final ' + producto2.precio)
        break;
    case "3":
        console.log('Precio final ' + producto3.precio)
        break;
    case "4":
        console.log('Precio final ' + producto4.precio)
        break;
    default:
    break;
}