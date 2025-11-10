/* 
Real-World Examples of Binary Search Trees :- 
-  File System Organization
-  Gaming Leaderboards
-  Product Catalog with Prices Filter

Note :- Binary Search Tree (BST)
(i) Each Node Has at Most Two Children
- Every node can have 0, 1, or 2 children.

(ii) Left Child < Parent
- The left subtree of a node contains only nodes with values less than the node’s value.

(iii) Right Child > Parent
- The right subtree of a node contains only nodes with values greater than the node’s value.

(iv) No Duplicates (Standard BST)
- Typically, a BST does not allow duplicate values.
- (Some variations allow duplicates, placing them either always on the left or right.)

(v) Recursive Property
- Every subtree must also be a binary search tree, following the same rules.


*/
// Root node create and Add value 10
// Add/Insert
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value){
        const newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            console.log(this.root)
            return;
        }
    }
}

const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(10)