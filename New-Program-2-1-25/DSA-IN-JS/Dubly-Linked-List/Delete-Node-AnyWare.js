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
    
    delete(dataToDelete) {
        if (this.head === null) {
          return;
        }
    
        let current = this.head;
        while (current !== null) {
          if (current.data === dataToDelete) {
            if (current === this.head) {
              this.head = current.next;
              this.head.previous = null;
            }
    
            if (current === this.tail) {
              this.tail = current.previous;
              this.tail.next = null;
            }
    
            if (current.previous) {
              current.previous.next = current.next;
            }
    
            if (current.next) {
              current.next.previous = current.previous;
            }
          }
          current = current.next;
        }
    }
  

    OnlyForPrintData() {
      let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
}
  
const doubly = new DoublyLinkedList()
doubly.append(100)
doubly.append(200)
doubly.append(400)
doubly.append(500)
doubly.append(300)

console.log("Deleting Value");
doubly.delete(300);

doubly.OnlyForPrintData();
    