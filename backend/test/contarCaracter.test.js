const contarCaracter = require('./contarCaracter');

test('"banana" tem 3 "a"', () => {
  expect(contarCaracter("banana","a")).toBe(3);
});

test('"teste" tem 0 "x"', () => {
  expect(contarCaracter("teste","x")).toBe(0);
});