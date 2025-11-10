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

    // LevelOrder Traversal
    levelOrder(){
        const result = [];
        if(!this.root){
            return result;
        }

        const queue = [this.root];
        while(queue.length > 0){
            const current = queue.shift();
            result.push(current.value);
            if(current.left){
                queue.push(current.left);
            }
            if(current.right){
                queue.push(current.right)
            }
        }
        return result;
    }
}
const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(10)
binarySearchTree.insert(5)
binarySearchTree.insert(15)
binarySearchTree.printRoot()

console.log("Level Order",binarySearchTree.levelOrder())