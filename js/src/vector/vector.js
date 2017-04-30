module.exports = class Vector {

    constructor(size = 16) {
        this.end = 0;
        this.capacityValue = size;
        this.data = new Array(size);
    }

    size() {
        return this.end;
    }

    capacity() {
        return this.capacityValue;
    }

    isEmpty() {
        return this.end === 0;
    }

    at(index) {
        return this.data[index];
    }

    push(newData) {
        this.checkSize();
        this.data[this.end] = newData;
        this.end++;
    }

    insert(newData, index) {
        this.checkSize();
        for (let i = this.end; i >= index; i--) {
            this.data[i + 1] = this.data[i];
        }
        this.data[index] = newData;
        this.end++;
    }

    prepend(newData) {
        this.insert(newData, 0);
    }

    pop() {
        this.data[this.end] = null;
        this.end--;
        this.checkSize();
    }

    deleteItem(index) {
        for (let i = index; i < this.end; i++) {
            this.data[i] = this.data[i + 1]
        }
        this.data[this.end] = null;
        this.end--;
        this.checkSize();
    }

    remove(value) {
        for(let i=0; i < this.end; i++) {
            if(this.data[i] == value) {
                this.deleteItem(i);
                i--;
            }
        }
    }

    find(value) {
        let result = -1;
        for (let i = 0; i < this.end; i++) {
            if (this.data[i] == value) {
                result = i;
            }
        }
        return result;
    }

    resize(newCapacity) {
        let newArray = new Array(newCapacity);

        if(newCapacity < this.end) {
            this.end = newCapacity;
        }

        for (let i = 0; i < this.end; i++) {
            newArray[i] = this.data[i];
        }
        
        this.capacityValue = newCapacity;
        this.data = newArray;
    }

    checkSize() {
        if (this.end <= this.capacityValue / 4) {
            // half size
            this.resize(Math.floor(this.capacityValue / 2));
        } else if (this.end + 1 >= this.capacityValue) {
            // double size
            this.resize(Math.floor(this.capacityValue * 2))
        }

    }


}