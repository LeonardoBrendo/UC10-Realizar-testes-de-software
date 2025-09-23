const fibonacci = require('./fibonacci');

test('fibonacci de 6 deve ser 8', () => {
  expect(fibonacci(6)).toBe(8);
});

test('fibonacci de 0 deve ser 0', () => {
  expect(fibonacci(0)).toBe(0);
});

test('número negativo deve lançar erro', () => {
  expect(() => fibonacci(-5)).toThrow("Número negativo não permitido");
});