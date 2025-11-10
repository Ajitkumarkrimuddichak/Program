//(1) Singly Link List Progrm
//(1)====Start Insert Nodes ====
// *********** start Node Create *************** /
class Node {
  constructor(data) {
    //console.log(data);
    this.head = {
      value: data,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  // *********** End Node Create ************ /
  appendNode(NodeData) {
    // console.log(NodeData);
    let newNode = {
      value: NodeData,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
}
let list = new Node(100);
list.appendNode(200);
console.log(list);
