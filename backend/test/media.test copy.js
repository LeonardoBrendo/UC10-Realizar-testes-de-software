const media = require('./media');

test('média de [10, 20, 30] deve ser 20', () => {
  expect(media([10, 20, 30])).toBe(20);
});

test('média de [] deve ser 0', () => {
  expect(media([])).toBe(0);
});