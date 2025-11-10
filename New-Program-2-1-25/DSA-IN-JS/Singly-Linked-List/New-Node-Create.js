// Real world Example:-  Music playlist (you go from one song to the next) , 
// :- Product Suggestions, Chat conversations, Social Media Feeds,


// (1) Create new Node.
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
const newNode = new Node(10)
console.log(newNode)
