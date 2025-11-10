/* Question :- In the following JavaScript code, analyze the setup of a MongoDB 
collection 'customers'. Highlight any potential issues in document structure and 
suggest improvements.
*/
/*
const customer = {
  name: "Jane Smith",
  address: { street: "123 Main St", city: "Anytown", state: "CA" },
};
db.customers.insertOne(customer);
*/

/* Evaluate the implications of embedding 'address' within 'customer', and 
discuss any considerations for data retrieval.
*/

// Answer :-
const address = {
  _id: ObjectId(),
  street: "123 Main St",
  city: "Anytown",
  state: "CA",
};
db.addresses.insertOne(address);

const customer = {
  name: "Jane Smith",
  addressId: address._id,
};
db.customers.insertOne(customer);
