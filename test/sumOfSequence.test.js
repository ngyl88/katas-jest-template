const sumOfSequence = require("../src/sumOfSequence");

describe("", () => {
  it("should return 0 when begin is greater than end", () => {
    const sum = sumOfSequence(5, 4, 3);
    expect(sum).toEqual(0);
  });

  it("should return begin value if begin is equals to end", () => {
    const sum = sumOfSequence(5, 5, 3);
    expect(sum).toEqual(5);
  });

  it("should return correct sum if end value is on the step", () => {
    const sum = sumOfSequence(1, 5, 2);
    expect(sum).toEqual(1 + 3 + 5);
  });

  it("should return correct sum if end value is not on the step", () => {
    const sum = sumOfSequence(1, 8, 3);
    expect(sum).toEqual(1 + 4 + 7);
  });

  it("should return begin value if step is 0", () => {
    const sum = sumOfSequence(99, 120, 0);
    expect(sum).toEqual(99);
  });
});
