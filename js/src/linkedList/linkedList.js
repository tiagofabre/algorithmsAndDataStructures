class NodeList {
    constructor(value) {
        this.nextNode = null;
        this.data = value;
    }

    next() {
        return this.nextNode;
    }
}

let linked = class linkedList {
    constructor() {
        this.pFront = null;
        this.pBack = null;
        this.pSize = 0;
    }

    size() {
        return this.pSize;
    }

    empty() {
        return this.pSize === 0;
    }

    valueAt(index) {
        let node = this.NodeAt(index)
        if(!node)
            return null;
        return node.data;
    }

    NodeAt(index) {
        let currentNode = this.pBack;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next();
            if (!currentNode)
                break;
        }

        // iff value doesn`t exist, return null
        if(!currentNode)
            return null;
        return currentNode;
    }

    pushFront(value) {
        let node = new NodeList(value);
        let oldLastItem = this.pFront;

        if (this.size() == 0) {
            this.pBack = node;
            this.pFront = node;
        } else {
            this.pFront.nextNode = node;
            this.pFront = node;
        }

        this.pSize++;
    }

    popFront() {
        this.pFront =  this.NodeAt(this.pSize-1);
        this.pFront.nextNode = null;
        this.pSize--;
    }

    pushBack(value) {
        let node = new NodeList(value)
        node.nextNode = this.pBack;
        this.pBack = node;
        this.pSize++;
    }

    popBack() {
        this.pBack = this.pBack.nextNode;
        this.pSize--;
    }

    getFront() {
        return this.pFront;
    }

    getBack() {
        return this.pBack;
    }

    insert(index, value) {

        let lastNode = this.NodeAt(index-1);
        let newNode = new NodeList(value);
        
        let currentNode = this.pBack;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next();
        }
        
        newNode.nextNode = currentNode;
        lastNode.nextNode = newNode;
    }

    erase(index) {
        let lastNode = this.NodeAt(index-1);
        let deletionNode = lastNode.next();
        let nextFromDeletion = deletionNode.next();

        lastNode.nextNode = nextFromDeletion;
    }

    valueFromtheEnd(index) {
        let result = this.NodeAt(this.size() - index);
        if(!result)
            return result;
        return result.data;
    }

    reverse() {
        let newList = new linkedList()
        newList.pushBack()

        let currentNode = this.pBack;

        for(let i=0; i < this.size(); i ++ ) {
            newList.pushBack(currentNode.data);
            currentNode = currentNode.next();
        }
    }

    removeByValue(value) {
        let found = false, i = 0;
        let currentNode = this.pBack;
        
        while (!found || i >= this.size()) {
            if (currentNode.data == value) {
                this.erase(i);
                return;
            }
            currentNode = currentNode.next();
            i++;
        }   
    }

}

module.exports = linked;