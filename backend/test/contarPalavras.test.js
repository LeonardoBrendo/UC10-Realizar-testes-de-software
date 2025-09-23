const contarPalavras = require('./contarPalavras');

test('"Olá mundo" deve ter 2 palavras', () => {
  expect(contarPalavras("Olá mundo")).toBe(2);
});

test('"  teste   de   espaço  " deve ter 3 palavras', () => {
  expect(contarPalavras("  teste   de   espaço  ")).toBe(3);
});