const sortAnimal = require("../src/sortAnimal");
// const sortAnimal = require("../src/sortAnimal2");

test("should return null when null is passed", () => {
  expect(sortAnimal(null)).toBe(null);
});

test("should return empty list when empty list is passed", () => {
  expect(sortAnimal([]).length).toBe(0);
});

test("should sort by number of legs", () => {
  var animal = [
    { name: "Pig", numberOfLegs: 4 },
    { name: "Cat", numberOfLegs: 4 },
    { name: "Snake", numberOfLegs: 0 },
    { name: "Dog", numberOfLegs: 4 },
    { name: "Human", numberOfLegs: 2 },
    { name: "Bird", numberOfLegs: 2 }
  ];
  expect(sortAnimal(animal)).toEqual([
    { name: "Snake", numberOfLegs: 0 },
    { name: "Bird", numberOfLegs: 2 },
    { name: "Human", numberOfLegs: 2 },
    { name: "Cat", numberOfLegs: 4 },
    { name: "Dog", numberOfLegs: 4 },
    { name: "Pig", numberOfLegs: 4 }
  ]);
});

test("additional sort", () => {
  var animal = [
    { name: "Centopede", numberOfLegs: 100 },
    { name: "Snail", numberOfLegs: 0 },
    { name: "Lizard", numberOfLegs: 4 },
    { name: "Dog", numberOfLegs: 4 },
    { name: "Human", numberOfLegs: 2 },
    { name: "Bird", numberOfLegs: 2 }
  ];
  expect(sortAnimal(animal)).toEqual([
      { name: "Snail", numberOfLegs: 0 },
      { name: "Bird", numberOfLegs: 2 },
      { name: "Human", numberOfLegs: 2 },
      { name: "Dog", numberOfLegs: 4 },
      { name: "Lizard", numberOfLegs: 4 },
      { name: "Centopede", numberOfLegs: 100 }
  ]);
});

test("random sort", () => {
  var animal = [
    { name: 'Centopede', numberOfLegs: 100 },
  { name: 'Monster0', numberOfLegs: 7 },
  { name: 'Monster1', numberOfLegs: 9 },
  { name: 'Monster2', numberOfLegs: 8 },
  { name: 'Monster3', numberOfLegs: 7 },
  { name: 'Monster4', numberOfLegs: 3 },
  { name: 'Monster5', numberOfLegs: 7 },
  { name: 'Monster6', numberOfLegs: 3 },
  { name: 'Monster7', numberOfLegs: 7 },
  { name: 'Monster8', numberOfLegs: 9 },
  { name: 'Monster9', numberOfLegs: 0 },
  { name: 'Monster10', numberOfLegs: 8 },
  { name: 'Monster11', numberOfLegs: 2 },
  { name: 'Monster12', numberOfLegs: 3 },
  { name: 'Monster13', numberOfLegs: 3 },
  { name: 'Monster14', numberOfLegs: 8 },
  { name: 'Monster15', numberOfLegs: 3 },
  { name: 'Monster16', numberOfLegs: 9 },
  { name: 'Monster17', numberOfLegs: 4 },
  { name: 'Monster18', numberOfLegs: 7 },
  { name: 'Monster19', numberOfLegs: 9 },
  { name: 'Monster20', numberOfLegs: 9 },
  { name: 'Monster21', numberOfLegs: 5 },
  { name: 'Monster22', numberOfLegs: 8 },
  { name: 'Monster23', numberOfLegs: 2 },
  { name: 'Monster24', numberOfLegs: 5 },
  { name: 'Monster25', numberOfLegs: 7 },
  { name: 'Monster26', numberOfLegs: 8 },
  { name: 'Monster27', numberOfLegs: 5 },
  { name: 'Monster28', numberOfLegs: 9 },
  { name: 'Monster29', numberOfLegs: 9 },
  { name: 'Monster30', numberOfLegs: 1 },
  { name: 'Monster31', numberOfLegs: 10 },
  { name: 'Monster32', numberOfLegs: 0 },
  { name: 'Monster33', numberOfLegs: 3 },
  { name: 'Monster34', numberOfLegs: 0 },
  { name: 'Monster35', numberOfLegs: 9 },
  { name: 'Monster36', numberOfLegs: 1 },
  { name: 'Monster37', numberOfLegs: 6 },
  { name: 'Monster38', numberOfLegs: 2 },
  { name: 'Monster39', numberOfLegs: 4 },
  { name: 'Monster40', numberOfLegs: 8 },
  { name: 'Monster41', numberOfLegs: 8 },
  { name: 'Monster42', numberOfLegs: 2 },
  { name: 'Monster43', numberOfLegs: 7 },
  { name: 'Monster44', numberOfLegs: 5 },
  { name: 'Monster45', numberOfLegs: 5 },
  { name: 'Monster46', numberOfLegs: 5 },
  { name: 'Monster47', numberOfLegs: 0 },
  { name: 'Monster48', numberOfLegs: 1 },
  { name: 'Monster49', numberOfLegs: 8 } 
  ];
  expect(sortAnimal(animal)).toEqual([
    { name: 'Monster32', numberOfLegs: 0 },
    { name: 'Monster34', numberOfLegs: 0 },
    { name: 'Monster47', numberOfLegs: 0 },
    { name: 'Monster9', numberOfLegs: 0 },
    { name: 'Monster30', numberOfLegs: 1 },
    { name: 'Monster36', numberOfLegs: 1 },
    { name: 'Monster48', numberOfLegs: 1 },
    { name: 'Monster11', numberOfLegs: 2 },
    { name: 'Monster23', numberOfLegs: 2 },
    { name: 'Monster38', numberOfLegs: 2 },
    { name: 'Monster42', numberOfLegs: 2 },
    { name: 'Monster12', numberOfLegs: 3 },
    { name: 'Monster13', numberOfLegs: 3 },
    { name: 'Monster15', numberOfLegs: 3 },
    { name: 'Monster33', numberOfLegs: 3 },
    { name: 'Monster4', numberOfLegs: 3 },
    { name: 'Monster6', numberOfLegs: 3 },
    { name: 'Monster17', numberOfLegs: 4 },
    { name: 'Monster39', numberOfLegs: 4 },
    { name: 'Monster21', numberOfLegs: 5 },
    { name: 'Monster24', numberOfLegs: 5 },
    { name: 'Monster27', numberOfLegs: 5 },
    { name: 'Monster44', numberOfLegs: 5 },
    { name: 'Monster45', numberOfLegs: 5 },
    { name: 'Monster46', numberOfLegs: 5 },
    { name: 'Monster37', numberOfLegs: 6 },
    { name: 'Monster0', numberOfLegs: 7 },
    { name: 'Monster18', numberOfLegs: 7 },
    { name: 'Monster25', numberOfLegs: 7 },
    { name: 'Monster3', numberOfLegs: 7 },
    { name: 'Monster43', numberOfLegs: 7 },
    { name: 'Monster5', numberOfLegs: 7 },
    { name: 'Monster7', numberOfLegs: 7 },
    { name: 'Monster10', numberOfLegs: 8 },
    { name: 'Monster14', numberOfLegs: 8 },
    { name: 'Monster2', numberOfLegs: 8 },
    { name: 'Monster22', numberOfLegs: 8 },
    { name: 'Monster26', numberOfLegs: 8 },
    { name: 'Monster40', numberOfLegs: 8 },
    { name: 'Monster41', numberOfLegs: 8 },
    { name: 'Monster49', numberOfLegs: 8 },
    { name: 'Monster1', numberOfLegs: 9 },
    { name: 'Monster16', numberOfLegs: 9 },
    { name: 'Monster19', numberOfLegs: 9 },
    { name: 'Monster20', numberOfLegs: 9 },
    { name: 'Monster28', numberOfLegs: 9 },
    { name: 'Monster29', numberOfLegs: 9 },
    { name: 'Monster35', numberOfLegs: 9 },
    { name: 'Monster8', numberOfLegs: 9 },
    { name: 'Monster31', numberOfLegs: 10 },
    { name: 'Centopede', numberOfLegs: 100 }
  ]);
});
