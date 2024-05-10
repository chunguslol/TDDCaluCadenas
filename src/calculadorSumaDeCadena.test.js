import calculadorSumaDeCadena from "./calculadorSumaDeCadena.js";

describe("calculadorSumaDeCadena", () => {
  it("Deberia retornar nada cuando no se ingresa nada en el calculadorSumaDeCadena", () => {
    expect(calculadorSumaDeCadena("")).toEqual("No se puso nada en la cadena");
  });
  it("Deberia concatenar el resultado todo junto", () => {
    expect(calculadorSumaDeCadena("10 20")).toEqual("01020");
  });
});
