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
  
  traverseFromStart() {
      if (this.head === null) {
        console.log("List is empty");
        return;
      }
      let current = this.head;
      let index = 0;
      while (current !== null) {
        console.log(`Index: ${index}, Value: ${current.data}`);
        current = current.next;
        index++;
      }
  }
    
}

const doubly = new DoublyLinkedList(10)
doubly.append(100)
doubly.append(200)
doubly.traverseFromStart()
  
console.log("Node Adding Start")
doubly.prepend(50)
doubly.traverseFromStart()
  