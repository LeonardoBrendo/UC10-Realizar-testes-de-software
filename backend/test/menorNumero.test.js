const menorNumero = require('./menorNumero');

test('menor de [1, 5, 3] deve ser 1', () => {
  expect(menorNumero([1, 5, 3])).toBe(1);
});

test('array vazio deve lançar erro', () => {
  expect(() => menorNumero([])).toThrow("Array vazio");
});