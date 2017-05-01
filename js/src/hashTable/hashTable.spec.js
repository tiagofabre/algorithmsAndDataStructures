let HashTable = require('./hashTable');

var hashTable = new HashTable();

describe("HashTable usage tests", function () {
    it("Default size should be 0", function () {
        expect(hashTable.size()).toBe(0);
    });

    it("should insert data", function () {
        hashTable.add('a', 1);
        expect(hashTable.size()).toBe(1);
        hashTable.add('b', 2);
        expect(hashTable.size()).toBe(2);
    });

    it("should check the existence of elements", function () {
        expect(hashTable.exists('a')).toBe(true);
        expect(hashTable.exists('b')).toBe(true);
    });

    it("should get the value", function () {
        expect(hashTable.get('a')).toBe(1);
        expect(hashTable.get('b')).toBe(2);
    });

    it("should remove the key", function () {
        hashTable.remove('a');
        expect(hashTable.size()).toBe(1);
        hashTable.remove('b');
        expect(hashTable.size()).toBe(0);
    });

    it("should add a lot of itens", function () {
        for(let i=33; i <= 127; i ++) {
            hashTable.add(String.fromCharCode(i), i)
        }

        expect(hashTable.size()).toBe(95)
    });


})