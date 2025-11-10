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
    
    search(valueToSearch) {
        if (this.head == null) {
          return null;
        }
        let current = this.head;
        while (current != null) {
          if (current.data === valueToSearch) {
            return current.data; 
          }
          current = current.next;
        }
        return null; 
    }    
}
  
const doubly = new DoublyLinkedList()
doubly.append(100)
doubly.append(200)
doubly.append(400)
doubly.append(500)

const result = doubly.search(500);
console.log("Value is Found =", result);