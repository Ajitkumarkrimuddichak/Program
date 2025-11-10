//(1) 10 different ways to print values from an object in JavaScript ?
/*const person = {
  name: "Ajit kumar",
  job: "MERN Stack Developer",
  city: "Patna",
  email: "ajit@example.com",
  phone: "7890212121",
  hobbies: ["reading", "traveling", "coding"],
  stuent: {
    company: "TCS",
  },
};*/

/*if (person.stuent) {
  console.log(person.stuent.company);
} else {
  console.log("Name not available");
}*/

/* Not :-  JavaScript, there are two ways to access the properties of an object:
1) Dot notation: object.property
2) Bracket notation: object["property"]

for (let key in person) {
  if (key === "job") {
    console.log(person[key]);
  }
}*/

/*const Values = Object.keys(person);
Values.forEach((key) => {
  if (key === "city") {
    console.log(person[key]);
  }
});*/

/*Object.keys(person).forEach((key) => {
  if (key === "city") {
    console.log(person[key]);
  }
});*/

/*Object.entries(person).forEach(([key, value]) => {
  if (key === "email") {
    console.log(`${key} : ${value}`);
  }
});*/

/*const jsonString = JSON.stringify(person);
console.log(jsonString);*/

/*function printValue(key) {
  if (person[key]) {
    console.log(person[key]);
  } else {
    console.log(`${key} not available`);
  }
}
printValue("name");*/

/*Object.keys(person).map((key) => {
  if (key === "hobbies") {
    console.log(person[key]);
  }
});*/

/*
// Define an array of keys to filter from the 'person' object
const keysToFilter = ["job", "city"];
// Get all the keys from the 'person' object
Object.keys(person)
  // Filter the keys to keep only those that are in the 'keysToFilter' array
  .filter((key1) => keysToFilter.includes(key1))
  // Iterate over the filtered keys
  .forEach((key2) => {
    // Print the value of the current key from the 'person' object
    console.log(person[key2]);
  });
*/

/*for (let [key, value] of Object.entries(person)) {
  if (key === "phone") {
    console.log(value);
  }
}*/

/*const clonedObj = { ...person };
//console.log(clonedObj.name);
if (clonedObj.hasOwnProperty("hobbies")) {
  console.log(clonedObj.hobbies);
}
*/
