const sumOfSequence = (begin, end, step) => {
  if (step === 0) return begin;
  // if (begin === end) return begin;
  // if (begin > end) return 0;

  let sum = 0;
  for (var i = begin; i <= end; i += step) {
    sum += i;
  }
  return sum;

  // return Array.from({ length: Math.floor((end - begin) / step) + 1 }).reduce(
  //   (sum, current, index) => {
  //       let toBeAdded = begin + index*step;
  //       // console.log(sum, toBeAdded);
  //     return sum += toBeAdded;
  //   },
  //   0
  // );
};

module.exports = sumOfSequence;
