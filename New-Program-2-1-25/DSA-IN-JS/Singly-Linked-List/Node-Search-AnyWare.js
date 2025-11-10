// (1) ****************** Singly Linked List Program  **************************

// Node class representing an individual element in the linked list
class Node {
    constructor(data) {
        this.data = data; // Store data in the node
        this.next = null; // Pointer to the next node (initially null)
    }
}

// LinkedList class that manages nodes and operations
class LinkedList {
    constructor() {
        this.head = null; // Head pointer to the first node in the list
    }

    // (2) Insert a node at the end of the linked list
    insertAtEnd(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode; // If list is empty, set new node as head
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next; // Traverse to the last node
            }
            current.next = newNode; // Append new node at the end
        }
    }

    // (3) Search for a node containing a specific value
    searchNode(value) {
        let current = this.head;
        let index = 0;

        while (current !== null) {
            if (current.data === value) {
                console.log(`Value ${value} found at position ${index}`);
                return index;
            }
            current = current.next;
            index++;
        }
        console.log(`Value ${value} not found in the list.`);
        return -1;
    }

    // (4) Print all nodes in the linked list
    traverse() {
        if (this.head === null) {
            console.log("The list is empty.");
            return;
        }
        let current = this.head;
        while (current !== null) {
            console.log(current.data); // Print node data
            current = current.next;
        }
    }
}

// (5) Create an instance of LinkedList and perform operations
const Obj = new LinkedList();
Obj.insertAtEnd(10); 
Obj.insertAtEnd(12); 
Obj.traverse(); 

console.log("Searching for value 12:");
Obj.searchNode(12); // Search for value 12

