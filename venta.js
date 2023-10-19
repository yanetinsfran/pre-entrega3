var elemento = document.getElementById("Venta_de_ropa"); // declaro una variable a la cual le cambio los los atributos
elemento.innerHTML ="Ropa_De_Ciclismo"; // cambio el nombre de mi ID del html venta_ de_ Ropa_ x Ropa_De_Ciclismo
elemento.style.color ="blue"; // le doy color
elemento.style.fontSize="50px"; // tamaño del texto

var remeras= ["remera1","remera2","remara3","remara4" ];
remeras.push("remera5");
console.log(remeras);


const nombre =document.querySelector("#inputnombre")
const apellido =document.querySelector("#inputapellido")
const mail =document.querySelector("#inputmail")
const boton = document.getElementById("boton")

let form = document.getElementById("form")
const divUsuario = document.getElementById("mostrarUsuario")
//consolstorage.clear()

function guardarformulario(e){      /* creo la funcio  donde va tomar los datos del html y lo va mostrar*/
  e.preventDefault();
const nombre = document.querySelector("#inputnombre").value
const apellido = document.querySelector("#inputapellido").value
const mail = document.querySelector("#inputmail").value
const user ={
  nombre:nombre,
  apellido:apellido,
  mail:mail
}
localStorage.setItem("usuario",JSON.stringify(user))
}
//llamo a funcion
from.addEventListener("submit", (e)=>{
guardarformulario(e)
mostrarUsuario()})

function mostrarUsuario(){
const usuario =JSON.parse(localStorage.getItem("usuario"))
console.log(usuario)

divUsuario.innerHTML = `
  <h2>${usuario.nombre}</h2>
  <h2>${usuario.apellido}</h2>
  <h2>${usuario.mail}</h2>
`
}

