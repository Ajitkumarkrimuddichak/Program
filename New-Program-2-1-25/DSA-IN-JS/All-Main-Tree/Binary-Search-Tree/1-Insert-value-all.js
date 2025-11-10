// Add/Insert value 10,5,15,3,7,20,12
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

    printRoot(){
        console.log(this.root)
    }

    insert(value){
        const newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return;
        }

        let current = this.root;
        while (true){
            if(value === current.value){
            return;
            }else if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                }else{
                    current = current.left;
                }
            }else{
                if(current.right === null){
                    current.right = newNode;
                }else{
                    current = current.right;
                }
            }
        }
    }
}
const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(10)
binarySearchTree.insert(5)
binarySearchTree.insert(15)
binarySearchTree.insert(3)
binarySearchTree.insert(7)
binarySearchTree.insert(20)
binarySearchTree.insert(12)
binarySearchTree.printRoot()