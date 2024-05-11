import calculadorSumaDeCadena from "./calculadorSumaDeCadena.js";

describe("calculadorSumaDeCadena", () => {
  it("Deberia retornar nada cuando no se ingresa nada en el calculadorSumaDeCadena", () => {
    expect(calculadorSumaDeCadena("")).toEqual("No se puso nada en la cadena");
  });
  it("Deberia devolver la suma de la cadena y deberia reconocer al poner con , la cadena", () => {
    expect(calculadorSumaDeCadena("10,20")).toEqual(30);
  });
  it("Deberia devolver la suma de la cadena y deberia reconocer al poner con - la cadena", () => {
    expect(calculadorSumaDeCadena("10-20")).toEqual(30);
  });
  it("Debería devolver la suma de los números separados por coma, guion o delimitador personalizado", () => {
    expect(calculadorSumaDeCadena("//[;] 6,3-2;1")).toEqual(12);
  });
  
  
});
