const recursiveSum = require('../practices/recursiveSum');

it('test', () => {
    const results = recursiveSum([1,2,3,4,5]);
    expect(results).toEqual(15);
});