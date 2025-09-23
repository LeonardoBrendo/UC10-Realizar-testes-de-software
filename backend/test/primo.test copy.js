const primo = require('./primo');

test('7 deve ser primo', () => {
  expect(primo(7)).toBeTruthy();
});

test('10 não deve ser primo', () => {
  expect(primo(10)).toBeFalsy();
});

test('1 não deve ser primo', () => {
  expect(primo(1)).toBeFalsy();
});