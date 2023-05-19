document.getElementById("calcularBtn").addEventListener("click", function(){
var precio = 200;
var cantTicket = 1;
var descuento = 0;
var categoria;

function obtenerCategoria() {
  var eleccion = document.getElementById("categoriaSelect");
  return eleccion.value;
}

categoria = obtenerCategoria();

function calculoDescuento(categoria) {
  if (categoria == "1") {
    descuento = 80;
  } else if (categoria == "2") {
    descuento = 50;
  } else if (categoria == "3") {
    descuento = 15;
  }
  return descuento;
}

descuento = calculoDescuento(categoria);

function obtenerCantidad() {
    var cantidad = document.getElementById("cantidadDeTickets");
    return cantidad.value;
  }

cantTicket = obtenerCantidad();

var precioConDescuento = precio - (precio * (descuento / 100));
var precioFinal = cantTicket * precioConDescuento;

console.log(categoria);
console.log(precioConDescuento);
console.log(descuento);
console.log(precioFinal);
console.log(cantTicket)

document.getElementById("totalPagar").innerHTML=precioFinal
});