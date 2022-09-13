const mathFile = require("../../db/mathFile");

test("sum:", () => {
  const actualResult = mathFile.add(20, 35);
  const expectResult = 55;
  expect(actualResult).toBe(expectResult);
});

test("subtract", () => {
  const actualResult = mathFile.subtract(50, 20);
  const expectResult = 30;
  expect(actualResult).toBe(expectResult);
});

test("multiply", () => {
  const actualResult = mathFile.multiply(20, 20);
  const expectResult = 400;
  expect(actualResult).toBe(expectResult);
});

test("divide", () => {
  const actualResult = mathFile.divide(100, 20);
  const expectResult = 5;
  expect(actualResult).toBe(expectResult);
});
