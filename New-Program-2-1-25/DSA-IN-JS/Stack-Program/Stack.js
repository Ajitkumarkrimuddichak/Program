// Stack real world example  browser in search "back Button , search button,  forward button" this is stack example 

class Stack { 

    #items = []; // Incluption of private class fields
    constructor() {}

    push(element) {
        this.#items.push(element);
    }

    pop() {
        if (this.#items.length === 0) {
            throw new Error("Stack is empty");
        }
        return this.#items.pop();
    }

    peek() {
        if (this.#items.length === 0) {
            throw new Error("Stack is empty");
        }
        return this.#items[this.#items.length - 1];
    }

    isEmpty() {
        return this.#items.length === 0;
    }

    size() {
        return this.#items.length;
    }
}
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);

console.log("Pop Value = ",stack.pop()); 
console.log("Peek/Top Value = ",stack.peek()); 
console.log("IsEmpty/Stack Value = ", stack.isEmpty()); 
console.log("Items Length Value = ", stack.size()); 

// Direct Pop Value in Stack. This is not recommended. How to stack rule flow " #item , Private "
// console.log(stack.items[0])
// not access. this is private " #item , Private "
// console.log(stack.#items[1])
