module.exports = class HashTable {
    constructor() {
        this.pData = new Array(96)
        this.pSize = 0;
    }

    size() {
        return this.pSize;
    }

    hashFunction(key) {
        let index = key.charCodeAt(0);
        return index - 33;
    }

    add(key, value) {
        let index = this.hashFunction(key);
        this.pData[index] = value
        this.pSize++;
    }

    exists(key) {
        let index = this.hashFunction(key);
        return this.pData[index] != null;
    }

    get(key) {
        let index = this.hashFunction(key);
        return this.pData[index]
    }

    remove(key) {
        let index = this.hashFunction(key);
        this.pData[index] = null
        this.pSize--;
    }
}