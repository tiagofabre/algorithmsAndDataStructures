class TreeNode {

    constructor(_data) {
        this.left = null;
        this.right = null;
        this.data = _data;
        this.parent = null;
    }

    hasTwoChilds() {
        return this.left != null && this.right != null;
    }

    hasOnlyLeftChild() {
        return this.left != null && this.right === null;
    }

    hasOnlyRightChild() {
        return this.right != null && this.left === null;
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

    getParent() {
        return this.parent;
    }
}

module.exports = class BinaryTree {

    constructor() {
        this.root = null;
        this.nodeCount = 0;
    }

    insert(value) {
        let node = new TreeNode(value);
        this.nodeCount++;

        if (!this.root) {
            this.root = node;
        } else {
            let searchResult = this.search(value, this.root);
            if (value < searchResult.getValue()) {
                searchResult.left = node;
            } else {
                searchResult.right = node;
            }
        }
    }

    deleteNode(value) {
        let node = this.search(value, this.root);

        // Object didn't find
        if(node.getValue() != value)
            return -1;

        if (!node.hasTwoChilds()) {
            if ( value < node.parent.getValue()) {
                node.parent.left = null;
            } else {
                node.parent.right = null;
            }
        } else if (node.hasTwoChilds()) {
            // find the next nearest number from value
            let currentNode = node.right;
            
            while(currentNode.left) {
                currentNode = currentNode.left;
            }

            // has right child or has no childs
            if (!currentNode.hasTwoChilds()) {
                if(value < currentNode.parent.getValue()) {
                    currentNode.parent.left = null;
                } else {
                    currentNode.parent.right = null;
                }
            } else if(currentNode.hasOnlyRightChild()) {
                currentNode.parent.right = currentNode.right;
            }

            // replacing
            if ( value < node.parent.getValue()) {
                node.parent.left = currentNode;
            } else {
                node.parent.right = currentNode;
            }
            
            currentNode.left = node.left;
            currentNode.right = node.right;

        } else if (node.hasOnlyLeftChild()) {
            node.parent.left = node.left;
        } else if (node.hasOnlyRightChild()) {
            node.parent.right = node.right;
        }
    } 

    search(value, node) {
        if (!node) {
            return null;
        } else if (value == node.getValue()) {
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

    print (node) {
        if(node != null) {
            console.log(node);
            this.print(node.left);    
            this.print(node.right);
        }

    }
}
