//(2) TraverSing  Node
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
  // ***** Start Traversing ******/
  traversing() {
    let counter = 0;
    let currentNode = this.head;
    while (counter < this.length) {
      console.log(currentNode);
      currentNode = currentNode.next;
      counter++;
    }
  }
  // ***** End Traversing ******/
}
let list = new Node(100);
list.appendNode(200);
list.appendNode(300);
list.traversing();
