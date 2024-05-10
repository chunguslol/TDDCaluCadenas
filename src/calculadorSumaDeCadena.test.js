import calculadorSumaDeCadena from "./calculadorSumaDeCadena.js";

describe("calculadorSumaDeCadena", () => {
  it("Deberia retornar nada cuando no se ingresa nada en el calculadorSumaDeCadena", () => {
    expect(calculadorSumaDeCadena("")).toEqual("No se puso nada en la cadena");
  });
  it("Deberia devolver la suma de la cadena", () => {
    expect(calculadorSumaDeCadena("10 20")).toEqual(30);
  });
  it("Deberia controlar que ponga un numero como cadena, y en caso de que no lo ponga muestre Elemento no valido + el elemento que puso incorrectamente ", () => {
    expect(calculadorSumaDeCadena("10 20 B")).toEqual("Elemento no valido B");
  });

});
