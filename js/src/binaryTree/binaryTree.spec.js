let BinaryTree = require('./binaryTree')

let binaryTree = new BinaryTree();


// describe("BinaryTree usage tests", function () {
//     it("insertion", function () { 
        binaryTree.insert(4)
        binaryTree.insert(8)
        binaryTree.insert(10)
        binaryTree.insert(5)
        binaryTree.insert(6)
        binaryTree.insert(7)
        binaryTree.insert(8)
        binaryTree.insert(9)
        binaryTree.insert(10)
        binaryTree.insert(11)

        binaryTree.insert(80)
        binaryTree.insert(79)
        binaryTree.insert(78)
        binaryTree.insert(77)

        binaryTree.insert(3)
        binaryTree.insert(36)
        binaryTree.insert(12)

        binaryTree.search(4)

        binaryTree.search(67)

        binaryTree.search(-1)

        binaryTree.deleteNode(4)
        binaryTree.deleteNode(80)
//     })
// })