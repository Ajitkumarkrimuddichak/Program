//(1) Dubly Link List Program
// Create Node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}
class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      previous: null,
    };
    this.length = 1;
    this.tail = this.head;
  }
  printList() {
    let array = [];
    let currentList = this.head;
    while (currentList !== null) {
      array.push(currentList.value);
      currentList = currentList.next;
    }
    console.log(array.join(" <--> "));
  }

  //Start// **** Insert Node at end of The List *****/
  InsertListNode(value) {
    let newNode = new Node(value);

    this.tail.next = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;

    this.length++;
    this.printList();
  }
  //End// **** Insert Node at end of The List *****/

  //start // ***** Insert Node at Start of the List *******/
  InsertStartNode(value) {
    let newNode = new Node(value);

    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;

    this.length++;
    this.printList();
  }
  //End // ***** Insert Node at Start of the List *******/

  //Start // ***** Insert Node at AnyWare/Given Index of the List *******/
  InsertGiveNode(index, value) {
    if (!Number.isInteger(index) || index < 0 || index > this.lengthv + 1) {
      console.log(`Invalid Index. Current Length is ${this.length}`);
      return this;
    }
    if (index === 0) {
      this.InsertStartNode(value);
      return this;
    }
    if (index === this.length) {
      this.InsertListNode(value);
      return this;
    }

    let newNode = new Node(value);
    let previousNode = this.head;

    for (let k = 0; k < index - 1; k++) {
      previousNode = previousNode.next;
    }

    let nextNode = previousNode.next;

    newNode.next = nextNode;
    previousNode.next = newNode;
    newNode.previous = newNode;

    this.length++;
    this.printList();
  }
  //End // ***** Insert Node at AnyWare/Given Index of the List *******/
}

let list = new DoublyLinkedList(10);
list.InsertListNode(15);
list.InsertListNode(20);
list.InsertStartNode(5);
list.InsertGiveNode(0, 99);
list.InsertGiveNode(5, 999);
