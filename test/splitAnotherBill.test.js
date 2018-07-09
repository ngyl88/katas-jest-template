const splitTheBill = require("../src/splitAnotherBill");

it("balance without decimal points", () => {
  expect(
    splitTheBill({
      A: 20,
      B: 15,
      C: 10
    })
  ).toEqual({ A: 5, B: 0, C: -5 });
});

it("balance with 1 decimal point", () => {
  expect(splitTheBill({ A: 40, B: 25, C: 10, D: 153, E: 58 })).toEqual({
    A: -17.2,
    B: -32.2,
    C: -47.2,
    D: 95.8,
    E: 0.8
  });
});

it("balance with 2 decimal points", () => {
  expect(
    splitTheBill({
      "Person 1": 76,
      "Person 2": 43,
      "Person 3": 36,
      "Person 4": 5,
      "Person 5": 98,
      "Person 6": 38,
      "Person 7": 35
    })
  ).toEqual({
    "Person 1": 28.71,
    "Person 2": -4.29,
    "Person 3": -11.29,
    "Person 4": -42.29,
    "Person 5": 50.71,
    "Person 6": -9.29,
    "Person 7": -12.29
  });
});
