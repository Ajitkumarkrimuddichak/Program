// Doubly Linked List
class Node {
    constructor(data) {
      this.previous = null;
      this.data = data;
      this.next = null;
    }
}
    
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
      }
    
    append(data) {
        const newNode = new Node(data);
        if (this.head === null) {
          this.head = newNode;
          this.tail = newNode;
        } else {
          const currentLastNode = this.tail;
          currentLastNode.next = newNode;
          newNode.previous = currentLastNode;
          this.tail = newNode;
        }
    }
    
    prepend(data) {
        const newNode = new Node(data);
        if (this.tail === null) {
          this.head = newNode;
          this.tail = newNode;
        } else {
          const currentStartNode = this.head;
          newNode.next = currentStartNode;
          currentStartNode.previous = newNode;
          this.head = newNode;
        }
    }
    
    traverseFromEnd() {
        if (this.tail === null) {
          return;
        }
        let current = this.tail;
        do {
          console.log(current.data);
          current = current.previous;
        } while (current != null);
    }

}
  
const doubly = new DoublyLinkedList()
doubly.append(100)
doubly.append(200)
  
console.log("Node Add End");
doubly.append(300);
doubly.append(400);
doubly.traverseFromEnd();