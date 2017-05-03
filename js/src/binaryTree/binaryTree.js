class TreeNode {

    constructor(_data) {
        this.left = null;
        this.right = null;
        this.data = _data;
    }

    getLeftNode() {
        return this.left;
    }

    getRightNode() {
        return this.right;
    }

    getValue() {
        return this.data;
    }
}

module.exports = class BinaryTree {

    constructor() {
        this.root = null;
    }

    insert(value) {
        let node = new TreeNode(value);

        if (!this.root) {
            this.root = node;
        } else {
            let searchResult = this.search(value, this.root);
            console.log(searchResult);
            if (value < searchResult.getValue()) {
                searchResult.left = node;
            } else {
                searchResult.right = node;
            }
        }
    }

    search(value, node) {

        if (value == node.getValue()) {
            return node;
        } else if (value < node.getValue()) {
            if (node.getLeftNode() == null)
                return node;
            else
                return this.search(value, node.getLeftNode());
        } else {
            if (node.getRightNode() == null)
                return node;
            else 
                return this.search(value, node.getRightNode());
        }
    }
}
