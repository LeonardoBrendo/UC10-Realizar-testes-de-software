const palindromo = require('./palindromo');

test('"arara" deve ser palíndromo', () => {
  expect(palindromo("arara")).toBeTruthy();
});

test('"casa" não deve ser palíndromo', () => {
  expect(palindromo("casa")).toBeFalsy();
});