const rowSumOddNumbers = require("./index");

test("Test 1", () => {
  expect(rowSumOddNumbers(1)).toBe(1);
});

test("Test 2", () => {
  expect(rowSumOddNumbers(42)).toBe(74088);
});
