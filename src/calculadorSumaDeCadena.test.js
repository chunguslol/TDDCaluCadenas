import calculadorSumaDeCadena from "./calculadorSumaDeCadena.js";

describe("calculadorSumaDeCadena", () => {
  it("Deberia retornar nada cuando no se ingresa nada en el calculadorSumaDeCadena", () => {
    expect(calculadorSumaDeCadena("")).toEqual("No se puso nada en la cadena");
  });
});
