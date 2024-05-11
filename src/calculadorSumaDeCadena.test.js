import calculadorSumaDeCadena from "./calculadorSumaDeCadena.js";

describe("calculadorSumaDeCadena", () => {
  it("Deberia retornar nada cuando no se ingresa nada en el calculadorSumaDeCadena", () => {
    expect(calculadorSumaDeCadena("")).toEqual(0);
  });
  it("Debería manejar el caso cuando la cadena está vacía", () => {
    expect(calculadorSumaDeCadena("")).toEqual(0);
  });
  
  it("Debería manejar el caso cuando la cadena no contiene números", () => {
    expect(calculadorSumaDeCadena("abc")).toEqual(0);
  });
  
  it("Debería manejar el caso cuando la cadena no contiene números", () => {
    expect(calculadorSumaDeCadena("abc")).toEqual(0);
  });
  it("Debería manejar el caso cuando la cadena contiene un solo número", () => {
    expect(calculadorSumaDeCadena("123")).toEqual(123);
  });
  it("Debería manejar el caso cuando la cadena contiene varios números separados por coma", () => {
    expect(calculadorSumaDeCadena("1,2,3")).toEqual(6);
  });
  it("Debería manejar el caso cuando la cadena contiene varios números separados por guion", () => {
    expect(calculadorSumaDeCadena("1-2-3")).toEqual(6);
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
  it("Debería devolver la suma de los números separados por coma, guion o delimitador personalizado, ignorando números mayores a 1000", () => {
    expect(calculadorSumaDeCadena("2,1001")).toEqual(2);
    expect(calculadorSumaDeCadena("1-2000")).toEqual(1);
    expect(calculadorSumaDeCadena("//[;] 6,1002-3;2000")).toEqual(9);
  });
  it("Debería devolver la suma de los números separados por coma, guion, o delimitador de cualquier longitud", () => {
    expect(calculadorSumaDeCadena("//[***] 1***2***3")).toEqual(6);
    expect(calculadorSumaDeCadena("//[||||] 4||||5||||6")).toEqual(15);
    expect(calculadorSumaDeCadena("7,8-9")).toEqual(24);
    expect(calculadorSumaDeCadena("//[++++] 10++++11++++12")).toEqual(33);
  });
  
});
