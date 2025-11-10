// Real-Life Example :- Youtube video, Web Browser History. You visit Page A → then Page B → then Page C. Your history is stored like this [Page A] <--> [Page B] <--> [Page C]

// Create a new Node class for Doubly Linked List
class Node {
  constructor(data) {
    this.previous = null;
    this.data = data;
    this.next = null;
    this.length = 0
  }
}
const newNode = new Node(10)
console.log(newNode)

