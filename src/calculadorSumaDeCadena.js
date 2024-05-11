function obtenerDelimitador(cadena) {
  const delimitadorInicio = "//[";
  const delimitadorFin = "]";
  var delimitador = ",";
  if (cadena.startsWith(delimitadorInicio)) {
      var inicioDelimitador = cadena.indexOf(delimitadorInicio) + delimitadorInicio.length;
      var finDelimitador = cadena.indexOf(delimitadorFin);
      delimitador = cadena.substring(inicioDelimitador, finDelimitador);
  }
  return delimitador;
}

function obtenerCadenaSinDelimitador(cadena) {
  if (cadena.startsWith("//")) {
      var finDelimitador = cadena.indexOf("]") + 2;
      return cadena.substring(finDelimitador); 
  }
  return cadena;
}

function separarCadena(cadena) {
  const delimitador = obtenerDelimitador(cadena);
  const cadenaSinDelimitador = obtenerCadenaSinDelimitador(cadena);
  return cadenaSinDelimitador.split(new RegExp("[,|-]" + "|" + delimitador.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')));
}


function sumarElementosdeCadena(elementos) {
  var resultado = 0;
  for (var iterador = 0; iterador < elementos.length; iterador++) {
      if (!isNaN(elementos[iterador])) {
          if (parseInt(elementos[iterador]) <= 1000) {
              resultado += parseInt(elementos[iterador]);
          }
      } else {
          resultado += sumarSubElementos(elementos[iterador]);
      }
  }
  return resultado;
}

function sumarSubElementos(subElementos) {
  var resultadoSub = 0;
  var subElementosSeparados = subElementos.split(",");
  for (var iterador2 = 0; iterador2 < subElementosSeparados.length; iterador2++) {
      if (parseInt(subElementosSeparados[iterador2]) <= 1000) {
          resultadoSub += parseInt(subElementosSeparados[iterador2]);
      }
  }
  return resultadoSub;
}

function calculadorSumaDeCadena(cadena) {
  var elementos = separarCadena(cadena);
  if (elementos.length === 0) {
      return "No se puso nada en la cadena";
  }
  return sumarElementosdeCadena(elementos);
}

export default calculadorSumaDeCadena;
