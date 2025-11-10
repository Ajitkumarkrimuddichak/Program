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
    
    insertAt(position, data) {
        const newNode = new Node(data);
        if (position <= 0) {
            this.prepend(data);
            return;
        }
        let current = this.head;
        let index = 0;

        while (current !== null && index < position) {
            current = current.next;
            index++;
        }
        if (current === null) {
            this.append(data); // If position is beyond list length, add at the end
            return;
        }

        // Insert before current
        const prevNode = current.previous;
        if (prevNode) {
            prevNode.next = newNode;
            newNode.previous = prevNode;
        } else {
            this.head = newNode;
        }
        newNode.next = current;
        current.previous = newNode;
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
  
console.log("Inserting at any position in the list");
doubly.insertAt(2, 400);

console.log("Printing all data:");
doubly.OnlyForPrintData();