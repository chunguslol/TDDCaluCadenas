function calculadorSumaDeCadena(cadena) {
  var el = cadena.split(" ");
  var resul = 0;
  if (!cadena) {
    return "No se puso nada en la cadena";
  }
  for(var i = 0; i < el.length; i++){
    resul = resul + el[i];
  }
  return resul;
}

export default calculadorSumaDeCadena;
