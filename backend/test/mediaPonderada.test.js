const mediaPonderada = require('./mediaPonderada');

test('média ponderada de [10, 20] com [1, 2] deve ser aproximadamente 16.67', () => {
  expect(mediaPonderada([10,20],[1,2])).toBeCloseTo(16.67, 2);
});

test('valores e pesos com tamanhos diferentes deve lançar erro', () => {
  expect(() => mediaPonderada([10],[1,2])).toThrow("Tamanhos diferentes");
});