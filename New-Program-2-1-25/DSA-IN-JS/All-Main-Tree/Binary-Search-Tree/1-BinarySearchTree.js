// Add/Insert value 10,5,15
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
            return;
        }

        const current = this.root;
        if(value === current.value){
          return;
        }else if(value < current.value){
            if(current.left === null){
                current.left = newNode;
            }
        }else{
            if(current.right === null){
                current.right = newNode;
            }
        }
        console.log(this.root)
    }
}
const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(10)
binarySearchTree.insert(5)
binarySearchTree.insert(15)