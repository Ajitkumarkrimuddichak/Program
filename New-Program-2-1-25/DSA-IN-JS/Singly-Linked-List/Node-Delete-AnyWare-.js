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


    // (3) Delete a node at any position in the linked list
    deleteAtAnyPosition(position) {
        if (this.head === null) {
            console.log("List is empty, nothing to delete.");
            return;
        }

        if (position === 0) {
            this.head = this.head.next; // Remove the head node
            return;
        }
        
        let current = this.head;
        let prev = null;
        let index = 0;
        while (current !== null && index < position) {
            prev = current;
            current = current.next;
            index++;
        }
        if (current === null) {
            console.log("Position out of range.");
            return;
        }
        prev.next = current.next; // Bypass the node to delete it
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

console.log("Deleting node at any position :");
Obj.deleteAtAnyPosition(1); // Delete the node at position 2
Obj.traverse(); 
