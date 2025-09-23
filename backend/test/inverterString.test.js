const inverterString = require('./inverterString');

test('"casa" deve virar "asac"', () => {
  expect(inverterString("casa")).toBe("asac");
});

test('"abc" deve virar "cba"', () => {
  expect(inverterString("abc")).toBe("cba");
});