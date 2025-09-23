const primo = require('./primo');

test('7 deve ser primo', () => {
  expect(primo(7)).toBe(true);
});

test('10 não deve ser primo', () => {
  expect(primo(10)).toBe(false);
});

test('1 não deve ser primo', () => {
  expect(primo(1)).toBe(false);
});