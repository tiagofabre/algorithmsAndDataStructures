let LinkedList = require('./linkedList');

var list = new LinkedList();

describe("LinkedLits usage tests", function () {
    it("Default size should be 0", function () {
        expect(list.size()).toBe(0);
    });

    it("Shouldbe empty by default", function () {
        expect(list.empty()).toBe(true);
    });

    it("Shoud insert and modify the size of the list", function () {
        list.pushFront(1);
        expect(list.empty()).toBe(false);
        expect(list.size()).toBe(1);
    });

    it("Shoud insert and modify the size of the list", function () {
        list.pushFront(2);
        expect(list.empty()).toBe(false);
        expect(list.size()).toBe(2);
    });

    it("Should popFront", function () {
        expect(list.valueAt(0)).toBe(1);
        expect(list.valueAt(1)).toBe(2);

        list.popFront();

        expect(list.empty()).toBe(false);
        expect(list.size()).toBe(1);
        expect(list.valueAt(0)).toBe(1);
    });

    it("Should show the value at position", function () {
        delete list;
        let list = new LinkedList();
        list.pushFront(1);
        expect(list.size()).toBe(1);
        list.pushFront(2);
        expect(list.size()).toBe(2);
        list.pushFront(3);
        expect(list.size()).toBe(3);
        list.pushFront(4);
        expect(list.size()).toBe(4);


        expect(list.valueAt(0)).toBe(1);
        expect(list.valueAt(1)).toBe(2);
        expect(list.valueAt(2)).toBe(3);
        expect(list.valueAt(3)).toBe(4);
        expect(list.valueAt(4)).toBe(null);

    });

    it("Should pushback", function () {
        delete list;
        let list = new LinkedList();
        list.pushFront(1);
        list.pushFront(2);
        list.pushFront(3);
        list.pushBack(100);
        expect(list.valueAt(0)).toBe(100);

        expect(list.valueAt(1)).toBe(1);
    });

    it("Should popBack", function () {
        delete list;
        let list = new LinkedList();
        list.pushFront(1);
        list.pushFront(2);
        list.pushFront(3);
        list.pushBack(100);
        expect(list.valueAt(0)).toBe(100);
        expect(list.valueAt(1)).toBe(1);
        list.popBack()
        expect(list.valueAt(0)).toBe(1);
    });


    it("Should getFront", function () {
        list.pushBack(100);
        expect(list.valueAt(0)).toBe(100);
        expect(list.getBack().data).toBe(100)
    });

    it("Should getBack", function () {
        list.pushFront(400);
        expect(list.getFront().data).toBe(400);
    });

    it("Should insert", function () {
        delete list;
        let list = new LinkedList();

        list.pushFront(1);
        list.pushFront(2);

        list.insert(1, 300);

        expect(list.getFront().data).toBe(2);
        expect(list.getBack().data).toBe(1);
        expect(list.valueAt(1)).toBe(300);
    });

    it("Should get itens from the end", function () {
        delete list;
        let list = new LinkedList();

        list.pushFront(1);
        list.pushFront(2);
        list.insert(1, 300);

        expect(list.valueFromtheEnd(0)).toBe(2);
        expect(list.valueFromtheEnd(1)).toBe(300);
        expect(list.valueFromtheEnd(2)).toBe(1);
    });

    it("Should remove by value", function () {
        delete list;
        let list = new LinkedList();

        list.pushFront(1);
        list.pushFront(2);
        list.insert(1, 300);

        list.removeByValue(300);

        let currentNode = list.pBack;
        for(let i=0; i < list.size()-1; i++) {
            expect(currentNode.nextNode.data).not.toBe(300);
            currentNode = currentNode.next();
        }
    });
});
