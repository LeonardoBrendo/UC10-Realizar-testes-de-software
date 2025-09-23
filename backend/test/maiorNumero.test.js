const maiorNumero = require('./maiorNumero');

test('maior de [1, 5, 3] deve ser 5', () => {
  expect(maiorNumero([1, 5, 3])).toBe(5);
});

test('array vazio deve lançar erro', () => {
  expect(() => maiorNumero([])).toThrow("Array vazio");
});