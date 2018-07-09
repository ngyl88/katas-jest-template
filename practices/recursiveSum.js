const recursiveSum = (array) => {
    if(array.length === 1) return array[0];
    return array[0] + recursiveSum(array.slice(1));
    // const someResults = array[0] + recursiveSum(array.slice(1));
    // console.log(array, someResults);
    // return someResults;
};

module.exports = recursiveSum;