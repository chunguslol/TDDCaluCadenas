function calculadorSumaDeCadena(cadena) {
  var elementos = cadena.split(" ");
  var resultado = 0;
  if (!cadena) {
    return "No se puso nada en la cadena";
  }
  for(var iterador = 0; iterador < elementos.length; iterador++){
    resultado += parseInt(elementos[iterador]);
  }
  return resultado;
}

export default calculadorSumaDeCadena;
