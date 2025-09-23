const inverterString = require('./inverterString');

test('"casa" deve virar "asac"', () => {
  expect(inverterString("casa")).toMatch(/asac/);
});

test('"abc" deve virar "cba"', () => {
  expect(inverterString("abc")).toMatch(/cba/);
});