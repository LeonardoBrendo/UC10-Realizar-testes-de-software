const contarVogais = require('./contarVogais');

test('"javascript" tem 3 vogais', () => {
  expect(contarVogais("javascript")).toBe(3);
});

test('"bbb" tem 0 vogais', () => {
  expect(contarVogais("bbb")).toBe(0);
});