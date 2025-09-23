const palindromo = require('./palindromo');

test('"arara" deve ser palíndromo', () => {
  expect(palindromo("arara")).toBe(true);
});

test('"casa" não deve ser palíndromo', () => {
  expect(palindromo("casa")).toBe(false);
});