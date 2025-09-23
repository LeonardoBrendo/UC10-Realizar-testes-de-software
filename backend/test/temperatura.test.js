const celsiusParaFahrenheit = require('./temperatura');

test('0°C deve ser 32°F', () => {
  expect(celsiusParaFahrenheit(0)).toBe(32);
});

test('100°C deve ser 212°F', () => {
  expect(celsiusParaFahrenheit(100)).toBe(212);
});