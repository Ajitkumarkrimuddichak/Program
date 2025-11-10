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

    // Print value
    printRoot(){
        console.log(this.root)
    }
    
    // Insert values
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

    // Search value
    search(valueToSearch){
        if(!this.root){
            return false;
        }

        let current = this.root;
        while(current){
            if(current.value === valueToSearch){
                return true;
            }else if(valueToSearch < current.value){
                current = current.left;
            }else{
                current = current.right;
            }
        }
        return false;
    }
}
const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(10)
binarySearchTree.insert(5)
binarySearchTree.insert(15)
binarySearchTree.printRoot()

console.log("Search value not available ",binarySearchTree.search(3))
console.log("Search value",binarySearchTree.search(5))