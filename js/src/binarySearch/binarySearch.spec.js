let binarySearch = require('./binarySearch')

let x = [0, 1, 2, 3, 4, 5, 6];

let z = [ 30, 54, 62, 86, 99, 106, 758, 4322]

describe("BinarySearch", function () {
    it("binary Search test", function () {
        expect(binarySearch(x, 0)).toBe(0);
        expect(binarySearch(x, 6)).toBe(6);
    });

    it("binary Search test", function () {
        expect(binarySearch(z, 99)).toBe(99);
    });

    it("Should return not found", function () {
        expect(binarySearch(z, 909)).toBe(-1);
    });
})
