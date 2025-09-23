const validarEmail = require('./validarEmail');

test('teste@gmail.com deve ser válido', () => {
  expect(validarEmail("teste@gmail.com")).toBe(true);
});

test('email sem @ não deve ser válido', () => {
  expect(validarEmail("teste.com")).toBe(false);
});