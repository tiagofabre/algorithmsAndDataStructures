let BinaryTree = require('./binarySearchTree')

let binaryTree = new BinaryTree();


describe("BinaryTree usage tests", function () {
    it("insertion", function () { 
        binaryTree.insert(4)
        expect(binaryTree.nodeCount).toBe(1);
        binaryTree.insert(8)
        expect(binaryTree.nodeCount).toBe(2);
        binaryTree.insert(10)
        binaryTree.insert(5)
        binaryTree.insert(6)
        binaryTree.insert(7)
        binaryTree.insert(8)
        expect(binaryTree.nodeCount).toBe(7);
        binaryTree.insert(9)
        binaryTree.insert(10)
        binaryTree.insert(11)

        expect(binaryTree.nodeCount).toBe(10);
        binaryTree.insert(80)
        binaryTree.insert(79)
        binaryTree.insert(78)
        binaryTree.insert(77)

        expect(binaryTree.nodeCount).toBe(14);
        binaryTree.insert(3)
        binaryTree.insert(36)
        binaryTree.insert(12)

        expect(binaryTree.nodeCount).toBe(17);


        binaryTree.print(binaryTree.root);
        // binaryTree.deleteNode(36)

        // expect(binaryTree.nodeCount).toBe(16);
        
        // console.log(node);

        // expect(node.getValue()).toBe(4)

        // binaryTree.search(67)

        // binaryTree.search(-1)

        // binaryTree.deleteNode(4)
        // binaryTree.deleteNode(80)
    })
})