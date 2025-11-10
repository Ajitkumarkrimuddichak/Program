/* (1). How can you find and replace all occurrences of a substring in a string without using the built-in
replace() method? Please also write the associated unit test

Find all string replacemented that matches with the subset of the words
Replace that occurence with the second parameter 
*/

/*
function ReplaceStr(Str, OldStr, NewStr) {
  let NewStrVal = "";
  for (let i = 0; i < Str.length; ) {
    // Check if the substring from the current index `i` up to `i + OldStr.length`, matches `OldStr`
    if (Str.substring(i, i + OldStr.length) === OldStr) {
      NewStrVal += NewStr;
      i += OldStr.length; // Move the index `i` forward by the length of `OldStr`, to skip past the matched substring
    } else {
      NewStrVal += Str[i]; // If no match is found, add the current character at `Str[i]` to `NewStrVal`
      i++; // Move to the next character in the string by incrementing `i`
    }
  }
  return NewStrVal;
}
// Unit Tests Function
function RunTestsFunction() {
  console.log(
    "Test 1:",
    ReplaceStr("my name ajit", "name", "kumar") === "my kumar ajit"
      ? "Passed"
      : "Failed"
  );
  console.log(
    "Test 2:",
    ReplaceStr("hello world", "world", "universe") === "hello universe"
      ? "Passed"
      : "Failed"
  );
  console.log(
    "Test 3:",
    ReplaceStr("aaa", "a", "b") === "bbb" ? "Passed" : "Failed"
  );
  console.log(
    "Test 4:",
    ReplaceStr("apple pie apple", "apple", "orange") === "orange pie orange"
      ? "Passed"
      : "Failed"
  );
  console.log(
    "Test 5:",
    ReplaceStr("", "name", "abcd") === "" ? "Passed" : "Failed"
  );
  console.log(
    "Test 6:",
    ReplaceStr("my name is ajit", "xyz", "abcd") === "my name is ajit"
      ? "Passed"
      : "Failed"
  );
  console.log(
    "Test 7:",
    ReplaceStr("aaa", "aa", "b") === "ba" ? "Passed" : "Failed"
  );
}
RunTestsFunction(); // Function call
*/

//(2) Find the Given Output
/*const Arr = [1, 2, 3, "02", "03", 2, 1, "05", "04"];
const RemoveDuplicateVal = [...new Set(Arr)];
let EmpArr = [];
for (let i = 0; i < RemoveDuplicateVal.length; i++) {
  if (
    RemoveDuplicateVal[i] !== 5 &&
    RemoveDuplicateVal[i] !== "04" &&
    RemoveDuplicateVal[i] !== "02"
  ) {
    EmpArr.push(RemoveDuplicateVal[i]);
  }
}
console.log(EmpArr);*/

//(3) Find the Given Output
/*const PrintTopThreesLargestVal = (arr) => {
  arr.sort((a, b) => b - a);
  let StoreThreesLargeVal = arr.slice(0, 3);
  let Res =
    StoreThreesLargeVal[0] * StoreThreesLargeVal[1] * StoreThreesLargeVal[2];
  console.log("Threes Largest Value Multiple =", Res);
};
const ArrVal = [10, 20, 9, 8, -15, 1, 2, 5, "05"];
const RemoveDuplactVal = [...new Set(ArrVal)];
PrintTopThreesLargestVal(RemoveDuplactVal);
*/

//(4) Find the Armstrong Number find 1 to 1000
/*for (let i = 1; i <= 1000; i++) {
  let sum = 0;
  let x = i;
  while (x !== 0) {
    let Res = x % 10;
    sum = sum + Res * Res * Res;
    x = (x - Res) / 10;
  }
  if (sum === i) {
    console.log(`Totals Armstrong Number = ${i}`);
  }
}*/

//(5) Letter Game Progrma
/*function GamingLetter() {
  // const inputVal = prompt("Enter the Number");
  const inputVal = 3;
  const numVal = parseInt(inputVal, 10);

  if (isNaN(numVal)) {
    alert("Please enter a valid number");
    return;
  }

  if (numVal <= 0) {
    alert("Enter number greater than zero");
    return;
  } else if (numVal > 6) {
    alert("Enter a number less than or equal to six");
    return;
  }
  const arr = ["f", "l", "a", "m", "e", "s"];
  let indexVal = 0;

  while (arr.length > 1) {
    indexVal = (indexVal + numVal - 1) % arr.length;
    arr.splice(indexVal, 1);
  }
  console.log(arr[0]);
}
GamingLetter();
*/

//(6) What is anagram and program ?
// Ex:- cat => atc , tac , act. yes, anagram.  Hello => Heloo , No anagram

// Anagram checking only for one word String ?
/*function AnagramFind(Str, WordSearch) {
  if (Str.length !== WordSearch.length) {
    return false;
  }

  const EmpStr = [];
  for (let i = 0; i < Str.length; i++) {
    const char1 = Str[i];
    const char2 = WordSearch[i];
    EmpStr[char1] = (EmpStr[char1] || 0) + 1;
    EmpStr[char2] = (EmpStr[char2] || 0) - 1;
  }
  for (let char in EmpStr) {
    if (EmpStr[char] !== 0) {
      return false;
    }
  }
  return true;
}
const GivenStr = "anagram";
const SearchStr = "anagram";
console.log(AnagramFind(GivenStr, SearchStr));*/

//(or) Anagram checking multiple words String ?
/*function AnagramCheck(text, word) {
  let x = 0;
  const sortedWord = word.split("").sort().join("");
  for (let i = 0; i <= text.length - word.length; i++) {
    let substring = text.substring(i, i + word.length);
    if (sortedWord === substring.split("").sort().join("")) {
      x++;
    }
  }
  return `${word} was found ${x} times`;
}
let GivenStr = "anagram aaangrm amanagr ajit";
let SearchStr = "anagram";
let FinalRes = AnagramCheck(GivenStr, SearchStr);
console.log(`Searching is = ${FinalRes}`);
*/

//(7) Find the union of two arrays in JS ?
/*function UnionFind(arr1, arr2) {
  let EmpArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!EmpArr.includes(arr1[i])) {
      EmpArr.push(arr1[i]);
    }
  }
  for (let j = 0; j < arr2.length; j++) {
    if (!EmpArr.includes(arr2[j])) {
      EmpArr.push(arr2[j]);
    }
  }
  return EmpArr;
}
const Arr1 = [9, 8, 6, 5, 10];
const Arr2 = [5, 8, 9, 11];
const Res = UnionFind(Arr1, Arr2);
console.log("Union of the Given Value = ", Res);
*/

//(8) How do you total all of the matching integer elements in an array ?
/*function sumMatchingIntegers(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i])) {
      total = total + arr[i];
    }
  }
  return total;
}
const Res = sumMatchingIntegers([1, 2, "3", 4, 5, "ajit", true, 6]);
console.log(Res);*/

//(9) How do you find the count for the occurrence of a particular character in a String ?
/*function countCharacter(str, target) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === target) {
      count++;
    }
  }
  return count;
}
const Res = countCharacter("hello ajitkumar", "a");
console.log(Res);*/

//(10) How do you find the non-matching characters in a String ?
/*function FindNonMatchingChar(str, target) {
  let nonMatchChar = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== target) {
      nonMatchChar += str[i];
    }
  }
  return nonMatchChar;
}
const Res = FindNonMatchingChar("hello Ajit", "o");
console.log(Res);*/

//(11) How do you calculate the number of numerical digits in a String ?
/*function countDigits(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "0" && str[i] <= "9") {
      count++;
    }
  }
  return count;
}
const Res = countDigits("Hello124, this is 456 ajit");
console.log(Res);*/

//(or)
/*function countString(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if ((str[i] >= "a" && str[i] <= "z") || (str[i] >= "A" && str[i] <= "Z")) {
      count++;
    }
  }
  return count;
}
const Res = countString("Hello124, this is 456 ajit");
console.log(Res);*/

//(11) Create a function that will return in an array the first "p" prime number then "n" in js ?
/*function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
    return true;
  }
}

function GetPrimesGreaterThen(n, p) {
  const primes = [];
  let currenNumber = n + 1;
  while (primes.length < p) {
    if (isPrime(currenNumber)) {
      primes.push(currenNumber);
    }
    currenNumber++;
  }
  return primes;
}
console.log(GetPrimesGreaterThen(10, 5));
*/

//(12) Rotate an Array to the left/Right same output I Position ?
/*function RotateArrayLeft(arr, I) {
  const n = arr.length;
  I = I % n;
  const result = new Array(n);
  for (let i = 0; i < n; i++) {
    result[i] = arr[(i + I) % n];
  }
  return result;
}
const Arr = [1, 2, 3, 4, 5, 6];
const Res = RotateArrayLeft(Arr, 3);
console.log(Res);*/

//(13) Create a function that will receive two array of numbers as arguments and returnan array
// composed of all the numbers that are either in the first array or second array but not in both using
/*function symmetricDifferenc(arr1, arr2) {
  let resuIt = [];
  for (let i = 0; i < arr1.length; i++) {
    let foundInArr2 = false;
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        foundInArr2 = true;
        break;
      }
    }
    if (!foundInArr2) {
      resuIt.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    let foundInArr1 = false;
    for (let j = 0; j < arr1.length; j++) {
      if (arr2[i] === arr1[j]) {
        foundInArr1 = true;
        break;
      }
    }
    if (!foundInArr1) {
      resuIt.push(arr2[i]);
    }
  }
  return resuIt;
}
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
const Res = symmetricDifferenc(array1, array2);
console.log(Res);*/

//(14) Create a fumction that will receive two arrays and will return an array with
// elements that are in the first array but not in the second using js.
/*function Difference(array1, array2) {
  let result = [];
  for (let i = 0; i < array1.length; i++) {
    let found = false;
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      result.push(array1[i]);
    }
  }
  return result;
}
const Arr1 = [1, 2, 3, 4, 5];
const Arr2 = [4, 5, 6, 7, 8];
const Res = Difference(Arr1, Arr2);
console.log(Res);
*/

//(15) Reverse a Number
/*let Numb = 54321;
let ReVal = 0;
while (Numb > 0) {
  let Dig = Numb % 10;
  ReVal = ReVal * 10 + Dig;
  Numb = parseInt(Numb / 10);
}
console.log("Reverse a Number =", ReVal);
*/

//(16)
/*
const DiscountType = {
  Standard: "Standard",
  Seasonal: "Seasonal",
  Weight: "Weight",
};

function getDiscountedPrice(cartWeight, totalPrice, discountType) {
  let discount = 0.0;

  switch (discountType) {
    case DiscountType.Standard:
      discount = 0.1; // 10% discount for standard
      break;
    case DiscountType.Seasonal:
      discount = 0.2; // 20% discount for seasonal
      break;
    case DiscountType.Weight:
      if (cartWeight > 10) {
        discount = 0.15; // 15% discount if weight is over 10 units
      }
      break;
    default:
      discount = 0.0; // no discount if the type is unknown
  }

  const discountedPrice = totalPrice - totalPrice * discount;
  return discountedPrice;
}
console.log(getDiscountedPrice(12, 100, DiscountType.Weight)); // Expected output: 85
console.log(getDiscountedPrice(8, 100, DiscountType.Weight)); // Expected output: 100
console.log(getDiscountedPrice(10, 100, DiscountType.Standard)); // Expected output: 90
console.log(getDiscountedPrice(10, 100, DiscountType.Seasonal)); // Expected output: 80
console.log(getDiscountedPrice(10, 100, "UnknownType")); // Expected output: 100
*/

// (17) image question
/*function calculateFinalSpeed(initialSpeed, inclinations) {
  let currentSpeed = initialSpeed;
  for (let i = 0; i < inclinations.length; i++) {
    currentSpeed += inclinations[i];
    if (currentSpeed <= 0) {
      return 0;
    }
  }
  return currentSpeed;
}
console.log(calculateFinalSpeed(60, [0, 30, 0, -45, 0]));
console.log(calculateFinalSpeed(50, [10, -20, -30]));
console.log(calculateFinalSpeed(40, [10, -20, -30, -10]));
console.log(calculateFinalSpeed(70, [-10, -30, -40]));
console.log(calculateFinalSpeed(100, [0, 20, 30]));
*/

//(18)  Add an element to end of Array without Method Used and no Duplicate value save
/*function AddArrElementEnd(val, ElemVal) {
  if (val.indexOf(ElemVal) === -1) {
    let Len = val.length;
    let EmpArr = [];
    for (let i = 0; i < Len; i++) {
      EmpArr[i] = val[i];
    }
    EmpArr[Len] = ElemVal;
    return EmpArr;
  }
  return val;
}
const Arr = [1, 2, 3, 4];
let Res = AddArrElementEnd(Arr, 4);
console.log("Add new Element in Last Array =", Res);*/

//(19) vvvi Express Server create app.listen() same logic used
/*
function parentFunction() {
  let name = "Ajit";

  parentFunction.method1 = function () {
    console.log(`Inside method1: ${name}`);
    return "method1 return value";
  };
  return { method1: parentFunction.method1 }; // Returning method1 directly in the object
}
const app = parentFunction().method1();
console.log(app);
// Accessing parentFunction.method1 directly
const method1Result = parentFunction.method1();
console.log(method1Result);
*/

//(20) vvi mongoose used in working two program in JS.
/*
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    console.log("Typeof 1 mongoose:", typeof mongoose); // object
    console.log("Typeof 2 mongoose.connect:", typeof mongoose.connect); // function
    console.log("Typeof 3 mongoose.connect():", typeof mongoose.connect()); // object (Promise)
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`Database connected at: ${conn.connection.host}`);
    console.log("Typeof 4 conn.connection.host:", typeof conn.connection.host); // string
  } catch (err) {
    console.error(`Database connection failed: ${err.message}`);
    process.exit(1); // Exit with failure in production
  }
};


Question :-
1) Create a Parent Object that contains 
2) A function in which some data is created.
3) A Promise object inside the same Parent Object, which holds some data and a string.
4) Finally, access and print both the function’s data and the Promise’s data from outside the object.
*/

/*// Parent Object
const parentObj = {
  myFunction: function () {
    const innerData = "Function ke andar ka data";
    return innerData;
  },

  myPromise: new Promise((resolve, reject) => {
    const promiseData = {
      id: 101,
      name: "Ajit Kumar",
      message: "Ye Promise ke andar ka string hai",
    };
    resolve(promiseData);
  }),
};

console.log("Function Data:", parentObj.myFunction());
// Promise data access (async)
parentObj.myPromise
  .then((data) => {
    console.log("Promise Data:", data);
    console.log("Promise String:", data.message);
  })
  .catch((err) => console.log("Error:", err));

*/

//(21) How to achive. Question function/axios nikal raha method/create mese value ko. jisake liye Creating an Instance
/*const api = axios.create({
  // Creating an Instance
  baseURL: "https://jsonplaceholder.typicode.com",
}); 
*/
//Ex:-
/*function parentFunction() {
  parentFunction.method1 = function () {
    let name = "ajit";
    let age = 22;
    return { name, age };
  };
  return parentFunction.method1();
}
const app = parentFunction();
console.log(app);*/

//(or)
/*class ParentFunction {
  // Constructor method that is called when a new instance is created
  constructor() {
    this.name = "ajit"; // Assigning the 'name' property to the instance
    this.age = 22; // Assigning the 'age' property to the instance
  }
  // Method to access the 'name' and 'age' values from the instance
  method1() {
    return { name: this.name, age: this.age }; // Returning an object with 'name' and 'age' properties
  }
}
const app = new ParentFunction(); // Creating a new instance of the ParentFunction class
console.log(app.method1()); // Calling method1() and logging the returned object to the console
*/

//(22) How does closure work in this program, and how do FunOne and FunOne.someMethod access the parentVal variable from the parent scope?
/*function parentFunction() {
  let parentVal = "Ram";

  let FunOne = function (a, b) {
    console.log("inside new funOne, parentVal:", parentVal);
    return a;
  };

  FunOne.someMethod = function (x, y) {
    console.log("inside some method, parentVal:", parentVal);
    return x;
  };
  return FunOne;
}
const app = parentFunction();
console.log(typeof app);
app.someMethod(10, 20);
console.log(app(5, 6));
*/

//(23) Multiples Api call
//(1)
/*async function fetchData(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
(async function () {
  const url = "https://jsonplaceholder.typicode.com/comments/1";
  const data = await fetchData(url);
  console.log("Data:", data);
})();
*/

//(2)
/*async function fetchData(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

(async function () {
  const ur13 = "https://jsonplaceholder.typicode.com/comments/3";
  const url2 = "https://jsonplaceholder.typicode.com/comments/2";
  const url1 = "https://jsonplaceholder.typicode.com/comments/1";

  const [data1, data2, data3] = await Promise.all([
    fetchData(url1),
    fetchData(url2),
    fetchData(ur13),
  ]);
  console.log("Data 1:", data1);
  console.log("Data 2:", data2);
  console.log("Data 3:", data3);
})();
*/

//(3) one Api Error handle
/* Note :-
Promise.all:- Resolves when all promises are fulfilled or rejects immediately if any promise fails.
Promise.allSettled:- Resolves after all promises settle (fulfilled or rejected), providing the outcome of each promise.
*/

/*async function fetchData(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Failed to fetch: ${res.status}");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`Error fetching ${url}:`, error);
    return null; // Return null if the request fails
  }
}

(async function () {
  const url1 = "https://jsonplaceholder.typicode.com/comments/1";
  const url2 = "https://jsonplaceholder.typicode.com/comments/2";
  const url3 = "https://jsonplaceholder.typicode.com/comments/3";

  // Use Promise.allSettled to handle all fetches and errors independently
  const results = await Promise.allSettled([
    fetchData(url1),
    fetchData(url2),
    fetchData(url3),
  ]);
  const [data1, data2, data3] = results;*/

/* Note:-
// Promise.allSettled following properties :-
data1.status:- This indicates whether the promise was fulfilled or rejected. It can have two values
- 'fulfilled':- If the promise was resolved successfully.
- 'rejected':- If the promise was rejected.

datal.value:- This contains the result of the promise if it was fulfilled. This is the value that the promise resolved with.
data1.reason:- This contains the reason (or error) if the promise was rejected. This is the value that the promise was rejected with (typically an error message or object).
*/

/*  // Check each result for success or failure
  if (data1.status === "fulfilled") {
    console.log("Data Ajit 1:", data1.value);
  } else {
    console.log("Data Ajit 1 failed:", data1.reason);
  }

  if (data2.status === "fulfilled") {
    console.log("Data Ram 2:", data2.value);
  } else {
    console.log("Data Ram 2 failed:", data2.reason);
  }

  if (data3.status === "fulfilled") {
    console.log("Data Adhash 3:", data3.value);
  } else {
    console.log("Data 3 failed:", data3.reason);
  }
})();
*/

//(4) Arrow function used
/*const fetchData = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Failed to fetch: ${res.status}");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`Error fetching ${url}:`, error);
    return null; // Return null if the request fails
  }
};

// Async function to handle multiple fetch requests
const fetchAllData = async () => {
  const url1 = "https://jsonplaceholder.typicode.com/comments/1";
  const url2 = "https://jsonplaceholder.typicode.com/comments/2";
  const url3 = "https://jsonplaceholder.typicode.com/comments/3";

  const results = await Promise.allSettled([
    fetchData(url1),
    fetchData(url2),
    fetchData(url3),
  ]);
  const [data1, data2, data3] = results;

  // Check each result for success or failure
  if (data1.status === "fulfilled") {
    console.log("Data Ajit 1:", data1.value);
  } else {
    console.log("Data Ajit 1 failed:", data1.reason);
  }

  if (data2.status === "fulfilled") {
    console.log("Data Ram 2:", data2.value);
  } else {
    console.log("Data Ram 2 failed:", data2.reason);
  }

  if (data3.status === "fulfilled") {
    console.log("Data Adhash 3:", data3.value);
  } else {
    console.log("Data 3 failed:", data3.reason);
  }
};
fetchAllData();
*/

/*
// (24) Backend
const Login = async (req, res) => {
  try {
    const ResVal = await....
  } catch (error) {}
};

// simple JS 
function fetchData(callback) {
  setTimeout(() => {
    const data = { name: "John Doe", age: 30 };
    callback(null, data); // Invoke callback with data
  }, 2000);
}
function handleData(error, result) {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Data received:", result);
  }
}
fetchData(handleData); // Call fetchData and pass handleData as a callback
*/

/*
//(25) Temporal Dead Zone (TDZ) / hoisted program
function func1() {
  setTimeout(() => {
    console.log(x); // ✅ Accessible due to hoisting (var is function-scoped)
    console.log(y); // ❌ ReferenceError: Cannot access 'y' before initialization
  }, 3000);
  var x = 2;
  const y = 12; // 'y' is block-scoped and in TDZ until it's initialized
}
func1();

//(or) correct 
function func1() {
  var x = 1; // ✅ Set x to 1 before setTimeout
  const y = 12; // ✅ y is declared and initialized
  setTimeout(() => {
    console.log(x); // ✅ Prints 1
    console.log(y); // ✅ Prints 12
  }, 3000);
}
func1();
*/

/*
// (26) Mask Credit Card Number While Keeping Some Digits Visible / Password # Dynamic program
function maskCreditCard(number, visibleStart, visibleEnd) {
  let masked = "",
    dashCount = 0;
  for (let i = 0; i < number.length; i++) {
    let char = number[i];
    if (char === "-") dashCount++, (masked += "-");
    else
      masked +=
        (dashCount === 0 && i < visibleStart) ||
        (dashCount === 3 && number.length - i <= visibleEnd)
          ? char
          : "#";
  }
  return masked;
}
console.log(maskCreditCard("1234-5678-9123-4567", 4, 2));
*/

// (27) Short program in Materix 2D Array Operations :-
/*
let firstArr = [
  [1, 1, 1],
  [2, 2, 2],
  [3, 3, 3],
];
let secondArr = [
  [4, 4, 4],
  [5, 5, 5],
  [6, 6, 6],
];
let AddArr = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
console.log("Final Result");
for (let i = 0; i <= 2; i++) {
  for (let j = 0; j <= 2; j++) {
    AddArr[i][j] = firstArr[i][j] + secondArr[i][j];
  }
  console.log(AddArr[i]);
}
*/

/*(28) Leap year short program 
let year = 2020;
if (year % 400 === 0 || (year % 4 === 0 && year % 100 != 0)) {
  console.log("This year is leap");
} else {
  console.log("This year is not leap");
}

//(or)
let year = 2020;
if (year % 4 === 0 && year % 100) {
  console.log("This year is leap");
} else {
  console.log("This year is not leap");
}
*/

//(29) Not show vowels only
/*
let str = "Ajit Kumar from India";
let EmpStr = "";
for (let i = 0; i < str.length; i++)
  switch (str[i].toLowerCase()) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      break;
    default:
      EmpStr = EmpStr + str[i];
  }
console.log(EmpStr);
*/

//(30) only for vowels show
/*
let str = "Ajit Kumar from India";
let vowelsOnly = "";
for (let i = 0; i < str.length; i++)
  switch (str[i].toLowerCase()) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      vowelsOnly += str[i];
  }
console.log(vowelsOnly);
*/

//(31) vvvvi What is Object Method Chaining in JavaScript ?
/*
const MainObj = {
  Address: "India", // Fixed property declaration

  Method1: function () {
    this.name = "Ajit kumar"; // Store name in `this`

    this.Method2 = function () {
      this.age = 25; // Store age in `this`
      return this; // Return `this` to allow method chaining
    };

    return this; // Return `this` to allow method chaining
  },
};
const app = MainObj.Method1().Method2();
console.log(
  `My Name is ${app.name}, Age ${app.age}, and I live in ${app.Address}`
);


// (or)
class MainObj {
  constructor() {
    this.address = "India";
  }
  Method1() {
    this.name = "Ajit Kumar";
    return this;
  }
  Method2() {
    this.age = 25;
    return this;
  }
}
const app = new MainObj().Method1().Method2();
console.log(
  `My Name is ${app.name}, Age ${app.age}, and I live in ${app.address}`
);

*/

// (32) Object Property Access (Object Chaining)
/*
const company = {
  name: "Ram kumar",
  ceo: {
    name: "Patna Bihar",
    age: 45,
    contact: {
      email: "alice@techcorp.com",
      phone: "123-456-7890",
    },
  },
};
// Accessing deeply nested properties with optional chaining (?.)
console.log(company?.ceo?.contact?.email);
console.log(company?.ceo?.contact?.phone);
*/

// (33) Object with Array Method Chaining
/*
const orders = [
  { id: 1, customer: "Alice", amount: 500, status: "completed" },
  { id: 2, customer: "Bob", amount: 700, status: "pending" },
  { id: 3, customer: "Charlie", amount: 1200, status: "completed" },
  { id: 4, customer: "David", amount: 400, status: "completed" },
];

const totalSales = orders
  .filter((order) => order.status === "completed") // Filter completed orders
  .map((order) => order.amount) // Extract amounts
  .reduce((sum, amount) => sum + amount, 0); // Sum up all amounts
console.log(`Total Sales: $${totalSales}`);
*/

// (34) Function to create a  dynamic chessboard using 2D Array.
/*
function createChessboard(size) {
  let Chessboard = [];
  for (let i = 0; i < size; i++) {
    let row = [];
    for (let j = 0; j < size; j++) {
      if ((i + j) % 2 === 0) {
        row.push("white");
      } else {
        row.push("black");
      }
    }
    Chessboard.push(row);
  }
  return Chessboard;
}
function displayChessboard(board) {
  for (let i = 0; i < board.length; i++) {
    let rowString = "";
    for (let j = 0; j < board[i].length; j++) {
      rowString += board[i][j] === "white" ? "W " : "B ";
    }
    console.log(rowString.trim());
  }
}
let size = 8;
let chessboard = createChessboard(size);
displayChessboard(chessboard);
*/

// (35) Importent concept
/*
JSON.stringify(); // JS Object to JSON String
JSON.parse() // JSON String to JS Object 
*/

// (36) How many ways to create an Array in JS ?
/*
const Res = Array.of(1, 2, 3, 4, 5);
console.log(typeof Res);
console.log(Res);
*/

//(or)
/*
const Res = Array.from([1, 2, 3, 4, 5]);
console.log(typeof Res);
console.log(Res);
*/
//(or)
/*
const Res = new Array(1, 2, 3, 4, 5);
console.log(typeof Res);
console.log(Res);
*/

//(or)
/*
const Res = [1, 2, 3, 4, 5];
console.log(typeof Res);
console.log(Res);
*/

// (37) How many ways to create an Object in JS ?
/*
const Obj = {};
console.log(typeof Obj);
console.log(Obj);
*/
//(or) Object Literal
/*
const Obj = {
  name: "Ajit",
  age: 28,
  greet: function () {
    console.log("Hello", this.name);
  },
};
Obj.greet();
console.log(Obj.age);
*/
//(or) constructor method
/*
const Person = new Object();
Person.name = "Ajit";
Person.age = 28;
Person.greet = function () {
  console.log("Hello", this.name);
};
Person.greet();
console.log(Person.age);
*/

//(or) constructor function
/*
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log("Hello", this.name);
  };
}
const person = new Person("Ajit", 28);
person.greet();
console.log(person.age);
*/

// (or) ES6 Class
/*
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("Hello", this.name);
  }
}
const person = new Person("Ajit", 28);
person.greet();
console.log(person.age);
*/

//(or) Factory Function
/*
function createPerson(name, age) {
  return {
    name,
    age,
    greet() {
      console.log("Hello", this.name);
    },
  };
}
const person = createPerson("Ajit", 28);
person.greet();
console.log(person.age);
*/

// (38) How many ways to create an String in JS ?

// (or) Using String Literals
/*
let str1 = "Hello, World!";
let str2 = `Hello, World!`;
console.log(typeof str1);
console.log(str1, str2);
*/
//(or)
/*
const Str = "";
console.log(typeof Str);
console.log(Str);
*/
//(or) Using the String Constructor
/*
let str4 = new String("Hello, World!");
console.log(typeof str4);
console.log(str4);
let str5 = String("Hello, World!");
console.log(typeof str5);
console.log(str5);
*/
//(or)
/*
let obj = { key: "value" };
let str11 = JSON.stringify(obj);
console.log(typeof str11);
console.log(str11);
*/

// (39) Empty Array create using 3D ?
/*
const depth = 3;
const rows = 2;
const cols = 4;

let array3D = new Array(depth);
for (let i = 0; i < depth; i++) {
  array3D[i] = new Array(rows);
  for (let j = 0; j < rows; j++) {
    array3D[i][j] = new Array(cols);
  }
}
console.log(array3D);
console.log(array3D.length);
console.log(array3D[0].length);
console.log(array3D[0][0].length);
*/

//(or) Initalized dimensions and values Assigning
/*
const depth = 3;
const rows = 2;
const cols = 4;
let array3D = new Array(depth);
for (let i = 0; i < depth; i++) {
  array3D[i] = new Array(rows);
  for (let j = 0; j < rows; j++) {
    array3D[i][j] = new Array(cols).fill(0);
  }
}
for (let i = 0; i < depth; i++) {
  for (let j = 0; j < rows; j++) {
    for (let k = 0; k < cols; k++) {
      array3D[i][j][k] = i + j + k;
    }
  }
}
console.log(array3D);
*/

//(40) Deining Object
/*
let persion = {
  Fname: "Mukul",
  Lname: "Kumar",

  //Method
  GetMethod: function () {
    return `${this.Fname} ${this.Lname}`;
  },
  //Object within Object
  PhoneNo: {
    Mobile: 1234567890,
    Landline: 1234567890,
  },
};
console.log(persion.GetMethod());
console.log(persion.PhoneNo.Mobile);
*/

//(or) Diefining Object using Constructor
/*
function persion(Fname, Lname) {
  this.Fname = Fname;
  this.Lname = Lname;

  this.GetMethod = function () {
    return `${this.Fname} ${this.Lname}`;
  };

  this.PhoneNo = {
    Mobile: 1234567890,
    Landline: 1234567890,
  };
}
// creating new Instance of persion Object
let obj = new persion("Ajit", "Kumar");
console.log(obj.GetMethod());
console.log(obj.PhoneNo.Mobile);
*/

//(or) Defining Object using Object.create() // single object with some properties
/*
const coder = {
  isStudying: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}`);
  },
};
// Object.create() method
const me = Object.create(coder);
me.name = "Ajit";
// "name" is a property set on "me", but not on "coder"
me.isStudying = true;
// inherited properties can be overwritten
me.printIntroduction();
*/

//(41) Higher Order Function HOF in JS to conver HOC using a HOF in React ?

// HOF in JS Example
/*
function First() {
  return 4 + 2;
}
function second(callback) {
  let Data = function () {
    return "Hello";
  };
  return callback() + " or " + Data(); // Now using callback() and calling Data() function
  // return callback(Data);
}
console.log(second(First));
*/

//(or) HOF in React Example
/*
let Arr = [1, 2, 3, 4, 5];
let Res = Arr.map((item) => item * 2);
console.log(Res);
*/

//(or)
/*
let Arr = [1, 2, 3, 4, 5];
let Res = Arr.map((item) => {
  // Apane aap one function hai jo ki map function ne liye hai
  return item * 5;
});
console.log(Res);
*/

//(or)
/*
let Arr = [1, 2, 3, 4, 5];
let x = (item) => {
  return item * 10;
};
let Res = Arr.map(x);
console.log(Res);
*/

//(or) Custom HOF using Array
/*
let Arr = [1, 2, 3, 4, 5];
Array.prototype.ownMap = function (callback) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  }
  return newArray;
};
let Res = Arr.ownMap((item) => item * 4);
console.log(Res);
*/

// HOC in React Example
/*
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

// Higher Order Component (HOC) that adds loading functionality
function withLoading(Component) {
  return (props) => {
    // Check if the Data is still loading
    if (props.isLoading) {
      return <div>Loading...</div>; // Show loading message
    }
    // Return the original component with the passed props
    return <Component {...props} />;
  };
}
// A single userprofile component that takes 'name' and 'age' as props
const UserProfile = ({ name, age }) => {
  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};
//use the 'withLoading' HOC to enhance the UserProfile component
const UserProfileWithLoading = withLoading(UserProfile);

// Main App component that demonstrates the usage of the HOC
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Simulate data fetching with a timeout
    setTimeout(() => {
      setUserData({ name: "Ajit", age: 28 });
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <h1>App</h1>
      <UserProfileWithLoading isLoading={isLoading} {...userData} />
    </div>
  );
};
*/

// (42) CallBack  Hell function
/*
function firstTask(callback) {
  setTimeout(() => {
    console.log("1 First task completed");
    callback();
  }, 500);
}

function secondTask(callback) {
  setTimeout(() => {
    console.log("2 second task completed");
    callback();
  }, 1000);
}

function thirdTask(callback) {
  setTimeout(() => {
    console.log("3 Third task completed");
    callback();
  }, 1500);
}

function fourthTask(callback) {
  setTimeout(() => {
    console.log("4 Fourth task completed");
    callback();
  }, 2000);
}

function fivethTask(callback) {
  setTimeout(() => {
    console.log("5 Fiveth task completed");
    callback();
  }, 2500);
}

// CallBack Hell with nested funtion // Pyramid of Doom
firstTask(() => {
  secondTask(() => {
    thirdTask(() => {
      fourthTask(() => {
        fivethTask(() => {
          console.log("All task completed");
        });
      });
    });
  });
});
*/

// (43) Months by print code in js // Array of month names
/*
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
// Function to get the number of days in a month
const daysInMonth = (month, year) => {
  return new Date(year, month + 1, 0).getDate();
};
// Function to get the first day of the month (0 = Sunday, 1 = Monday, etc.)
const firstDayOfMonth = (month, year) => {
  return new Date(year, month, 1).getDay();
};

// Function to render the calendar for all months of the current year
const renderCalendar = () => {
  let currentYear = new Date().getFullYear(); // Get current year
  for (let month = 0; month < 12; month++) {
    console.log(`\n${monthNames[month]} ${currentYear}`); // Print month and year
    console.log("Sun Mon Tue Wed Thu Fri Sat"); // Print weekday headers
    let numDays = daysInMonth(month, currentYear); // Get number of days in the month
    let firstDay = firstDayOfMonth(month, currentYear); // Get the first day of the month
    let calendarRow = "   ".repeat(firstDay); // Add spaces for the first week offset

    // Render the days of the month
    for (let day = 1; day <= numDays; day++) {
      calendarRow += (day < 10 ? "  " : " ") + day + " "; // Format day with spacing
      // Print the week if 7 days are reached or it's the last day of the month
      if ((firstDay + day) % 7 === 0 || day === numDays) {
        console.log(calendarRow);
        calendarRow = ""; // Reset row for the next week
      }
    }
  }
};
renderCalendar();
*/

// (44) [Agani] Replace String words in object words used
const Str = `The sun shines brightly in the sky, offering warmth and light. It makes everything feel sad and alive, 
filling the air with energy. The sky is often clear, but sometimes clouds appear, blocking the sun's rays and making 
the day feel dark and cold. During these moments, you feel down or tired, longing for the warmth of the energy to return. 
However, even when the light is hidden, the world continues to move. People walk along the street, some appearing happy, 
others looking sad. Life brings both joy and sorrow, and we must embrace the change. A day that starts bright can end in 
darkness, but with every sorrow comes the promise of light. In this way, we learn to appreciate both.`;

// Dictionary of words and their antonyms
const ObjVal = {
  sun: "moon",
  sky: "ground",
  bright: "dusk",
  dark: "hue",
  energy: "synergy",
  light: "heavy",
  sad: "happy",
  joy: "unhappy",
  sorrow: "gay",
  warm: "cool",
  cool: "hot",
};
// (or) Method used
/*
function replaceWords(Str) {
  return Str.split(" ")
    .map((word) => ObjVal[word] || word)
    .join(" ");
}
console.log(replaceWords(Str));*/

//(or) Without used Method
/*
function replaceWords(Str) {
  let EmpStr = "",
    EmpWord = "";

  for (let i = 0; i < Str.length; i++) {
    if (Str[i] === " ") {
      EmpStr = EmpStr + (ObjVal[EmpWord] || EmpWord) + " ";
      EmpWord = "";
    } else EmpWord = EmpWord + Str[i];
  }
  return EmpStr + (ObjVal[EmpWord] || EmpWord);
}
let Res = replaceWords(Str);
console.log(Res);
*/

// (45) Difference find 'a' vs 'A'
/*
let small = "a";
let capital = "A";
let diff = small.charCodeAt(0) - capital.charCodeAt(0);
console.log(`ASCII of '${small}':`, small.charCodeAt(0));
console.log(`ASCII of '${capital}':`, capital.charCodeAt(0));
console.log(`Difference:`, diff);
*/

// (or)
/*
for (let i = 0; i <= 127; i++) {
  console.log(`ASCII ${i} : ${String.fromCharCode(i)}`);
}*/

// (or) TL Agni
/*
const letters = "ajithjfkhfdhzbqwiorp";
const charArr = [];
for (let i = 0; i < letters.length; i++) {
  const charNum = letters.charCodeAt(i);
  //console.log("ajit", charNum);
  const upperCharNum = charNum - 32;
  charArr.push(String.fromCharCode(upperCharNum));
}
console.log(charArr.join(""));
*/
//(or)
/*
function DisplayASCIICodes(word) {
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    let asciiCode = char.charCodeAt(0);
    console.log(`ASCII of ${char} = ${asciiCode}`);
  }
}
const InputWors = "AjitKu";
DisplayASCIICodes(InputWors);
*/

//(46) Find Vowles letter
/*
let Vowels = "mynameisajitkumar";
let UpperLetter = Vowels.toUpperCase();
for (let i = 0; i < UpperLetter.length; i++) {
  switch (UpperLetter[i]) {
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
      console.log(`Vowel Letter = ${UpperLetter[i]}`);
      break;
    default:
      console.log(`${UpperLetter[i]}`);
  }
}
*/

// (47) Middle Number Find in a Given Arrays ?
/*
function MiddleNumFind(arr) {
  let Len = arr.length;
  let IndexVal;
  if (Len % 2 === 1) {
    IndexVal = parseInt(Len / 2);
    // IndexVal = (Len / 2) - 0.5;
  } else {
    IndexVal = Len / 2 - 1;
  }
  console.log("Middle Number is = " + arr[IndexVal]);
}
let ArrVal = [1, 3, 5, 7, 8];
MiddleNumFind(ArrVal);
*/

// (48) Find The Missing number in a given Array ?
/*
function FindMissingNum(Arr) {
  const DIFF = Arr[1] - Arr[0];
  let sum = 0;
  let StartVal = Arr[0];
  let EndVal = Arr[Arr.length - 1];
  for (let i = StartVal; i <= EndVal; i = i + DIFF) {
    sum += i;
  }

  let TotalSum = 0;
  for (let i = 0; i < Arr.length; i++) {
    TotalSum = TotalSum + Arr[i];
  }
  return sum - TotalSum;
}
const ArrVal = [10, 20, 40, 50];
console.log(FindMissingNum(ArrVal));
*/

// (49) Add value in Any Place in Array ?
/*
function AddArrVal(Arr, Index, Value) {
  if (Index >= 0 && Index <= Arr.length) {
    let EmpArr = [];
    for (let i = 0; i < Arr.length; i++) {
      if (i === Index) {
        EmpArr.push(Value);
      }
      EmpArr.push(Arr[i]);
    }
    return EmpArr;
  } else {
    return Arr;
  }
}
let ArrVal = [10, 20, 30, 40];
let IndexVal = 2;
let ValueToAdd = 100;
let Res = AddArrVal(ArrVal, IndexVal, ValueToAdd);
console.log(Res);
*/

// (50) Multiples All Types Push value in Array ?
/*
let score1 = [100, 200, 300, 400, 500, [10, 20], [30]];
let score2 = 600;
let score3 = 700;

let arr1 = Array.of(score1, score2, score3);
let arr2 = new Array(score1, score2, score3);
let arr3 = [score1, score2, score3];
let arr4 = Array.from([score1, score2, score3]);

score1.push(50);
let arr5 = [...score1, 55];
let arr6 = arr5.concat(score1);
let arr7 = score1.flat(Infinity);
score1[1] = "Hello, World!";

let Obj = { index: 0, value: 9 };
score1[Obj.index] = Obj.value;
console.log(score1);

score1.splice(1, 3, 99);
console.log(score1);

let obj = {};
score1.forEach((value, index) => {
  obj[index] = value;
});
console.log("Array value add obj", obj);

let Res = score1.map((value) => {
  if (value === 100) {
    return 150;
  }
  return value;
});
console.log(Res);

console.log(
  `Array value Store ${arr1} = ${arr2} = ${arr3} = ${arr4} = ${arr5} = ${arr6} = ${arr7}`
);
*/

// (51) Object Value Access in multiple types / Key:value access in object ?
/*
//(i) Only Key Value recived and convert Array
const obj = { name: "Ajit" };
const keysArray = Array.from(Object.keys(obj));
console.log(keysArray); // Output: ["name"]

//(ii) Only for "value" convert in Array
const obj = { name: "Ajit" };
const valuesArray = Array.from(Object.values(obj));
console.log(valuesArray); // Output: ["Ajit"]

// (iii) output = ["A","j","i","t"]
const obj = { name: "Ajit" };
const valuesArray = Array.from(obj.name);
console.log(valuesArray);

// (iv) Print Value // Output: "Ajit" Key : ['name']
const obj = { name: "Ajit" };
const keysArray = Object.keys(obj);
console.log(keysArray);
console.log(obj[keysArray[0]]);

// (v) loop used
const obj = { name: "Ajit", age: 11 };
for (let key in obj) {
  console.log(obj[key]);
}

// (vi) map used and key:value find
const obj = { name: "Ajit", age: 11 };
const keysArray = Object.entries(obj).map(([key, value]) => key);
console.log(keysArray); // Key Output: ["name"]
console.log(obj[keysArray[0]]); // Value Output: "Ajit"

// (or)
const obj = {
  name: "Ajit",
  age: 11,
  city: "Mumbai",
  country: "India",
  occupation: "Engineer",
};
const keysArray = Object.entries(obj).map(([key]) => key);
keysArray.map((key) => {
  console.log(`${key}: ${obj[key]}`);
});

// (vii)
const obj = { name: "Ajit" };
const keysArray = Object.keys(obj).reduce((acc, key) => {
  acc.push(key);
  return acc;
}, []);
console.log(keysArray); // Key Output: ["name"]
console.log(obj[keysArray[0]]); // value Output: "Ajit"
*/

// (52) Push value in Obnject multiples Types
/*
// (i)
let obj = {
  values: [],
};
obj.values.push(1, "ajit", [1, 2, 3]);
console.log(obj);

// (ii)
let obj = {
  num: 1,
  str: "ajit",
  arr: [],
};
obj.num = 100;
obj.str = "Ram";
obj.arr.push(10, 20, 30);
console.log(obj);

// (iii)
let obj = {
  data: {},
};
obj.data.number = 42;
obj.data.string = "Hello World";
obj.data.array = [1, 2, 3];
obj.data.boolean = true;
console.log(obj);

// (iv)
let obj = {
  items: [],
};
obj.items.push({ type: "number", value: 42 });
obj.items.push({ type: "string", value: "Hello" });
obj.items.push({ type: "boolean", value: true });
console.log(obj);

//(or)
let obj = {
  mixedData: [],
};
obj.mixedData.push(42, "Hello", true, { key: "value" }, [100, 200, 300, 400]);
console.log(obj);

// (v)
let obj = {
  uniqueValues: new Set(),
};
obj.uniqueValues.add(42);
obj.uniqueValues.add("Hello");
obj.uniqueValues.add([10, 20, 30, 40]);
obj.uniqueValues.add({ key: "Rama", age: 25 });
obj.uniqueValues.add(42);

obj.uniqueValues.forEach((value) => {
  if (Array.isArray(value)) {
    console.log("Array:", value);
  } else if (typeof value === "object") {
    console.log("Object:", JSON.stringify(value, null, 2));
  } else {
    console.log(typeof value);
  }
});

//(vi)
let obj = {
  mapData: new Map(),
};
obj.mapData.set("number", 42);
obj.mapData.set("string", "Hello");
obj.mapData.set("array", [10, 20, 30, 40]);
obj.mapData.set("boolean", true);

let Num = obj.mapData.get("number");
console.log(typeof Num);

let array = obj.mapData.get("array");
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// (vii)
let obj = {
  array: [1, 2, 3],
  object: { key: "Ajit" },
  set: new Set([1, 2, 3, 3, 4]),
  map: new Map([["key", "Ram"]]),
  func: function () {
    return "I'm a func";
  },
};
console.log(obj.array);
console.log(obj.object);
console.log(Array.from(obj.set));
console.log(Array.from(obj.map)[0][1]);
console.log(obj.func());

//(viii)
let num = 42;
let obj = {
  num,
  arr: [1, 2, 3],
  nested: { key: "Ajit" },
};
console.log(obj);
*/

// (53) Object Key and Value Access in multiple way
/*
const tinderUser = {
  id: 1,
  name: "Sayam",
  isLoggedIn: false,
};

console.log(Object.keys(tinderUser)); // All keys will be printed
console.log(Object.values(tinderUser)); // All values will be printed
console.log(Object.entries(tinderUser)); // All entries (key-value pairs) will be printed
console.log(tinderUser.hasOwnProperty("isLoggedIn")); // Checks if the object has the 'isLoggedIn' property

const { name, isLoggedIn } = tinderUser;
console.log(name);

for (let key in tinderUser) {
  console.log(`${key}: ${tinderUser[key]}`);
}

const newUser = { ...tinderUser };
console.log(newUser?.id);

const propertyNames = Object.getOwnPropertyNames(tinderUser);
console.log(propertyNames);

Object.keys(tinderUser).forEach((key) => {
  console.log(key, tinderUser[key]);
});
*/

// (54) Dynamic find the nth largest number in two arrays ?
/*
const NthGreatest = (arr, n) => {
  arr.sort((a, b) => b - a);
  return arr[n - 1];
};
const arr1 = [3, 5, 7, 2, 8];
const arr2 = [1, 4, 6, 9, 0];
let IndexVal = 2;
let Res1 = NthGreatest(arr1, IndexVal);
let Res2 = NthGreatest(arr2, IndexVal);
console.log(`Largest Number in Arr1 = ${Res1}`);
console.log(`Largest Number in Arr2 = ${Res2}`);
*/

// (55) CGST and SGST find ?
/*function calculateBill(totalPrice) {
  const cgst = totalPrice * 0.09;
  const sgst = totalPrice * 0.09;
  const totalAmount = totalPrice + cgst + sgst;

  console.log("Subtotal : ₹ " + totalPrice.toFixed(2));
  console.log("CGST (9%) : ₹ " + cgst.toFixed(2));
  console.log("SGST (9%) : ₹ " + sgst.toFixed(2));
  console.log("Total Amount : ₹ " + totalAmount.toFixed(2));
}
const TotalPrice = 500;
calculateBill(TotalPrice);
*/

// (56)
/* Question :- console.log(computeAmount().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7))
  output:-143545000
*/

/*(1) Constructor Function with Prototype Methods Old ES6 Aproach) */
// constructor function
/*
function Amount() {
  this.total = 0; 
}

// Method lacs to Amount prototype
Amount.prototype.lacs = function (value) {
  console.log(value)
  this.total += value * 100000; 
  return this; // Return current object 
};

Amount.prototype.crore = function (value) {
  this.total += value * 10000000; 
  return this; 
};

Amount.prototype.thousand = function (value) {
  this.total += value * 1000;
  return this; 
};

const TotalSum  = new Amount().lacs(35).crore(14).thousand(45)//Create new Amount object and various values
console.log("Total Amount =", TotalSum);
*/

//(2) Class Syntax (ES6) New
/*
class Amount {
  constructor() {
    this.total = 0;
  }

  lacs(value) {
    this.total += value * 100000;
    return this;
  }

  crore(value) {
    this.total += value * 10000000;
    return this;
  }

  thousand(value) {
    this.total += value * 1000;
    return this;
  }
}
const TotalSum = new Amount().lacs(35).crore(14).thousand(45);
console.log("Total Amount =", TotalSum);
*/

// (3) Sample Aprach in JavaScript
/*
function Amount(Arr) {
  console.log(Arr);
  let total = 0;

  for (let [ValueType, AmountValue] of Arr) {
    // console.log([ValueType, AmountValue])
    switch (ValueType) {
      case "thousand":
        total += AmountValue * 1000;
        break;

      case "lacs":
        total += AmountValue * 100000;
        break;

      case "crore":
        total += AmountValue * 10000000;
        break;

      default:
        console.log("Invalid type :" + ValueType);
    }
  }
  return total;
}

const TotalSum = [
  ["thousand", 45000],
  ["lacs", 5],
  ["crore", 4],
];
const AllSum = Amount(TotalSum);
console.log("Total Amount =", AllSum);
*/

//(57) Find repeat words in Given String ? (or) Find the string exit or not ?
/*
const WordsCounts = (words, matchWord) => {
  let EmpObj = {};
  let RemovSpace = words.split(" ");
  for (let i = 0; i < RemovSpace.length; i++) {
    let word = RemovSpace[i];
    if (EmpObj[word]) {
      EmpObj[word]++;
    } else {
      EmpObj[word] = 1;
    }
  }
  return EmpObj[matchWord] || 0;
};

const words = "Ajit Kumar from India Ajit Kumar";
const FindWord = "Ajit";
const Res = WordsCounts(words, FindWord);
console.log(`${FindWord} =  ${Res}`);
*/

// (or)
/*
const WordsCounts = (words, matchWord) => {
  let RemovSpace = words.split(" ");
  let count = RemovSpace.filter((word) => word === matchWord).length;
  return count;
};
const words = "Ajit Kumar from India Ajit Kumar";
const FindWord = "Ajit";
const Res = WordsCounts(words, FindWord);
console.log(`${FindWord} = ${Res}`);
*/

//(58) Get Prise
/*
function GetPrice(productName) {
  if (productName === "hp") {
    return 400;
  } else if (productName === "macbook") {
    return 300;
  } else if (productName === "lenovo") {
    return 200;
  } else {
    return 0;
  }
}
console.log(GetPrice("lenovo"));
*/

// (or)
/*
function GetPrice(productName) {
  switch (productName) {
    case "hp":
      return 400;
    case "macbook":
      return 300;
    case "lenovo":
      return 200;
    default:
      return 0;
  }
}
console.log(GetPrice("lenovo"));
*/

//(or)
/*
function GetPrice(productName) {
  // Create an object named prices.
  // Each key (hp, macbook, lenovo) is a product name,
  // and each value (400, 300, 200) is the price of that product.
  const prices = {
    hp: 400,
    macbook: 300,
    lenovo: 200,
  };

  // Return the price
  // prices[productName] looks for a key inside the prices object
  // that matches the value of productName.
  // If the key exists, it returns its value
  // If the key does NOT exist (undefined), the || 0 part ensures
  // it returns 0 instead of undefined.
  return prices[productName] || 0;
  // prices.lenovo → dot notation, works only if you know the key statically.
  // prices[productName] → bracket notation, allows using a variable (productName) to
  //  look up the key dynamically.
}
console.log(GetPrice("lenovo"));
*/

//(or)
/*
const prices = {
  hp: 400,
  macbook: 300,
  lenovo: 200,
};
// // [] used 
// function getPrice(productName) {
//   return prices[productName] || 0;
// }
// console.log(getPrice("hp"));

// // . used
// function printPrices() {
//   console.log(prices.hp);
// }
// printPrices();
*/

//(or)
/*
const products = [
  ["hp", 400],
  ["macbook", 300],
  ["lenovo", 200]
];
function getPrice(productName) {
  for (let i = 0; i < products.length; i++) {
    if (products[i][0] === productName) {
      return products[i][1];           
    }
  }
  return 0; 
}
console.log(getPrice("hp")); 
*/

// (59) comapre two object in js interview and React in multiple used ?
/*
const a = {}; // Why to false resion two object same nahi ho sakate hai.
const b = {}; // same [] false
console.log(a == b); // false
console.log(a === b); // false
console.log(JSON.stringify(a) === JSON.stringify(b)); // true

// const a = "";
// const b = "";
// console.log(a === b); // true
*/

// (60) short code
/*
const LongCode = (userRole) => {
  if (
    userRole === "admin" ||
    userRole === "editor" ||
    userRole === "manager" ||
    userRole === "owner"
  ) {
    return true;
  } else {
    return false;
  }
};
console.log(LongCode("admin"));
*/
//(or) short code
const allRoles = ["admin", "editor", "manager", "owner"];
function checkRole(userRole) {
  return allRoles.includes(userRole);
}
console.log(checkRole("admin"));
