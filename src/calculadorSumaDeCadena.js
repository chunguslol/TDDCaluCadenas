function separarCadena(cadena) {
  const coma = ",";
  if (!cadena) {
      return [];
  }
  var delimitador = coma;
  if (cadena.startsWith("//")) {
      var inicioDelimitador = cadena.indexOf("[") + 1;
      var finDelimitador = cadena.indexOf("]");
      delimitador = cadena.substring(inicioDelimitador, finDelimitador);
      cadena = cadena.substring(finDelimitador + 2); 
  }
  return cadena.split(new RegExp("[,|-]" + "|" + delimitador));
}

function sumarElementosdeCadena(elementos) {
  var resultado = 0;
  for (var iterador = 0; iterador < elementos.length; iterador++) {
      if (!isNaN(elementos[iterador])) {
          resultado += parseInt(elementos[iterador]);
      } else {
          var subElementos = elementos[iterador].split(",");
          for (var iterador2 = 0; iterador2 < subElementos.length; iterador2++) {
              if (!isNaN(subElementos[iterador2])) {
                  resultado += parseInt(subElementos[iterador2]);
              }
          }
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
