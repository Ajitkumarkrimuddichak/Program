//(Q) Object creation with sum street address?
let address = {
  street: "123 Main St",
  city: "Anytown",
  state: "CA",
  zip: "12345",
  sum: function (a, b) {
    return a + b;
  },
};
console.log("Street Address:", address.street);

// Using the sum method to add two numbers
let result = address.sum(10, 15);
console.log("Sum:", result);
