const titleCase = require("../src/titleCase");

test("should return every word in title case if no minor word specified", () => {
  expect(titleCase("the quick brown fox")).toEqual("The Quick Brown Fox");
  expect(titleCase("THE QUICK BROWN FOX")).toEqual("The Quick Brown Fox");
});

test("should convert all words in minorWords to lowercase", () => {
  expect(titleCase("the quick brown fox", "quick fox")).toEqual(
    "The quick Brown fox"
  );
});

test("should capitalize first character in string anyway", () => {
  expect(titleCase("a clash of KInGS", "a an the of")).toEqual(
    "A Clash of Kings"
  );
  expect(titleCase("THE WIND IN THE WILLOWS", "The In")).toEqual(
    "The Wind in the Willows"
  );
});

test("should return empty string if empty title is provided", () => {
  expect(titleCase("")).toEqual("");
});