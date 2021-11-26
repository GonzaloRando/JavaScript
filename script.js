let usuario;
let pedido;
let cantidadUsuarios = 1;
const totalUsuarios = [];


class Usuario {
    constructor(datosUsuario, nombre, apellido, email, edad) {
        this.datosUsuario = datosUsuario;
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

const preciosProductos = [producto1, producto2, producto3, producto4];
const vinosEconomicos = preciosProductos.filter( preciosProductos => preciosProductos.precio < 1100);
console.log(vinosEconomicos);

producto1.sumaIva();
producto2.sumaIva(); 
producto3.sumaIva(); 
producto4.sumaIva();  

function infoUsuario(){
    const nombreUsuario = prompt('Ingresa tu nombre:');
    const apellidoUsuario = prompt('Ingrese su apellido:');
    const emailUsuario = prompt('Ingrese su email:')
    const edadUsuario = parseInt(prompt('Ingresa tu edad:'));
    console.log ('!Bienvenido¡' + " " + nombreUsuario + " " + apellidoUsuario);
    console.log('Su email es ' + emailUsuario);
    console.log('Tu edad es: ' + edadUsuario );


    usuario = new Usuario (cantidadUsuarios, nombreUsuario, apellidoUsuario, emailUsuario, edadUsuario);
    console.log(usuario);


    totalUsuarios.push(usuario);
    console.log(totalUsuarios.length);
    cantidadUsuarios++;
}

infoUsuario();


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

for(const saludo of totalUsuarios){
    let contenedor = document.createElement("h2");
    let contenedorTitulo = document.createElement("h3");

    contenedor.innerHTML = `<h2> Hola ${saludo.nombre} ${saludo.apellido}, en que podemos ayudarte?<h2>`;
    contenedorTitulo.innerHTML = `<h3>Nuestros productos son:</h3>`
    document.body.appendChild(contenedor);
    document.body.appendChild(contenedorTitulo);
}

for (const producto of Productos) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `
                            <div style="border: 1px solid;">
                            <p>  Producto: <b>${producto.nombre}</b></p>
                            <b> $ ${producto.precio}</b>
                            <br>
                            <button>COMPRAR</button></div>`;
    document.body.appendChild(contenedor);
    
}