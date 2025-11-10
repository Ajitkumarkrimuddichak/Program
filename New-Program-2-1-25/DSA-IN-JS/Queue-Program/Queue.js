// Note :- Queue , how to used in software development. First In First Out (FIFO) principle. 
// :- Real world example, Sale online tickets/booking.

class Queue {
    #items = [];
    
    enqueue(item) {
      this.#items.push(item);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        throw new Error("No items in the queue");
      }
      return this.#items.shift();
    }
  
    peek() {
      if (this.isEmpty()) {
        throw new Error("No items in the queue");
      }
      return this.#items[0];
    }
  
    isEmpty() {
      return this.#items.length === 0;
    }
  
    size() {
      return this.#items.length;
    }
  }
  
const q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);

console.log(q.peek());    // 10
console.log(q.dequeue()); // 10
console.log(q.size());    // 2
console.log(q.isEmpty()); // false