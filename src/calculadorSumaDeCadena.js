function calculadorSumaDeCadena(cadena) {
  var elementos = cadena.split(" ");
  var resultado = 0;
  if (!cadena) {
    return "No se puso nada en la cadena";
  }
  for(var iterador = 0; iterador < elementos.length; iterador++){
    if(!isNaN(elementos[iterador])){
      resultado += parseInt(elementos[iterador]);
    }else{
      return "Elemento no valido " + elementos[iterador];
    }
    
  }
  return resultado;
}

export default calculadorSumaDeCadena;
