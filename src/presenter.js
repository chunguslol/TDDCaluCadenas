import {calculadorSumaDeCadena,sumarSubElementos} from './calculadorSumaDeCadena.js';

document.getElementById("sumar-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var cadena = document.getElementById("cadena").value;
  var resultado = calculadorSumaDeCadena(cadena);
  document.getElementById("resultado-div").innerText = "Resultado: " + resultado;
});
