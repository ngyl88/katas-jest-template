const mostFrequent = array => {
  const mapFrequency = new Map(); // changed from Object to Map, Object fails with test [1, 1, '1', '1', 3]
  const mostFrequentElement = new Set();
  let maxFrequency = 0;

  array.forEach(key => {
    let valueFrequency = mapFrequency.get(key);
    if (valueFrequency === undefined) {
      // new element, key not found in Map
      mapFrequency.set(key, 1);
    } else {
      valueFrequency += 1; // increase frequency by 1 if found in Map
      mapFrequency.set(key, valueFrequency);
      if (valueFrequency > maxFrequency) {
        maxFrequency = valueFrequency;
        mostFrequentElement.clear(); // clear results so as to fill it with the key with the max frequency
        mostFrequentElement.add(key); // keep track of the max key
      } else if (valueFrequency === maxFrequency) {
        mostFrequentElement.add(key);
      }
    }
  });
  return new Set(mostFrequentElement); // return max key
};
module.exports = mostFrequent;
