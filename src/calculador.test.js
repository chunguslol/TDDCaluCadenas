import calculador from "./calculador.js";

describe("calculador", () => {
  it("Deberia retornar nada cuando no se ingresa nada en el calcuadorCadena", () => {
    expect(calculador("")).toEqual("No se puso nada en la cadena");
  });
});
