sortAnimal = animals => {
  if (animals === null) return null;
  if (animals.length === 0) return [];

  // const sortedLegs = animals.sort((a, b) => a.numberOfLegs - b.numberOfLegs);
  // return sortedLegs.sort((a, b) => {
  //   if(a.numberOfLegs === b.numberOfLegs && a.name > b.name) return 1;
  //   if(a.numberOfLegs === b.numberOfLegs && a.name < b.name) return -1;
  //   return a.numberOfLegs < b.numberOfLegs ? -1 : 1;
  // });
  return animals.sort((a, b) => {
    if(a.numberOfLegs === b.numberOfLegs && a.name > b.name) return 1;
    if(a.numberOfLegs === b.numberOfLegs && a.name < b.name) return -1;
    return a.numberOfLegs < b.numberOfLegs ? -1 : 1;
  });
};

module.exports = sortAnimal;
