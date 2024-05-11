function separarCadena(cadena) {
  if (!cadena) {
      return [];
  }
  var delim = ",";
  if (cadena.startsWith("//")) {
      var inicio = cadena.indexOf("[") + 1;
      var fin = cadena.indexOf("]");
      delim = cadena.substring(inicio, fin);
      cadena = cadena.substring(fin + 2); 
  }
  return cadena.split(new RegExp("[,|-]" + "|" + delim));
}

function sumarElementosdeCadena(elementos) {
  var resultado = 0;
  for (var iterador = 0; iterador < elementos.length; iterador++) {
      if (!isNaN(elementos[iterador])) {
          resultado += parseInt(elementos[iterador]);
      } else {
          var sub = elementos[iterador].split(",");
          for (var i = 0; i < sub.length; i++) {
              if (!isNaN(subElementos[i])) {
                  resultado += parseInt(sub[i]);
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
