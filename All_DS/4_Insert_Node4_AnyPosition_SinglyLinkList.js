//(4) Insert Node At Any Position in Singly Link List
class Node {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  appendNode(NodeData) {
    let newNode = {
      value: NodeData,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  // Start Code****** Insert Node Any Position  *******/
  insertNode(index, value) {
    let counter = 1;
    let currentNode = this.head;
    while (counter > index) {
      counter++;
      currentNode = currentNode.next;
    }
    let nextNode = currentNode.next;
    currentNode.next = {
      value: value,
      next: nextNode,
    };
  }
  // End Code****** Insert Node Any Position  *******/
}
let list = new Node(100);
list.appendNode(200);
list.insertNode(1, 150);
console.log(list);
