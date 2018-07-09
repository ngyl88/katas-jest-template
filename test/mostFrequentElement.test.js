const mostFrequent = require("../src/mostFrequentElement");

it("should return unique most frequent element", () => {
    const testInputArray1 = [1, 1, 2, 3];
    const testInputArray2 = [1, 1, 2, 2, 3];
    const testInputArray3 = [1, 1, '2', '2', 3];
    expect(mostFrequent(testInputArray1)).toEqual(new Set([1]));
    expect(mostFrequent(testInputArray2)).toEqual(new Set([1, 2]));
    expect(mostFrequent(testInputArray3)).toEqual(new Set([1, '2']));
});
it("should return unique most frequent element, according to input types", () => {
    const testInputArray1 = [1, 1, '1', '1', 3];
    expect(mostFrequent(testInputArray1)).toEqual(new Set([1, '1']));
    const testInputArray2 = [1, 1, '1', '1', '1', 3];
    expect(mostFrequent(testInputArray2)).toEqual(new Set(['1']));
    const testInputArray3 = [1, 1, '1', '1', '1', 2, 2, 2, 2, 3];
    expect(mostFrequent(testInputArray3)).toEqual(new Set([2]));
});