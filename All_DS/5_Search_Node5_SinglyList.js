//(5) Search Node at Singly Link List
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
  treversing() {
    let counter = 0;
    let currentNode = this.head;
    while (counter < this.length) {
      console.log(currentNode);
      currentNode = currentNode.next;
      counter++;
    }
  }

  //start coding// ******** Searching Node Value *******/
  searchNode(data) {
    let result = undefined;
    let lead = this.head;
    let loop = true;
    while (loop) {
      lead = lead.next;
      loop = !!lead;
      if (loop && lead.value === data) {
        loop = false;
        result = lead;
      }
    }
    console.log(result);
  }
  //End coding// ******** Searching Node Value *******/
}
let list = new Node(100);
list.appendNode(200);
list.appendNode(300);
list.treversing();
list.searchNode(300);
//console.log(list);
