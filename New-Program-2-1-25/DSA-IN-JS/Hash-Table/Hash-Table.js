/* Real Life Example :-
1. Login System – Username Lookup :- 
- Use case:- Quickly verify if a username exists and fetch the associated user data.
- Key:- Username (e.g, "Ajit_kumar")
- Value:- User info like password, role, email
- Why Hash Table? Fast O(1) lookups to validate login credentials.

2. Shopping Cart – Product Quantity Tracking :- 
- Use case :- Keeping track of how many of each product a user has added to their cart.
- Key:- Product ID or name (e.g, "apple")
- Value:- Quantity (e.g, 3)
- Why Hash Table? Easy updates, fast lookups for quantity per product.

3. Google Serch Engine used , Amazon Key Product Id Search.

*/


class HashTable {

    constructor(size = 50) {
      this.keyMap = new Array(50);
    }

    simpleHash(key, maxValue) {
      let total = 0;
      for (let i = 0; i < key.length; i++) {
        let asciiCode = key[i].charCodeAt(0);
        total = total + asciiCode;
      }
      return total % maxValue;
    }
  
    set(key, value) {
      const hashCode = this.simpleHash(key, this.keyMap.length);
      if (!this.keyMap[hashCode]) {
        this.keyMap[hashCode] = [];
      }
  
      console.log("HashCode =", hashCode);
      this.keyMap[hashCode].push([key, value]);
    }
  
    get(key) {
      const hashCode = this.simpleHash(key, this.keyMap.length);
  
      const result = this.keyMap[hashCode];
      console.log("Result =", result); // Value overwrite  checking
      for (let pair of result) {
        if (pair[0] === key) {
          return pair[1];
        }
      }
      return undefined;
    }
}
  
const hashTable = new HashTable();
hashTable.set("Ajit", "kumar");
console.log("Value of ajit is =", hashTable.get("Ajit"));

hashTable.set("Ram", "Patna");
console.log("Value of Ram is =", hashTable.get("Ram"));

hashTable.set("Ajit", "kumarPatna"); // Value overwrite 
console.log("Value of ajit is =", hashTable.get("Ajit"));