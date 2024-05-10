function separarCadena(cadena) {
  if (!cadena) {
      return [];
  }
  return cadena.split(" ");
}

function sumarElementosdeCadena(elementos) {
  var resultado = 0;
  for (var iterador = 0; iterador < elementos.length; iterador++) {
      if (!isNaN(elementos[iterador])) {
          resultado += parseInt(elementos[iterador]);
      } else {
          return "Elemento no valido " + elementos[iterador];
      }
  }
  return resultado;
}

function calculadorSumaDeCadena(cadena) {
  var elementos = separarCadena(cadena);
  if (elementos.length === 0) {
      return "No se puso nada en la cadena";
  }
  return sumarElementosdeCadena(elementos);
}

export default calculadorSumaDeCadena;
