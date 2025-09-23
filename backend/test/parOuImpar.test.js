const parOuImpar = require('./parOuImpar');

test('4 deve ser par', () => {
  expect(parOuImpar(4)).toBe("par");
});

test('7 deve ser ímpar', () => {
  expect(parOuImpar(7)).toBe("ímpar");
});