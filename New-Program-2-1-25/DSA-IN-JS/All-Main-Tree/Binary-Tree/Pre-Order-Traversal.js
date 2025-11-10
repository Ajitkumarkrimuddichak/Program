/* 
Traversal :- To visit all nodes.
There are 4 types of traversal

(1) Level Order Traversal :- Steps
- Visit nodes at the current level.
- Move to the next level and repeat.
Ex:- 1,2,3,4,5

(2) Pre Order Traversal :- Steps
- Visit the root node.
- Traverse the left subtree.
- Traverse the right subtree.
Ex:- o/p 1,2,4,5,3

(3) In Order Traversal
(4) Post Order Traversal
*/

// Binary Tree
class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(){
        this.root = null;
    }

    // Insert Binary Tree
    insert(value){
       // console.log("Insert Dir", value);
        const newNode = new Node(value);
       // console.log("New Node", newNode);
        if(this.root === null){
            this.root = newNode;
            return;
        }

        // Data Printing and data set
        const queue = [this.root];
        // console.log("Queue", queue);
        while(queue.length > 0){
            const current = queue.shift();
            if(!current.left){
                current.left = newNode;
                // console.log("Left Root", this.root);
                return;
            }else{
                queue.push(current.left);
            }
            if(!current.right){
                current.right = newNode;
                console.log("Right Root", this.root);
                return;
            }else{
                queue.push(current.right);
            }
        }
    }

    // Pre Order Traversal using Recursion
    PreOrderTraversal(node = this.root){
        if(node){
            console.log(node.value);
            this.PreOrderTraversal(node.left);
            this.PreOrderTraversal(node.right);
        }
    }

}
const Obj = new BinaryTree();
Obj.insert(10);
Obj.insert(20);
Obj.insert(30);
Obj.insert(40);
Obj.insert(50);
Obj.insert(60);

console.log("Pre Order Traversal");
Obj.PreOrderTraversal();