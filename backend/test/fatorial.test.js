const fatorial = require('./fatorial');

test('fatorial de 5 deve ser 120', () => {
  expect(fatorial(5)).toBe(120);
});

test('fatorial de 0 deve ser 1', () => {
  expect(fatorial(0)).toBe(1);
});

test('fatorial negativo deve lançar erro', () => {
  expect(() => fatorial(-3)).toThrow("Número negativo não permitido");
});