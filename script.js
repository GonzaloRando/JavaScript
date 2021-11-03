let nombreUsuario = prompt ("Ingrese su nombre");
let apellidoUsuario = prompt ("ingrese su apellido");
let edadUsuario = prompt("Ingrese su edad");
if ((nombreUsuario === "") || (apellidoUsuario === "") || (edadUsuario === "")) {
    console.log ("No ingresaste los valores requeridos");
} else {
    console.log ("Bienvenido");
}