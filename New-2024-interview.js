//(1) Interview Filtering values in Given Object
/*const arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: "12" },
  { id: null },
  { id: NaN },
  { id: "undefined" },
];
const Result = arr.filter(
  (obj) => obj.id !== undefined && typeof obj.id === "number" && obj.id >= 0
);
console.log(Result);*/

//(or) How to Remove Null ,Zero, " ",false,undefined,and NaN ?
/*function cleneArray(arr) {
  return arr.filter((val) => {
    return (
      val !== null &&
      val !== 0 &&
      val !== "" &&
      val !== false &&
      val !== undefined &&
      !Number.isNaN(val)
    );
  });
}
const array = [0, 1, null, 2, "", 3, false, 4, undefined, 5, NaN, 6, "work"];
const Result = cleneArray(array);
console.log(`Clean the Given Array Values :- ${Result}`);*/

//(or)
/*const array = [0, 1, null, 2, "", 3, false, 4, undefined, 5, NaN, 6, "p"];
const res = array.filter((item) => {
  return Boolean(item);
});
console.log(array);
console.log(res);*/

//(2) Sum of Two array first And second Array Value
/*function Arrays_sum(array1, array2) {
  const result = [];
  // let i = 0;
  // while (i < array1.length && i < array2.length) {
  //   result.push(array1[i] + array2[i]);
  //   i++;
  // }
  for (let i = 0; i < array1.length && i < array2.length; i++) {
    result.push(array1[i] + array2[i]);
  }
  return result;
}
console.log(Arrays_sum([1, 0, 2, 3, 4], [3, 5, 6, 7, 8]));*/

//(or)
/*function sumArrays(arr1, arr2) {
  const EmpArr = [];
  if (arr1.length !== arr2.length) {
    throw new Error("Arrays must have the same length");
  }
  for (let i = 0; i < arr1.length; i++) {
    EmpArr.push(arr1[i] + arr2[i]);
  }
  return EmpArr;
}
const array1 = [1, 2, 3],
  array2 = [4, 5, 6];
console.log(sumArrays(array1, array2));*/

//(or)
/*let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let arr3 = arr1.map((val, index) => val + arr2[index]);
console.log(arr3);*/

//(3) Print Alternate Array Index value in JavaScript ?
/*function getEveryNth(arr, nth) {
  const result = [];
  for (let i = 0; i < arr.length; i = i + nth) {
    result.push(arr[i]);
  }
  return result;
}
// output [1, 3, 5]
console.log(getEveryNth([1, 2, 3, 4, 5, 6], 2));
//OutPut [2, 8, 14]
console.log(getEveryNth([2, 4, 6, 8, 10, 12, 14], 3));*/

//(4) Get every Nth Element of Array in JavaScript ?
/*const getEveryNthElement = (arr, n) => {
  const EmptyArr = [];
  for (let i = n - 1; i < arr.length; i = i + n) {
    EmptyArr.push(arr[i]);
  }
  return EmptyArr;
};
const ArrVal = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const NthElement = 3;
const Res = getEveryNthElement(ArrVal, NthElement);
console.log(Res);*/

//(5)interview input Array [10, 15, 20, 25, 30] and output array [ 10, 25, 45, 70, 100 ]
/*function cumulativeSum(arr) {
  let result = [];
  if (arr <= 0) {
    console.log("Empty Array Plz Enter Value");
  }
  arr.reduce((accumulator, currentValue, index) => {
    //console.log(` ${accumulator} <=> ${currentValue} = ${index}`);
    let sum = accumulator + currentValue;
    result.push(sum);
    return sum;
  }, 0);
  return result;
}
let inputArray = [10, 15, 20, 25, 30];
let outputArray = cumulativeSum(inputArray);
console.log(outputArray);*/

//(or)
/*function cumulativeSum(arr) {
  let result = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    result.push(sum);
  }
  return result;
}
let inputArray = [10, 15, 20, 25, 30];
let outputArray = cumulativeSum(inputArray);
console.log(outputArray);*/

//(6)interview Find the string = "aaabbbaaaacc" output = a3b3a4c2
/*function StrCount(Str) {
  if (!Str || Str.length <= 0) {
    console.log("Empty String plz Enter the String");
    return "";
  }
  let EmptyStr = "";
  let count = 1;
  for (let i = 0; i < Str.length; i++) {
    // Check if the current character is the same as the next character
    if (Str[i] === Str[i + 1]) {
      count++; // If yes, increment the count
    } else {
      // If no (current character is different from the next one or it's the end of the string)
      // Append the current character and its count to `EmptyStr`
      EmptyStr = EmptyStr + Str[i] + count;
      count = 1; // Reset the count to 1 for the next character
    }
  }
  return EmptyStr;
}
console.log(StrCount("aaabbbccdddd"));*/

//(or) Input String :-"hellw world" o/p :-{ h: 1, e: 1, l: 3, w: 2, ' ': 1, o: 1, r: 1, d: 1 }
/*function countCharacters(str) {
  const charCount = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    // If the character is already in the object, increment its count
    // Otherwise, set its count to 1
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  return charCount;
}
console.log(countCharacters("hellw wrrlh"));*/

//(7)interview arrval = [5,6,2,1,4,3]; stringVal = “Happy New year”; Output-> “N-e-p-a-y-p”
/*let SpaceRemove = "Happy New Year";
let StrVal = SpaceRemove.split(" ").join("");
let arrVal = [5, 6, 2, 1, 4, 3];
let EmptyStr = "";
for (let i = 0; i < arrVal.length; i++) {
  let index = arrVal[i];
  if (index >= 0 && index < StrVal.length) {
    EmptyStr = EmptyStr + StrVal[index] + "-";
  }
}
console.log(EmptyStr);*/

//(or)
/*let stringVal = "Happy New year";
let indixs = [6, 7, 3, 1, 4, 3];
let Res = indixs.map((val) => stringVal[val]).join("-");
console.log(Res);*/

//(8)Input String "This is a ajit developer for kumar" o/p This is a ajit repoleved for ramuk
/*function reverseWordsWithCondition(sentence, conditionIndex) {
  const words = sentence.split(" "); // This method remove Space
  for (let i = 0; i < words.length; i++) {
    // Check if the length of the current word is greater than conditionIndex
    if (words[i].length > conditionIndex) {
      let reversedWord = "";
      // Iterate through each character of the current word in reverse order
      for (let j = words[i].length - 1; j >= 0; j--) {
        reversedWord += words[i][j]; // Append the current character to the reversedWord string
      }
      words[i] = reversedWord; // Replace the current word in the array with its reversed version
    }
  }
  console.log(words.join(" "));
}
const inputSentence = "This is a ajit developer for kumar";
const conditionIndex = 4;
reverseWordsWithCondition(inputSentence, conditionIndex);*/

//(or)
/*function reverseWordsWithCondition(sentence, conditionIndex) {
  const words = sentence.split(" ");
  const reversedWords = words.map((value) => {
    if (value.length > conditionIndex) {
      return value.split("").reverse().join("");
    }
    return value;
  });
  return reversedWords;
}
const inputSentence = "This is a ajit developer for kumar";
const conditionIndex = 5;
const Res = reverseWordsWithCondition(inputSentence, conditionIndex);
console.log(Res.join(" "));*/

//(9) Find repeat words in Given String ? (or) Find the string exit or not ?
function RepeatWordFind(str, WordSearch) {
  let EmptyArr = [];
  // Loop through the string, ensuring we don't exceed the length where the word can be found
  for (let i = 0; i <= str.length - WordSearch.length; i++) {
    let match = true;
    // Check each character of the word against the corresponding part of the string
    for (let j = 0; j < WordSearch.length; j++) {
      // If any character doesn't match, set match to false and break out of the loop
      if (str[i + j] !== WordSearch[j]) {
        match = false;
        break;
      }
    }
    if (match) {
      EmptyArr.push(WordSearch); // If a match is found, push the word into the array
    }
  }
  return EmptyArr;
}
let GivenStr = "my name is ajit kumar my home tone kumar";
let RepetWordSearch = "kumar";
let FinalRes = RepeatWordFind(GivenStr, RepetWordSearch);
console.log(FinalRes.join(" "));

//(10) Interview Input = “what is my name mukulkumar” Output = “r am ukl ukum emany msitah w***”
/*let StrVal = "what is my name mukulkumar";
let ReverseStringSpaceRemove = "";
for (let i = StrVal.length - 1; i >= 0; i--) {
  if (StrVal[i] !== " ") {
    ReverseStringSpaceRemove += StrVal[i]; // Remove spaces while reversing
  }
}
let LenCheck = 1;
let Diff = 3;
let NewStr = "";
for (let i = 0; i < ReverseStringSpaceRemove.length; i++) {
  NewStr = NewStr + ReverseStringSpaceRemove[i];
  if (NewStr.length === LenCheck) {
    NewStr = NewStr + " ";
    LenCheck = LenCheck + Diff;
    Diff = Diff + 1;
  }
}
console.log(NewStr);*/

//(11) Intput String:- "what is my name mukulkumar" Find O/p :- w ha tis myna memuk ulkuma r ?
/*let StrVal = "what is my name mukulkumar";
let NoSpaceStr = "";
// Remove spaces from the original string
for (let i = 0; i < StrVal.length; i++) {
  if (StrVal[i] !== " ") {
    NoSpaceStr += StrVal[i];
  }
}
let LenCheck = 1;
let Diff = 3;
let NewStr = "";
for (let i = 0; i < NoSpaceStr.length; i++) {
  NewStr = NewStr + NoSpaceStr[i];
  if (NewStr.length === LenCheck) {
    NewStr = NewStr + " ";
    LenCheck = LenCheck + Diff;
    Diff = Diff + 1;
  }
}
console.log(NewStr);*/

//(12) Find Prime Number Lower to Upper Value ?
/*var L = 10,U = 20;
for (var x = L + 1; x <= U - 1; x++) {
  for (var i = 2; i < x; i++) {
    if (x % i == 0) break;
  }
  if (i == x) {
    console.log(x);
  }
}*/

//(13) sum of Two Prime Number ?
/*var x = 34;
// Start a for loop with variable i initialized to 2, loop while i <= x - i, and update i using nextPrime(i)
for (var i = 2; i <= x - i; i = nextPrime(i)) {
  // Check if x - i is prime using the isPrime function
  if (isPrime(x - i))
    // If true, log the equation i + (x - i) = x to the console
    console.log(`${i} + ${x - i} = ${x}`);
}
function nextPrime(n) {
  // Increment n by 1 until a prime number is found
  do {
    n++;
  } while (!isPrime(n)); // Repeat while n is not prime
  return n; // Return the next prime number found
}
function isPrime(n) {
  //check if a number n is prime
  for (var i = 2; i < n; i++) {
    // If n is divisible by any i, n is not prime
    if (n % i === 0) return false;
  }
  return true; // If no divisors found, n is prime
}*/

//(14) Sum of All Prime Number ?
/*var sum = 0;
for (var i = 1; i <= 19; i++) {
  for (var j = 2; j < i; j++) {
    if (i % j == 0) break;
  }
  if (i == j) {
    sum = sum + i;
    console.log(`Prime Number = ${i}`);
  }
}
console.log(`Sum of All Prime Number = ${sum}`);*/

//(15) Find the Alternet Prime Number Then Sum of All Prime Number ?
/*var sum = 0;
function AlternetPrime(L, U) {
  var p = 0;
  for (var i = L; i <= U; i++) {
    var count = 0;
    for (var j = 1; j <= U; j++) {
      if (i % j === 0) {
        count++;
      }
    }
    if (count <= 2) {
      p++;
      if (p % 2 !== 0) {
        sum = sum + i;
        console.log(i);
      }
    }
  }
}
AlternetPrime(2, 20);
console.log(`Sum of All Prime Number :- ${sum}`);*/

//(16)Find The Co-Prime Number ?
/*var a = 15,
  b = 8,
  min;
min = a < b ? a : b;
for (var i = 2; i <= min; i++) {
  if (a % i == 0 && b % i == 0) {
    break;
  }
}
if (i == min + 1) {
  console.log(`A and B are Co-Prime :- ${a} = ${b}`);
} else {
  console.log(`A and B are Not Co-Prime :- ${a} = ${b}`);
}*/

//(17) Google Interview question ? Find output = 1 11 21 1211 111221 312211 13112221
/*function getNthTerm(n) {
  if (n < 0) {
    console.log("Invalid Inputs");
  }
  if (n === 1) {
    return "1";
  }
  let result = "1";
  for (let i = 1; i < n; i++) {
    let current = "";
    let count = 1;
    for (let j = 0; j < result.length; j++) {
      if (result[j] === result[j + 1]) {
        count++;
      } else {
        current += count + result[j];
        count = 1;
      }
    }
    result = current;
  }
  return result;
}
// Generating the sequence up to the 10th term
for (let i = 1; i <= 8; i++) {
  console.log(getNthTerm(i));
}*/

//(18)Interview Find the Given array of object & remove null undefind "" 0 NaN ?
/*const books = [
  {
    id: 1,
    price: 300,
    title: "proper github using",
    subtitle: undefined,
    author: "Mohan kumar",
    publised: "2020-3-3",
    publiser: "Rohan kumar",
    pages: 400,
    countery: NaN,
    address: null,
    StateCode: "",
    ZipCode: 0,
    description: "This is coding parpase book",
  },
];
// Function to create a new object without NaN, null, and undefined values
const filterObject = (obj) => {
  const filteredObj = {};
  for (const key in obj) {
    if (
      obj[key] !== null &&
      obj[key] !== undefined &&
      obj[key] !== "" &&
      obj[key] !== 0 &&
      !Number.isNaN(obj[key])
    ) {
      filteredObj[key] = obj[key];
    }
  }
  return filteredObj;
};
// Create a new array with filtered objects
const filteredBooks = books.map((book) => filterObject(book));
console.log(filteredBooks);

// This Funclity to Achive Conditional Product chack?
const result = filteredBooks.map((item, index) => {
  if (item.price >= 300) {
    return { [index]: { price: item.price, publiser: item.publiser } };
  }
  return null; // Return null for items that do not meet the condition
});
console.log(result);*/

//(19) Find CRUD Operation in a given Arras ?
// Function to insert a value into an array at a specific index
/*function insertValue(array, index, value) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i === index) {
      newArray.push(value);
    }
    newArray.push(array[i]);
  }
  return newArray;
}

// Function to update a value in an array at a specific index
function updateValue(array, index, value) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i === index) newArray.push(value);
    else newArray.push(array[i]);
  }
  return newArray;
}

// Function to delete a value from an array at a specific index
function deleteValue(array, index) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i !== index) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
// Function to find missing numbers in an array
function findMissingNumbers(array) {
  let maxNum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxNum) {
      maxNum = array[i];
    }
  }
  const missingNumbers = [];
  for (let i = 1; i <= maxNum; i++) {
    let found = false;
    for (let j = 0; j < array.length; j++) {
      if (array[j] === i) {
        found = true;
        break;
      }
    }
    if (!found) {
      missingNumbers.push(i);
    }
  }
  return missingNumbers;
}

let arr = [1, 2, 3, 5, 6];
console.log("Original array:", arr);
arr = insertValue(arr, 3, 4); //Inserting
console.log("Array after insertion:", arr);
arr = updateValue(arr, 2, 10); //Updating
console.log("Array after update:", arr);
arr = deleteValue(arr, 1); //Deleting
console.log("Array after deletion:", arr);
let missing = findMissingNumbers(arr); //Finding missing numbers
console.log("Missing numbers:", missing);*/

//(20) How to Move/Rotate an Array element from one place to another position ?
/*function rotateArray(arr, index) {
  const Len = arr.length;
  const EmptyArr = [];
  for (let i = 0; i < Len; i++) {
    const newIndex = (i + index) % Len;
    EmptyArr[newIndex] = arr[i];
  }
  return EmptyArr;
}
const array = [1, 2, 3, 4, 5];
const rotations = 3;
const rotatedArray = rotateArray(array, rotations);
console.log(rotatedArray);*/

//(21) Find the Element in a given arrays Exist or not ?
/*function CheckEle(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return true;
    }
  }
  return false;
}
const myArray = [1, 2, 3, 4, 5];
const EleFind = 4;
if (CheckEle(myArray, EleFind)) {
  console.log(`${EleFind} = exists in the array.`);
} else {
  console.log(`${EleFind} = not exist in the array.`);
}*/

//(22) Find 1 and 23 are numbers in the string which is added to get the sum as 24.
/*function NumberSum(str) {
  let sum = 0;            
  let currentNumber = 0;  
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);  
    if (char >= "0" && char <= "9") {
      // If the character is a digit, convert it to an integer and update currentNumber
      currentNumber = currentNumber * 10 + parseInt(char, 10);
    } else {
      // If the character is not a digit (i.e., it's a non-digit character)
      // Add currentNumber to sum and reset currentNumber to 0
      sum = sum + currentNumber;
      currentNumber = 0;
    }
  }
  // Add the last accumulated currentNumber to sum after the loop ends
  sum = sum + currentNumber;
  return sum;
}
const InputStr = "1abc23"; 
const Total = NumberSum(InputStr);  
console.log(`Only for Number Sum = ${Total}`); 
// Output: 24*/

//(23) Find Missing Number in a Given array?
/*function missArrNumber(val) {
  var len = val.length;
  var total = ((len + 2) * (len + 1)) / 2;
  for (var i = 0; i < len; i++) {
    total = total - arr[i];
  }
  return total;
}
let arr = [2, 3, 6, 5, 1];
const Result = missArrNumber(arr);
console.log(`Messing Number In Array = ${Result}`);*/

//(24) Print Duplicate Value find in Arrays ?
/*function DuplicateValue(arr) {
  const len = arr.length;
  let newArr = [];
  let index = 0;

  for (var i = 0; i < len - 1; i++) {
    for (var j = i + 1; j < len; j++) {
      if (arr[i] === arr[j]) {
        newArr[index] = arr[i];
        index++;
      }
    }
  }
  return newArr;
}
let Arr = [2, 3, 1, 4, 1, 2, 5, 6, 3];
const Res = DuplicateValue(Arr);
console.log(`Duplicate Value In Array Find = ${Res}`);*/

//(25) How to Remove/Delete an Element from an Array at a specific index
/*function RemoveIndex(array, index) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i !== index) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
let arr = [2, 4, 5, 7, 8, 6];
const Index = 3;
let Result = RemoveIndex(arr, Index);
console.log(`Remove Value In Array :- ${Result}`);*/

//(26) How to sum of Individual Row index value in given Array
/*function SumIndividualRow(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr[i].length; j++) {
      sum = sum + arr[i][j];
    }
    result.push(sum);
  }
  return result;
}
let arr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const Result = SumIndividualRow(arr1);
console.log(`Sum of Indiviual Row Index :- ${Result}`);*/

//(27) How to sum of Particuler Column index value in given Array Sum?
/*function SumParticularColumn(arr, index) {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    //if (arr[i][index] !== undefined) {
    sum = sum + arr[i][index];
    //}
  }
  return sum;
}
var arr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const columnIndex = 1;
const Result = SumParticularColumn(arr1, columnIndex);
console.log(`Sum of Indiviual Index :- ${Result}`);*/

//(28) How to Sum of All Index value in 2D Array ?
/*function sumof2DArray(arr) {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      sum = sum + arr[i][j];
    }
  }
  return sum;
}
var array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var Result = sumof2DArray(array);
console.log(`Sum of Totle number in Array :- ${Result}`);*/

//(29) Check for Pair in an Array with a given sum Target 4+2 = 6, 1+5 = 6, 3+3 = 6
/*function arrayPair(arr, sum) {
  for (var i = 0; i < arr.length; i++) {
    var first = arr[i];
    for (var j = i + 1; j < arr.length; j++) {
      var second = arr[j];
      if (first + second == sum) {
        console.log(
          `First :- ${first} and Second :-  ${second} And Total Sum of ${sum}`
        );
      }
    }
  }
}
var array = [2, 4, 3, 5, 6, 1, 3, 7, 8, 9];
arrayPair(array, 6);*/

//(or) Sum of Pair Array Value input ([10, 50, 20, 40, 50, 60, 70, 30], 50) , o/p [[ 10, 40 ],[ 20, 30 ]]
/*let SumOfPair = (arr, S) => {
  var sum = [];
  for (let i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (S == arr[i] + arr[j]) {
        sum.push([arr[i], arr[j]]);
      }
    }
  }
  console.log(sum);
};
SumOfPair([10, 50, 20, 40, 50, 60, 70, 30], 50);*/

//(30) How to Find Nth Second Length element from an Array ?
/*const NthGreatest = (arr, n) => {
  for (var i = 0; i < n; i++) {
    let temp = arr[i];
    let maxIndex = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[maxIndex]) {
        maxIndex = j;
      }
    }
    arr[i] = arr[maxIndex];
    arr[maxIndex] = temp;
  }
  return arr[n - 1];
};
console.log(NthGreatest([5, 3, 2, 8, 6], 2));*/

//(or)
/*function findNthLargest(arr, N) {
  arr.sort((a, b) => {
    //console.log(`Comparing ${a} and ${b}: ${b - a}`);
    return b - a;
  });
  return arr[N - 1];
}
const arr = [4, 1, 6, 3, 9, 2];
const N = 2;
const nthLargest = findNthLargest(arr, N);
console.log(`The ${N}th largest number is ${nthLargest}`);*/

//(31) Second Largest number in two Array ?
/*var arr1 = [2, 5, 4, 6, 3, 1, 8];
var arr2 = [5, 4, 7, 2, 3, 1, 9];
function secondlargest(arr1) {
  let arr3 = [...new Set(arr1)].sort((a, b) => a - b);
  return arr3[arr3.length - 2];
}
console.log(secondlargest(arr1));
console.log(secondlargest(arr2));*/

//(32) Armstrong Number 1 to 1000
/*for (var n = 1; n <= 1000; n++) {
  var s = 0;
  var x = n;
  while (x != 0) {
    var r = x % 10;
    s = s + Math.pow(r, 3);
    x = Math.floor(x / 10);
  }
  if (s === n) {
    console.log(`Number is Armstrong: ${n}`);
  }
}*/

//(or) Armstrong find Yes or Not
/*const num = 153;
let sum = 0;
let temp = num;
while (temp > 0) {
  let store = temp % 10;
  sum = sum + store * store * store;
  temp = parseInt(temp / 10);
}
if (sum == num) {
  console.log(`${num} is an Armstrong Number`);
} else {
  console.log(`${num} is Not Armstrong Number`);
}*/

//(33) Fibonacci Serises
/*const n = 9;
let n1 = 0,
  n2 = 1,
  nexTerm;
for (var i = 1; i <= n; i++) {
  console.log(n1);
  nexTerm = n1 + n2;
  n1 = n2;
  n2 = nexTerm;
}*/

//(or)
/*function Fibonacci(n) {
  let emptarr = [];
  let a = 0,
    b = 1;
  for (let i = 0; i < n; i++) {
    emptarr.push(a);
    let temp = a;
    a = b;
    b = temp + b;
  }
  return emptarr;
}
const n = 6;
const emptarr = Fibonacci(n);
console.log(emptarr);*/

//(34) Multipel API call in one time using javascript?
/*const p1 = new Promise((resolve, rejects) => {
  resolve("resolve 1");
});
const p2 = new Promise((resolve, rejects) => {
  resolve("resolve 2");
});
//Promise.all
(async () => {
  try {
    const promises = await Promise.all([p1, p2]);
    console.log(promises);
  } catch (error) {
    console.log(error);
  }
})();*/

//(35) How to Achive this Question (4)(5) = ?
/*function product(x) {
  return function (y) {
    return x * y;
  };
}
console.log(product(4)(5));*/

//(36) Particular Array create, Positive Arr : 9,4,5,0,2 and Negative Arr : -2,-1,-5,-3 ?
/*function PositiveNegativeFiendArray(arr) {
  let positive = [];
  let negative = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      positive.push(arr[i]);
    } else {
      negative.push(arr[i]);
    }
  }
  console.log("Positive Arrays value", positive);
  console.log("Negative Arrays value", negative);
}
PositiveNegativeFiendArray([9, 4, -2, -1, 5, 0, -5, -3, 2]);*/

//(36) Print Alternate Array Index value in JavaScript ?
/*function getEveryNth(arr, nth) {
  const result = [];
  for (let i = 0; i < arr.length; i = i + nth) {
    result.push(arr[i]);
  }
  return result;
}
// output [1, 3, 5]
console.log(getEveryNth([1, 2, 3, 4, 5, 6], 2));
//OutPut [2, 8, 14]
console.log(getEveryNth([2, 4, 6, 8, 10, 12, 14], 3));*/

//(37) Find the Vowels in given String And count Vowels ?
/*function findvalue(inputStr) {
  const vowels = "aeiouAEIOU";
  let vowelsCount = 0;
  let vowelsList = [];
  for (var i = 0; i < inputStr.length; i++) {
    if (vowels.includes(inputStr[i])) {
      vowelsCount++;
      vowelsList.push(inputStr[i]);
    }
  }
  console.log("Vowels: " + vowelsList);
  return vowelsCount;
}
console.log("Count vowels: " + findvalue("Ajit kuMAr"));*/

//(38) Convert null value to Number
// let myval = null;
// //console.log(myval);
// const mynumber = myval || 10;
// console.log(mynumber);

// (39) Find the intersection of two arrays using loops in JavaScript
/*function findIntersection(arr1, arr2) {
  const intersection = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        intersection.push(arr1[i]);
        break; // Once a match is found, break the inner loop to avoid duplicates
      }
    }
  }
  return intersection;
}
// Example usage:
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
const intersection = findIntersection(array1, array2);
console.log(intersection); // Output: [4, 5]
*/

//(40) DSA Insertion Sort Program
/*function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j > -1 && current < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}
const Result = insertionSort((arr = [10, 4, 15, 6, 5]));
console.log("Sorting Array = " + Result);*/

//(or) Insertion Sort Program
/*const insertion_Sort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    let j = i - 1;
    let temp = nums[i];
    while (j >= 0 && nums[j] > temp) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = temp;
  }
  return nums;
};
console.log(insertion_Sort([3, 0, 2, 5, -1, 4, 1]));*/

//(41) DSA Bubble Sort program
/*function bubbleSort(a) {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - 1 - i; j++) {
      if (a[j] > a[j + 1]) {
        let temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
      }
    }
  }
  console.log(a);
}
bubbleSort((arr = [34, 15, 28, 8, 4]));*/

//(42) Interview , Print Sequence Way ?
/*function transformArray(arr) {
  arr.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  // Separate the sorted array into lowercase and uppercase arrays
  let lowercase = arr.filter((char) => char === char.toLowerCase());
  let uppercase = arr.filter((char) => char === char.toUpperCase());
  // Combine the arrays with lowercase first, then uppercase
  return [...lowercase, ...uppercase];
}
let input = ["A", "b", "s", "Q", "e", "a", "S", "E", "x"];
let output = transformArray(input);
console.log(output);*/

//(43)Interview, Given string. Print Particular String Words ?
/*function ParticularString(sentence, conditionIndex) {
  if (!sentence || sentence.length <= 0) {
    console.error("Empty string. Please enter a string.");
    return;
  }
  if (typeof conditionIndex !== "number" || conditionIndex < 0) {
    console.error("Index non-negative number");
    return;
  }

  const words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > conditionIndex) {
      let EmpString = "";
      for (let j = 0; j < words[i].length; j++) {
        EmpString = EmpString + words[i][j];
      }
      console.log(EmpString);
    }
  }
}
const inputSentence = "This is a ajit developer for kumar";
const conditionIndex = 5;
ParticularString(inputSentence, conditionIndex);*/

//(44) agni TL verifact company Find the output  firdt Object create ?
//[{d1:"TEST",d2:"TEST",d3:"TEST"},{d1:"Test",d2:"s1",d3:"24"},{d1:"53",d2:"true",d3:"Friend"}]
/* 
const obj = {
  d1: "TEST",
  d2: "TEST",
  d3: "TEST",

  d1_1: "Test",
  d2_1: "s1",
  d3_1: "24",

  d1_2: "53",
  d2_2: "true",
  d3_2: "Friend",

  d1_2: "53",
  d2_2: "true",
  d3_2: "Friend",

  d1__5: "p11",
  d2__5: "555",
  d3__5: "mern",
};

const EmpArr = []; // Create Empty array
const FilterValue = Object.keys(obj) // Object Constructor
  .map((key) => key.split("_")[1]) // Split each key at "_" and take the second part //[1] accesses the second element
  .filter((value, index, self) => self.indexOf(value) === index); // Filter out duplicate values

for (const group of FilterValue) {
  const item = {}; // Create Empty object
  for (const key in obj) {
    const [base, groupNum] = key.split("_");
    if ((groupNum || "") === (group || "")) {
      item[base] = obj[key];
    }
  }
  //console.log(item);
  EmpArr.push(item);
}
console.log(EmpArr);
*/
