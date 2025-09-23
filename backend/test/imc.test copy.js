const imc = require('./imc');

test('IMC de 70kg e 1.75m deve ser 22.86', () => {
  expect(imc(70, 1.75)).toBeCloseTo(22.86, 2);
});

test('altura inválida deve lançar erro', () => {
  expect(() => imc(70, 0)).toThrow("Altura inválida");
});