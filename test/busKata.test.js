const busKata = require("../src/busKata");

describe("busKata", () => {
  test("[[1,0],[0,1]] should be 0", () => {
    expect(busKata([[1, 0], [0, 1]])).toEqual(0);
  });

  test("[[1,0],[0,1],[10,8],[2,1]] should be 0", () => {
    expect(busKata([[1, 0], [0, 1], [10, 8], [2, 1]])).toEqual(3);
  });

  test("[[1,0],[0,1],[7,9],[3,1]] should be invalid", () => {
    expect(busKata([[1, 0], [0, 1], [7, 9], [3, 1]])).toEqual("invalid input!");
  });

  test("[[1,0],[0,2]] should returns invalid input", () => {
    expect(busKata([[1, 0], [0, 2]])).toEqual("invalid input!");
  });
});
