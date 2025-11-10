// Node create
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

    //Search Binary Tree create
    search(valueToSearch) {
        if (!this.root) {
          return false;
        }
    
        const queue = [this.root];
        while (queue.length > 0) {
          const current = queue.shift();
          if (current.value === valueToSearch) {
            return true;
          }
          if (current.left) {
            queue.push(current.left);
          }
          if (current.right) {
            queue.push(current.right);
          }
        }
        return false;
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
console.log("Search Binary Tree")
console.log("Find value in Tree", Obj.search(20)); 