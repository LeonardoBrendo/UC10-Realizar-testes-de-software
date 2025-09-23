const capitalizar = require('./capitalizar');

test('"javascript" deve virar "Javascript"', () => {
  expect(capitalizar("javascript")).toBe("Javascript");
});

test('"HELLO" deve virar "Hello"', () => {
  expect(capitalizar("HELLO")).toBe("Hbllo");
});