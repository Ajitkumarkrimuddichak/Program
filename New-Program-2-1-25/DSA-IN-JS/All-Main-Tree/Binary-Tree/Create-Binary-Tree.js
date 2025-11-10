// Real-life example of a binary tree :- file directory structure.
/* 
Node => Binary Tree Rules :- 
- Each node has at most two children.(left and right)
- Nodes are added based on availability of children.
---> Start at the root.
---> Add nodes from left to right, level by level.

Ex:- 10,20,30,40,50
*/

// Node create
class Node{
    constructor(value){
        this.value = value;
        this.left = null; 
        this.right = null;
    }
}

// Create Binary Tree 
class BinaryTree {
    constructor(){
        this.root = null;
    }

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
}
const Obj = new BinaryTree();
Obj.insert(10);
Obj.insert(20);
Obj.insert(30);
Obj.insert(40);
Obj.insert(50);
Obj.insert(60);
Obj.insert(70);
