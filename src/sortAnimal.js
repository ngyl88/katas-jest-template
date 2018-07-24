sortAnimal = animals => {
  if (animals === null) return null;
  if (animals.length === 0) return [];

  // return animals.slice().sort((a, b) => {
  //   return a.numberOfLegs === b.numberOfLegs
  //     ? (a.name > b.name ? 1 : -1)
  //     : (a.numberOfLegs - b.numberOfLegs);
  // });

  let sortedAnimals = animals;

  sortedAnimals.sort((a, b) => {
    if (a.numberOfLegs > b.numberOfLegs) {
      return 1;
    } else if (a.numberOfLegs === b.numberOfLegs) {
      return a.name > b.name ? 1 : -1;
    }
    return -1;
  });
  return sortedAnimals;
};

module.exports = sortAnimal;
