const removerDuplicados = require('./removerDuplicados');

test('remover duplicados de [1,1,2,3,3] deve ser [1,2,3]', () => {
  expect(removerDuplicados([1,1,2,3,3])).toEqual([1,2,3]);
});

test('array resultante deve ter tamanho 3', () => {
  expect(removerDuplicados([1,1,2,3,3])).toHaveLength(3);
});