// (1) ****************** Singly Linked List Program  **************************
class Node {
    constructor(data) {
      this.data = data; // this is a property
      this.next = null;
    }
  }
  // Full class create in linked list 
  class LinkedList {
    constructor(){
      this.head = null;
    }

    // insert End value
    insertAtEnd(data){
      const newNode = new Node(data);
      if(this.head === null){
        this.head = newNode
      }else{
        let current = this.head;
        while(current.next !== null){
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    //Insert Any Value
    insertAtAnyPosition(data, position) {
      const newNode = new Node(data);
  
      if (position === 0) {
        newNode.next = this.head;
        this.head = newNode;
        return;
      }
  
      let current = this.head;
      let prev = null;
      let index = 0;
  
      while (current !== null && index < position) {
        prev = current;
        current = current.next;
        index++;
      }
  
      if (prev !== null) {
        prev.next = newNode;
        newNode.next = current;
      }
    }
  
    // Data print
    traverse(){
      if(this.head === null){
        return;
      }
      let current = this.head;
      while(current !== null){ 
        console.log(current.data); 
        current = current.next;
      }
    }
  
  }
  const Obj = new LinkedList()
  Obj.insertAtEnd(10)
  Obj.insertAtEnd(12)
  Obj.insertAtAnyPosition(200, 2);
  Obj.insertAtEnd(15)
  Obj.traverse();