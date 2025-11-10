//(1) Find the Array of Max And Min value Without Method used
/*var Arr = [1, 5, 4, 3, 8, 10];
var max = Arr[0];
for (let i = 0; i < Arr.length; i++) {
  if (max < Arr[i]) {
    max = Arr[i];
  }
}
console.log(`Largest value of Array :- ${max}`);*/

//(2)
/*let stri = [2, 1, 3, 4, 5, 1];
var max = Math.max(...stri);
console.log(`Max value in Array:- ${max}`);

var sortArray = new Set(stri);
console.log(sortArray);*/

//(3) Find the value of max and min value find the array
/*var array = [10, 30, 20, 50, 40, 5, 1];
var max = array[0];
var min = array[0];

for (var i = 0; i <= array.length; i++) {
  if (max < array[i]) {
    max = array[i];
  }
  if (min > array[i]) {
    min = array[i];
  }
}
console.log(max);
console.log(min);*/

//(or mathod used)
/*var arr = [10, 30, 40, 50, 20, 50, 10];
var array = new Set(arr);
if (array) {
  console.log(Math.min(...array));
}
if (array) {
  console.log(Math.max(...array));
}*/

//(4) Find the value of Even or Odd number 4 types
/*var n = 4;
if (n & 1) {
  console.log("Odd");
} else {
  console.log("Even");
}*/

//(or)
/* array = [2, 4, 5, 8, 6, 7, 3, 1];
for (var i = 0; i < array.length; i++) {
  if (array[i] % 2 == 0) {
    console.log("Even number = " + array[i]);
  }
  if (array[i] % 2 != 0) {
    console.log("Odd Number = " + array[i]);
  }
}*/

//(or)
/*var n = 5;
if (parseInt(n / 2) * 2 == n) {
  console.log("Even Number");
} else {
  console.log("Odd Number");
}*/

//(or)
// var n = 4;
// n % 2 === 0 ? console.log("Even Number") : console.log("Odd Number");

//(or) filter method used
/*var array = [5, 4, 8, 7, 9, 1, 2, 3];
var evan = array.filter(function (element) {
  return element % 2 === 0;
});
var odd = array.filter(function (element) {
  return element % 2 != 0;
});
// console.log(evan);
// console.log(odd);
var resuEvan = evan.sort((a, b) => a - b);
console.log(resuEvan);
var resuOdd = odd.sort((a, b) => a - b);
console.log(resuOdd);*/

//(5) Find the value of Year is Leap  or Not
// var year = 2020;
// if (year % 400 === 0 || (year % 4 === 0 && year % 100 != 0)) {
//   console.log("Year is Leap");
// } else {
//   console.log("Not Year is Leap");
// }

//(or)
// var year = 2021;
// if (year % 4) {
//   console.log("Year is note Leap");
// } else if (year % 100) {
//   console.log("Year is Leap");
// } else if (year % 400) {
//   console.log("Year is Note Leap");
// } else {
//   console.log("Year is Leap");
// }

//(6) Find the value of Alphanumarick or not (hgshgsd4554) (ghdh@4254)
/*var string = "Ajit@1234";
var A = 0,
  D = 0;
for (var i = 0; string[i]; i++) {
  if (
    (string[i] >= "a" && string[i] <= "z") ||
    (string[i] >= "A" && string[i] <= "Z")
  )
    A = 1;
  if (string[i] >= "0" && string[i] <= "9") D = 1;
}
if (A == 1 && D == 1) console.log("Number is Alphanumric = " + string);
else console.log("Number is Not Alphanumeric = " + string);*/

//(7) All program in swithch case find concept cleares
// var vowles = "u";
// var conver = vowles.toUpperCase();
// switch (conver) {
//   case "A":
//     console.log("a is Vowels letter");
//     break;
//   case "E":
//     console.log("e is Vowels letter");
//     break;
//   case "I":
//     console.log("i is Vowels letter");
//     break;
//   case "O":
//     console.log("o is Vowels letter");
//     break;
//   case "U":
//     console.log("u is Vowels letter");
//     break;
//   default:
//     console.log("Not vowle letter");
// }

//(or)
// let day = 6;
// switch (day) {
//   case 0:
//     day = "Sunday";
//     console.log(day);
//     break;
//   case 1:
//     day = "Monday";
//     console.log(day);
//     break;
//   case 2:
//     day = "Tuesday";
//     console.log(day);
//     break;
//   case 3:
//     day = "Wednesday";
//     console.log(day);
//     break;
//   case 4:
//     day = "Thursday";
//     console.log(day);
//     break;
//   case 5:
//     day = "Friday";
//     console.log(day);
//     break;
//   case 6:
//     day = "Saturday";
//     console.log(day);
//     break;
//   default:
//     console.log("Envilet value plz Try agin");
// }

//(8) Total Sum of value
// var count = 0;
// for (var i = 0; i <= 4; i++) {
//   count = count + i;
// }
// console.log(count);

//(9) Decrement value
// function decr(a) {
//   var b = a;
//   for (var i = b; i >= 0; i--) {
//     console.log(i);
//   }
// }
// decr(10);

//(or) Increment value
/*function incr(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
incr(10);*/

//(10) program for a simple calculator
/*const operator = "/";
const number1 = 8;
const number2 = 6;
let result;

switch (operator) {
  case "+":
    result = number1 + number2;
    console.log(`${number1} + ${number2} = ${result}`);
    break;
  case "-":
    result = number1 - number2;
    console.log(`${number1} - ${number2} = ${result}`);
    break;
  case "*":
    result = number1 * number2;
    console.log(`${number1} * ${number2} = ${result}`);
    break;
  case "/":
    result = number1 / number2;
    console.log(`${number1} / ${number2} = ${result}`);
    break;
  default:
    console.log("Invalid operator");
}*/

//(or) markes total add in subjects
// var subject = "m";
// var math = 90;
// var physic = 90;
// var chemestry = 60;
// var english = 90;
// var hindi = 40;
// switch (subject) {
//   case "m":
//     var result = math + physic + chemestry + english + hindi;
//     if (result >= 350 && result <= 400) {
//       console.log("Excellent :- " + result);
//     } else {
//       console.log("Very Good :- " + result);
//     }
//     break;
//   case "p":
//     var result = math + physic + chemestry + english + hindi;
//     if (result >= 300 && result <= 350) {
//       console.log("Very Good :- " + result);
//     } else {
//       console.log("Good :- " + result);
//     }
//     break;

//   case "c":
//     var result = math + physic + chemestry + english + hindi;
//     if (result >= 300 && result <= 250) {
//       console.log("Good :- " + result);
//     } else {
//       console.log("Very Poor:- " + result);
//     }
//     break;

//   case "e":
//     var result = math + physic + chemestry + english + hindi;
//     if (result >= 250 && result <= 225) {
//       console.log("Very Poor:- " + result);
//     } else {
//       console.log("Passed :- " + result);
//     }
//     break;

//   case "h":
//     var result = math + physic + chemestry + english + hindi;
//     if (result >= 225 && result <= 224) {
//       console.log("Very Poor :- " + result);
//     } else {
//       console.log("Not Passed :- " + result);
//     }
//     break;
//   default:
//     console.log("Error ");
// }

//(or) Find Age Using condition of Age Employees
// var age = "B";
// var AgeRange = 18;
// switch (age) {
//   case "A":
//     if (AgeRange >= 1 && AgeRange <= 17) {
//       console.log("This Employee Not Applicable In this Fome :- " + AgeRange);
//     } else {
//       console.log("Plz Enter the Currect Value :");
//     }
//     break;
//   case "B":
//     if (AgeRange >= 18 && AgeRange <= 25) {
//       console.log("This Employee Applicable in this fome :- " + AgeRange);
//     }
//     break;
//   case "C":
//     if (AgeRange >= 26 && AgeRange <= 40) {
//       console.log("This Employee Applicable in this fome :- " + AgeRange);
//     }
//     break;
//   case "D":
//     if (AgeRange >= 41 && AgeRange <= 100) {
//       console.log("This Employee Applicable in this fome :- " + AgeRange);
//     } else {
//       console.log("Only for Applicable Employee Age (18 to 100) Sorry :");
//     }
//     break;
//   default:
//     console.log("Error plz Change this value ");
// }

//(9) Find The First N even number Reverse order
// var even = 5;
// for (var i = even; i >= 1; i--) {
//   console.log(i * 2);
//   //console.log(Math.pow(i * 2, 2));
// }

//(or)
// var n = 5;
// while (n) {
//   //console.log(n * 2);
//   console.log(Math.pow(n * 2, 2));
//   n--;
// }

//(10) Find The First N odd number Reverse order
// var even = 5;
// for (var i = even; i >= 1; i--) {
//   console.log(2 * i - 1);
// }

//(or)
// var n = 5;
// while (n) {
//   console.log(2 * n - 1);
//   n--;
// }

//(11) Factorial of a number
/*var f = 1,
  n = 5;
while (n) {
  f = f * n;
  n--;
}
console.log("Factorial of Number :- " + f);*/

//(or)
/*var n = 5,
  f = 1;
for (var i = 1; i <= n; i++) {
  f = f * i;
  //console.log(f);
}
console.log("Factorial of number :- " + f);*/

// //(or) Find the value of Even Or Odd number in Total Factorial number
/*function factorial(n) {
  var f = 1;
  while (n) {
    f = f * n;
    n--;
  }
  return f;
}
var result = factorial(5);
console.log("Factorial of number : - " + result);
if (result % 2 === 0) {
  console.log("Even Number : - " + result);
} else {
  console.log("Odd Number : - " + result);
}*/

//(or) Find value of Only Even Number Factorial  Or Only Odd Number Factorial
/*function factorial(n) {
  var f = 1;
  while (n) {
    f = f * n;
    if (n % 2 === 0) {
      console.log(`Even Number 👎 ${n} 👍 , Factorial number = ${f} `);
    } else {
      console.log(`Odd Number 👎 ${n} 👍 , Factorial Number = ${f} `);
    }
    n--;
  }
}
factorial(5);*/

//(12) Swap two number
// var a = 10,
//   b = 20;
// console.log(`Oriznal Value A = ${a} and B = ${b}`);
// [b, a] = [a, b]; //array destructuring
// console.log(`Swap Value A = ${a} and B = ${b}`);

//(or)
// var a = 10,
//   b = 20,
//   temp;
// temp = a;
// a = b;
// b = temp;
// console.log(`Swap value A = ${a} and B = ${b}`);

//(or)
// var a = 20,
// b = 10;
// b = b + a;
// a = b - a;
// b = b - a;
// console.log(`swap value A = ${a} and B = ${b}`);

//(or)
// var a = 10,
//   b = 20;
// b = a + b - (a = b);
// console.log(`swap number A = ${a} And B = ${b}`);

//(or) Swap two number and find Even or odd number
// var a = 11,
//   b = 10;
// b = a + b - (a = b);
// if (a !== b) {
//   console.log(`swap number And Find Even or Odd number A = ${a} B = ${b}`);
// }
// if (a % 2 == 0) {
//   console.log(`swap number And Find Even number A = ${a}`);
// }
// if (b % 2 != 0) {
//   console.log(`swap number And Find Odd number B = ${b}`);
// }

//(13)Stare Pattern program
/*let str = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    if (j <= i) {
      str += "*";
    }
  }
  str += "\n";
}
console.log(str);*/

//(or)
/*let str = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    if (j <= 6 - i) {
      str += "*";
    }
  }
  str += "\n";
}
console.log(str);*/

//(or) Short program
// for (var i = 0; i <= 4; i++) {
//   console.log("* ".repeat(i));
// }

//(14) Find Array
//// ---- find middle array ----
/*function findMiddleElement(array) {
  if (array.length === 0) {
    return null;
  }
  var middleIndex = Math.floor(array.length / 2);
  return array[middleIndex];
}
var myArray = [1, 2, 3, 40, 5, 6, 7];
var middleElement = findMiddleElement(myArray);
console.log(middleElement);*/

// (15) ----  find the power array ----
// var sqr = [];
// var n = [1, 2, 3, 5, 6, 7];
// var p = 2;
// for (let i = 0; i < n.length; i++) {
//   sqr.push(Math.pow(n[i], p));
//   p++;
// }
// console.log(sqr);

//(16) string is palindrome or not
/*function palindrome(pali) {
  var len = pali.length;
  for (var i = 0; i < len / 2; i++) {
    if (pali[i] !== pali[len - 1 - i]) {
      return "Not Palindrome";
    }
  }
  return "Palindrome";
}
console.log(palindrome("malayalam"));*/

//(17) Sum of squares first n natural numbers
// 1^1+2^1+3^1+4^1+5^1...
/*var n = 5,
  s = 0;
for (var i = 0; i <= n; i++) {
  s = s + i * 1;
}
console.log(s);*/

//(or) = 1^1+2^1+3^1+4^1+5^1...
//Find tha value 1^1+3^1+5^1 = 9 ,  2^1+4^1 = 6
/*var n = 5,
  s = 0,
  o = 0;
for (var i = 1; i <= n; i++) {
  if (i % 2 === 0) {
    s = s + i;
    console.log(`Even Number = ${i}`);
  } else if (i % 2 != 0) {
    o = o + i;
    console.log(`Odd Number = ${i}`);
  }
}
console.log("Total Sum of Even Number = " + s);
console.log("Total Sum of Odd Number = " + o);*/

//(or) = 1^2+2^2+3^2+...
// var n = 5,
//   s = 0;
// for (var i = 0; i <= n; i++) {
//   s = s + i * i;
// }
// console.log(s);

//(or) = 1^2+2^2+3^2+...
// //Find tha value 1^2+3^2+5^2... = 35 ,  2^2+4^2... = 20
// var n = 5,
//   s = 0,
//   o = 0;
// for (var i = 1; i <= n; i++) {
//   if (i % 2 === 0) {
//     s = s + i * i;
//     console.log(`Even Number = ${i * i}`);
//   } else if (i % 2 != 0) {
//     o = o + i * i;
//     console.log(`Odd Number = ${i * i}`);
//   }
// }
// console.log("Total Sum of Even Number = " + s);
// console.log("Total Sum of Odd Number = " + o);

//(or) = 1^3+2^3+3^3+4^3+5^3
// var n = 5,
//   s = 0;
// for (var i = 0; i <= n; i++) {
//   s = s + i * i * i;
// }
// console.log(s);

//(or) = Find tha value 1^3+3^3+5^3... = 153 ,  2^3+4^3... = 72
// var n = 5,
//   s = 0,
//   o = 0;
// for (var i = 1; i <= n; i++) {
//   if (i % 2 === 0) {
//     s = s + i * i * i;
//     console.log(`Even Number = ${i * i * i}`);
//   } else if (i % 2 != 0) {
//     o = o + i * i * i;
//     console.log(`Odd Number = ${i * i * i}`);
//   }
// }
// console.log("Total Sum of Even Number = " + s);
// console.log("Total Sum of Odd Number = " + o);

//(18) Table Print
// var n = 1;
// for (var i = 1; i <= 10; i++) {
//   console.log(`Table ${n} * ${i}  = ${n * i}`);
// }

//(19) Calculate sum of digits of a numbers 132
// var x = 135,
//   s = 0,
//   r;
// while (x != 0) {
//   r = x % 10;
//   s = s + r;
//   x = x / 10;
// }
// console.log(s);

//(20)Find the root of Quridite equation
// var a = 12,
//   b = 8,
//   c = 6;
// var d = d * d - a * c;
// if (d > 0) {
//   console.log("Real and Distent Root");
// } else if (d == 0) {
//   console.log("Real and Equal Root");
// } else {
//   console.log("Imagnary Root");
// }

//(21) API Data Fetch  and Condition apply interviw question (Object create and find data)
// let student = [
//   {
//     id: 1,
//     Prise: 100,
//     Age: 26,
//     StudentName: "Ajit kumar",
//     Email: "ajitkumar@gmail.com",
//     MobileNumbar: 7879788975,
//   },
//   {
//     id: 2,
//     Prise: 200,
//     Age: 25,
//     StudentName: "Ram kumar",
//     Email: "ramkumar@gmail.com",
//     MobileNumbar: 7879788974,
//   },
//   {
//     id: 3,
//     Prise: 300,
//     Age: 22,
//     StudentName: "Chhotu kumar",
//     Email: "chhotukumar@gmail.com",
//     MobileNumbar: 7879788971,
//   },
//   {
//     id: 4,
//     Prise: 400,
//     Age: 46,
//     StudentName: "Krishna kumar",
//     Email: "krishanakumar@gmail.com",
//     MobileNumbar: 7879788970,
//   },
//   {
//     id: 5,
//     Prise: 500,
//     Age: 24,
//     StudentName: "Patna kumar",
//     Email: "patnakumar@gmail.com",
//     MobileNumbar: 7874788972,
//   },
//   {
//     id: 6,
//     Prise: 600,
//     Age: 20,
//     StudentName: "Amit kumar",
//     Email: "amitkumar@gmail.com",
//     MobileNumbar: 7879788945,
//   },
// ];

// //(i) Answer :- key value Print and condition apply depends upon asking question
// const Result = student.filter((value) => {
//   //console.log(value);
//   return value.Prise >= 400;
// });
// console.log(Result);

//(or) Books API Details and Fetch data using Condition
/*let books = [
  {
    Prise: "400",
    title: "Eloquent JavaScript, Third Edition",
    subtitle: "A Modern Introduction to Programming",
    author: "Marijn Haverbeke",
    published: "2018-12-04T00:00:00.000Z",
    publisher: "No Starch Press",
    pages: 472,
    description:
      "JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
    website: "http://eloquentjavascript.net/",
  },
  {
    Prise: "500",
    title: "Practical Modern JavaScript",
    subtitle: "Dive into ES6 and the Future of JavaScript",
    author: "Nicolás Bevacqua",
    published: "2017-07-16T00:00:00.000Z",
    publisher: "O'Reilly Media",
    pages: 334,
    description:
      "To get the most out of modern JavaScript, you need learn the latest features of its parent specification, ECMAScript 6 (ES6). This book provides a highly practical look at ES6, without getting lost in the specification or its implementation details.",
    website: "https://github.com/mjavascript/practical-modern-javascript",
  },
  {
    Prise: "600",
    title: "Understanding ECMAScript 6",
    subtitle: "The Definitive Guide for JavaScript Developers",
    author: "Nicholas C. Zakas",
    published: "2016-09-03T00:00:00.000Z",
    publisher: "No Starch Press",
    pages: 352,
    description:
      "ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.",
    website: "https://leanpub.com/understandinges6/read",
  },
  {
    Prise: "700",
    title: "Speaking JavaScript",
    subtitle: "An In-Depth Guide for Programmers",
    author: "Axel Rauschmayer",
    published: "2014-04-08T00:00:00.000Z",
    publisher: "O'Reilly Media",
    pages: 460,
    description:
      "Like it or not, JavaScript is everywhere these days -from browser to server to mobile- and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
    website: "http://speakingjs.com/",
  },
  {
    Prise: "850",
    title: "Learning JavaScript Design Patterns",
    subtitle: "A JavaScript and jQuery Developer's Guide",
    author: "Addy Osmani",
    published: "2012-08-30T00:00:00.000Z",
    publisher: "O'Reilly Media",
    pages: 254,
    description:
      "With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
    website:
      "http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/",
  },
  {
    Prise: "800",
    title: "You Don't Know JS Yet",
    subtitle: "Get Started",
    author: "Kyle Simpson",
    published: "2020-01-28T00:00:00.000Z",
    publisher: "Independently published",
    pages: 143,
    description:
      "The worldwide best selling You Don't Know JS book series is back for a 2nd edition: You Don't Know JS Yet. All 6 books are brand new, rewritten to cover all sides of JS for 2020 and beyond.",
    website:
      "https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/get-started",
  },
  {
    Prise: "300",
    title: "Pro Git",
    subtitle: "Everything you neeed to know about Git",
    author: "Scott Chacon and Ben Straub",
    published: "2014-11-18T00:00:00.000Z",
    publisher: "Apress; 2nd edition",
    pages: 458,
    description:
      "Pro Git (Second Edition) is your fully-updated guide to Git and its usage in the modern world. Git has come a long way since it was first developed by Linus Torvalds for Linux kernel development. It has taken the open source world by storm since its inception in 2005, and this book teaches you how to use it like a pro.",
    website: "https://git-scm.com/book/en/v2",
  },
  {
    Prise: "200",
    title: "Rethinking Productivity in Software Engineering",
    subtitle: "",
    author: "Caitlin Sadowski, Thomas Zimmermann",
    published: "2019-05-11T00:00:00.000Z",
    publisher: "Apress",
    pages: 310,
    description:
      'Get the most out of this foundational reference and improve the productivity of your software teams. This open access book collects the wisdom of the 2017 "Dagstuhl" seminar on productivity in software engineering, a meeting of community leaders, who came together with the goal of rethinking traditional definitions and measures of productivity.',
    website: "https://doi.org/10.1007/978-1-4842-4221-6",
  },
];

const Result = books.map(CallFunction);
var newvalue = Result.filter((va) => {
  return va;
});
console.log(newvalue);

function CallFunction(item) {
  if (item.Prise >= 700 && item.Prise <= 850) {
    return [item.Prise, item.publisher];
  }
}*/

//(or) Find the value count numbers of JSON object
/*var obj = {
  row: {
    0: {
      Age: 22,
      Name: "Ajit Kumar",
    },
    1: {
      Age: 23,
      Name: "Ram Kumar",
    },
    2: {
      Age: 24,
      Name: "Shita Kumari",
    },
    3: {
      Age: 25,
      Name: "Shiva God",
    },
  },
};*/

//(i)
/*let count = 0;
for (let key in obj.row) {
  console.log(key);
  count++;
}
console.log("Total Length = " + count);*/

// //(ii)
// //JS Object.values() method is used to extract the values of an object's
// //properties and return them as an array.
/*var Result = Object.values(obj.row).filter((item) => {
  //console.log(item);
  if (item.Age >= 24) {
    return [item.Age];
  }
});
console.log(Result);*/

//(or) Count The Number of All Specific keys or value in json
/*let obj = [
  {
    Person: {
      Name: "a",
    },
    pet: {
      Name: "1",
    },
  },
  {
    Person: {
      Name: "b",
    },
    pet: {
      Name: "2",
      color: "red",
    },
  },
];*/

//(i)
// let ItemCount = obj.filter((x) => x["Person"]).length;
// console.log("Person Count = " + ItemCount);

//(ii)
// let ItemCount = obj.filter((x) => x["pet"]).length;
// console.log("Person Count = " + ItemCount);
//(iii)
// let ItemCount = obj.filter((x) => x["pet"] && x["pet"]["color"]).length;
// console.log("Person Count = " + ItemCount);

//(or) Filter an Array of Object a property and condition check
// const People = [
//   { Name: "Ajit kumar", Age: 25 },
//   { Name: "Ram kumar", Age: 26 },
//   { Name: "Chhotu kumar", Age: 27 },
//   { Name: "Rakesh kumar", Age: 28 },
// ];
//(Method used)
// const Result = People.filter((value) => {
//   //console.log(value);
//   return [value.Age == 26];
// });
// console.log(Result);

//(Loop used)
// for (const per of People) {
//   //console.log(per);
//   if (per.Age === 20) {
//     console.log(per);
//   }
// }
// console.log("ERROR");

//(or)Another concept Condation check cncept
/*let obj = {
  Student: [
    {
      Name: "Ajit Kumar",
      Age: "25",
      RollNumber: "123",
      Marks: "100",
    },
    {
      Name: "Ram Kumar",
      Age: "26",
      RollNumber: "1234",
      Marks: "101",
    },
    {
      Name: "Chhotu Kumar",
      Age: "27",
      RollNumber: "12345",
      Marks: "102",
    },
    {
      Name: "Suman Kumar",
      Age: "28",
      RollNumber: "123456",
      Marks: "104",
    },
  ],
};
let newArray = obj.Student.map(function (value) {
  if (value.Age >= 27 && value.Name) {
    return [value.Age, value.Name];
  }
});
console.log(newArray);
const Result = newArray.filter((va) => {
  return va;
});
console.log(Result);*/

//(23) Sum of Two number full explaine binary pe
/*function Add(v1, v2) {
  const n1 = parseInt(v1, 2);
  const n2 = parseInt(v2, 2);
  const sum = n1 + n2;
  return sum;
}
const Result = Add(1011, 1010);
console.log(Result);*/

//(or) Switch case used in Add or substration or multiple and division and modulace
/*function BinaryConcept(operation, v1, v2) {
  const n1 = parseInt(v1, 2);
  const n2 = parseInt(v2, 2);
  switch (operation) {
    case "+":
      return n1 + n2;
    case "-":
      return n1 - n2;
    case "*":
      return n1 * n2;
    case "/":
      return n1 / n2;
    case "%":
      return n1 % n2;
    default:
      return "Invalid operation";
  }
}
const Result = BinaryConcept("+", 1101, 1010);
console.log(Result);*/

// How to convert number system peogram
/*function ConNumSystem(number, fromBase, toBase) {
  let decimalNumber = parseInt(number, fromBase);
  //console.log(decimalNumber);
  switch (toBase) {
    case 2:
      return decimalNumber.toString(2); // Binary
    case 8:
      return decimalNumber.toString(8); // Octal
    case 10:
      return decimalNumber.toString(10); // Decimal
    case 16:
      return decimalNumber.toString(16).toUpperCase(); // Hexadecimal
    default:
      return "Invalid base";
  }
}
let Bin = "101101"; // Binary to Decimal
let Binary = "011001101101"; //Binary to Octal
let OctalNum = "18"; // 18 in octal
let DecimalNum = "11"; // 15 in decimal
let HexNum = "A"; // A in hexadecimal
console.log(`Binary ${Bin} to Dec: ${ConNumSystem(Bin, 2, 10)}`);
console.log(`Binary ${Binary} to Octal: ${ConNumSystem(Binary, 2, 8)}`);
console.log(`Oct ${OctalNum} to Dec: ${ConNumSystem(OctalNum, 8, 10)}`);
console.log(
  `Dec ${DecimalNum} to HexaDec: ${ConNumSystem(DecimalNum, 10, 16)}`
);
console.log(`HexaDec ${HexNum} to Oct: ${ConNumSystem(HexNum, 16, 8)}`);
*/

//(24) All Array Concept Programming
//(i) find the index number method used
/*var array = ["value1", "value2", "value3"];
const res = array.map((value, index) => index);
console.log(res); // [0, 1, 2]*/

//(ii) Updatae value  First or Last Element of Array without method used
/*const array = [10, 20, 30, 40, 50];
for (let i = 0; i < array.length; i++) {
  if (array[i] === 20) {
    array[i] = 25;
  } else if (array[i] === 40) {
    array[i] = 45;
  }
}
console.log(array); // [10, 25, 30, 45, 50]*/

//(iii) replace value of Index number method used
/*const array = [10, 20, 30, 40, 50];
const replacedArray = array.map((value) => {
  if (value === 20) return 25;
  if (value === 40) return 45;
  return value;
});
console.log(replacedArray); // [10, 25, 30, 45, 50]*/

//(iv) Delete Array of Element in particular index number
/*const myArray = [10, 20, 30, 40, 50];
const indexToRemove = 2; // Index of the element you want to remove
if (indexToRemove >= 0 && indexToRemove < myArray.length) {
  myArray.splice(indexToRemove, 1);
}
console.log(myArray); // [10, 20, 40, 50]*/

//(25) Find Missing number in Array
/*function MissingNuber(array) {
  var len = array.length;
  var total = ((len + 2) * (len + 1)) / 2;
  for (var i = 0; i < len; i++) {
    total = total - arr[i];
  }
  return total;
}
var arr = [2, 5, 3, 1, 6];
console.log(MissingNuber(arr));*/

//(or) Find Missing number in Array Output number Check value of odd or Even number
// function MissingNuber(array) {
//   var len = array.length;
//   var total = ((len + 2) * (len + 1)) / 2;
//   for (var i = 0; i < len; i++) {
//     total = total - arr[i];
//   }
//   return total;
// }
// var arr = [2, 5, 4, 1, 6];
// var returnvalue = MissingNuber(arr);
// console.log(`This Number Missing = ${returnvalue}`);
// if (returnvalue % 2 == 0) {
//   console.log(`This Number is Even = ${returnvalue}`);
// } else {
//   console.log(`This Number is Odd = ${returnvalue}`);
// }

//(26) Find Duplicate value in array without Method used
/*let array = [6, 9, 15, 6, 13, 9, 11, 15];
let index = 0,
  newArr = [];
const len = array.length;
function DuplicatesValue(arr) {
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] === arr[j]) {
        newArr[index] = arr[i];
        index++;
      }
    }
  }
  return newArr;
}
var newAr = DuplicatesValue(array);
console.log(newAr);*/

//(or) Find Duplicate value in array without Method used and Even or Odd number find
// let array = [6, 9, 15, 6, 13, 9, 11, 15];
// let index = 0,
//   newArr = [];
// const len = array.length;
// function DuplicatesValue(arr) {
//   for (let i = 0; i < len - 1; i++) {
//     for (let j = i + 1; j < len; j++) {
//       if (arr[i] === arr[j]) {
//         newArr[index] = arr[i];
//         index++;
//       }
//     }
//   }
//   return newArr;
// }
// var newAr = DuplicatesValue(array);
// console.log(newAr);
// const result = [];
// for (let i = 0; i < newAr.length; i++) {
//   if (newAr[i] % 2 === 0) {
//     result.push("Even Number = " + newAr[i]);
//   } else {
//     result.push("Odd Number = " + newAr[i]);
//   }
// }
// console.log(result);

//(or) Find Duplicate value in Array using Method
// function duplicates(arr) {
//   return [...new Set(arr.filter((e, i, a) => a.indexOf(e) !== i))];
// }
// console.log(duplicates([2, 3, 5, 2, 4, 3, 11]));

//(27) Find Add an element to end of Array without Method Used
// var arr = [1, 2];
// var arr = [...arr, 3];
// console.log(arr);

//(or) Array Last index value put/change the value
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// var arr = [...arr1, ...arr2, 10];
// console.log(arr);

//(28) Merge multiple array in one Array and print or Remove Duplicate value or Even,Odd number find
// function MergeArray(arr1, arr2) {
//   let merge = [...arr1, ...arr2];
//   let Result = [...new Set(merge)];
//   let sorting = Result.sort();
//   console.log(`Merge Multiple Array And Duplicate value Remove = ${sorting}`);
// }
// let arr1 = [2, 3, 1, 4, 8],
//   arr2 = [6, 7, 5, 8, 4];
// MergeArray(arr1, arr2);

//(29) Remove the last element in Array with out method used
/*function removeLastElement(arr) {
  const newArray = [];
  for (let i = 0; i < arr.length - 1; i++) {
    newArray[i] = arr[i];
  }
  return newArray;
}
const myArray = [1, 2, 3, 4, 5];
const newArray = removeLastElement(myArray);
console.log(myArray);
console.log(newArray);*/

//(or) Remove the last element in Array method used
// let arr = [2, 5, 4, 3, 1];
// arr.pop(1);
// console.log(arr);

//(30) How to check if an element exists in array or not
/*const myArray = [1, 2, 3, 4, 5];
const result = myArray.indexOf(5);
console.log(result);*/

//(or)
// const myArray = [1, 2, 3, 4, 5];
// const Check = 13;
// if (myArray.includes(Check))
//   console.log(`Exists in the Element = ${Check} `);
// else
//   console.log(`Does not exist in the Element = ${Check}`);

//(31) How to Remove an element from an array at a specific index using Method
// let arr = [2, 4, 5, 6];
// arr.splice(0, 1);
// console.log(arr);

//(or)How to Remove an element from an array at a specific index not used method
/*function removeElementAtIndex(arr, index) {
  if (index >= 0 && index < arr.length) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (i !== index) {
        newArray.push(arr[i]);
      }
    }
    return newArray;
  } else {
    return arr;
  }
}
const myArray = [1, 2, 3, 4, 5];
const indexToRemove = 4;
const newArray = removeElementAtIndex(myArray, indexToRemove);
console.log(newArray);*/

//(32) How to Sum of Each index value in Given Array
/*function sum(arr) {
  var s = 0;
  for (var i = 0; i < arr.length; i++) {
    s = s + arr[i];
  }
  return s;
}
console.log(sum([2, 1, 4, 3, 5]));*/

//(33) How to Sum Row Individual index value in Given Array
/*function sumIndividualIndexes(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
    result.push(sum);
  }
  return result;
}
const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const indexSums = sumIndividualIndexes(myArray);
console.log(indexSums); // Outputs: [6, 15, 24]*/

//(34) How to Sum Column of Particular index value in Given Array using jaascrip
/*function sumAtIndex(arr, index) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][index] !== undefined) {
      sum += arr[i][index];
    }
  }
  return sum;
}
const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const columnIndex = 1; // Index of the column to sum (e.g., index 1 is the second column)
const totalSum = sumAtIndex(myArray, columnIndex);
console.log(totalSum); // Outputs: 15*/

//(35) How to Sum of Even index  value in Given Array using javascript
/*function sumEvenIndexes(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 2) {
    sum += arr[i];
  }
  return sum;
}
const myArray = [1, 2, 3, 4, 5, 6];
const totalSum = sumEvenIndexes(myArray);
console.log(totalSum); // Outputs: 9 (1 + 3 + 5)*/

//(36) How to Sum of Odd index  value in Given Array using javascript
/*function sumOddIndexes(arr) {
  let sum = 0;
  for (let i = 1; i < arr.length; i += 2) {
    sum += arr[i];
  }
  return sum;
}
const myArray = [1, 2, 3, 4, 5, 6];
const totalSum = sumOddIndexes(myArray);
console.log(totalSum); // Outputs: 12 (2 + 4 + 6)*/

//(37) How to Sum of Even or Odd index  value in Given Array using javascript
// function sumIndexes(arr, isEven) {
//   let sum = 0;
//   for (let i = isEven ? 0 : 1; i < arr.length; i += 2) {
//     sum += arr[i];
//   }
//   return sum;
// }
// const myArray = [1, 2, 3, 4, 5, 6];
// const sumOfEvenIndexes = sumIndexes(myArray, true);
// console.log(sumOfEvenIndexes); // Outputs: 9 (1 + 3 + 5)
// const sumOfOddIndexes = sumIndexes(myArray, false);
// console.log(sumOfOddIndexes); // Outputs: 12 (2 + 4 + 6)

//(38) How to Sum of two arrays with individual value using method
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 4];
// let arr3 = arr1.map((value, index) => value + arr2[index]);
// console.log(arr3);

//(39) How to Sum of two arrays with individual value not used method
/*function sumArrays(arr1, arr2) {
  const result = [];
  if (arr1.length !== arr2.length) {
    throw new Error("Arrays must have the same length");
  }
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i] + arr2[i]);
  }
  return result;
}
const array1 = [1, 2, 3],
  array2 = [4, 5, 6];
console.log(sumArrays(array1, array2)); // Outputs: [5, 7, 9]*/

//(40) How to Sum of 2D Array using Method
/*let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let sum = 0;
for (var i = 0; i < arr.length; i++) {
  arr[i].forEach((element) => {
    sum = sum + element;
  });
}
console.log(sum);*/

//(or) How to Sum of 2D Array Not using Method
/*function sum2DArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      sum = sum + arr[i][j];
    }
  }
  return sum;
}
const my2DArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const totalSum = sum2DArray(my2DArray);
console.log(totalSum); // Outputs: 45 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9)*/

//(41) How to Sum of 3D Array
/*let arr3D = [[[1, 2, 3]], [[4, 5, 6]], [[7, 8, 9]]];
let sum = 0;
for (var i = 0; i < arr3D.length; i++) {
  arr3D[i].forEach((element) => {
    for (var j = 0; j < element.length; j++) {
      sum = sum + element[j];
    }
  });
}
console.log(sum);*/

//(42) How to flatter a nested array to a single level using javascript
/*function flattenArray(arr) {
  return [].concat(...arr);
}
const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray); // Outputs: [1, 2, 3, 4, [5, 6]]*/

//(or)
//let arr = [[1, 2],[3, 4],[5, [7, 8, 9]],];
// let flatArray = arr.reduce((acc, curVal) => {
//   return acc.concat(curVal);
// }, []);
//console.log(flatArray);

//(or)
//let arr = [[1, 2],[3, 4],[5, [7, 8, 9]],];
//let flatArray = [].concat(...arr);
//console.log(flatArray);

//(43) Two Array and Find the Different value print (Find Intersection value)
// function differenceOf2Arrays(array1, array2) {
//   var temp = [];
//   array1 = array1.map(Number);
//   array2 = array2.map(Number);
//   for (var i in array1) {
//     if (array2.indexOf(array1[i]) === -1) temp.push(array1[i]);
//   }
//   for (var i in array2) {
//     if (array1.indexOf(array2[i]) === -1) temp.push(array2[i]);
//   }
//   return temp.sort((a, b) => a - b);
// }
// console.log(differenceOf2Arrays([1, 2, 3], [100, 2, 1, 10]));

//(44) Two Array and Find the Commen value print (Find union value Ex:-  {1,2}∪{2,3}={1,2,3})
// var arr1 = [34, 35, 45, 48];
// var arr2 = [48, 55, 49, 34];
// var union = [...new Set([...arr1, ...arr2])];
// console.log(union);

//(46) How to Sort the following Array of Objects (Find By author Sort value)
// var ArrObject = [
//   { Auther: "Mukul", Title: "Nalnda", Id: 2 },
//   { Auther: "Ram", Title: "Gaya", Id: 3 },
//   { Auther: "Sith", Title: "Benganuru", Id: 4 },
//   { Auther: "Ajit", Title: "Patna", Id: 1 },
// ];
// function objSorting(x, y) {
//   if (x.Auther < y.Auther) return -1;
//   if (x.Auther > y.Auther) return 1;
//   return 0;
// }
// console.log(ArrObject.sort(objSorting));

//(47) Check for Pair in an Array with a given sum Target = 6
/*function arraypair(array, sum) {
  for (i = 0; i < array.length; i++) {
    var first = array[i];
    for (j = i + 1; j < array.length; j++) {
      var second = array[j];
      if (first + second == sum) {
        console.log("First: " + first + " Second " + second + " SUM = " + sum);
      }
    }
  }
}
var a = [2, 4, 3, 5, 6, 1, 4, 7, 8, 9];
arraypair(a, 6);*/

//(or)
/*function twoSum(arr, S) {
  //console.log(S);
  var sum = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (S == arr[i] + arr[j]) sum.push([arr[i], arr[j]]);
    }
  }
  console.log(sum);
}
twoSum([10, 20, 10, 40, 50, 60, 70, 30], 100);*/

//(48) How to find the Longest Common Starting Sub String in a Set of String
/*function commonSubString(arr1) {
  var arr = arr1.concat().sort(),
    a1 = arr[0],
    a2 = arr[arr.length - 1],
    L = a1.length,
    i = 0;
  while (i < L && a1.charAt(i) === a2.charAt(i)) {
    i++;
  }
  return a1.substring(0, i);
}
console.log(commonSubString(["AJ", "AJIT"]));*/

//(49)How to get the Nth largest element from an Array
// const NthGreatest = (arr, n) => {
//   for (var i = 0; i < n; i++) {
//     let temp = arr[i];
//     let max_index = i;
//     for (var j = i + 1; j < arr.length; j++) {
//       if (arr[j] > arr[max_index]) {
//         max_index = j;
//       }
//     }
//     arr[i] = arr[max_index];
//     arr[max_index] = temp;
//   }
//   return arr[n - 1];
// };
// console.log(NthGreatest([5, 3, 4, 2, 8, 6], 1));

//(or)
// function nthLargestElement(arr, n) {
//   if (n > 0 && n <= arr.length) {
//     const sortedArray = arr.slice().sort((a, b) => b - a);
//     return sortedArray[n - 1];
//   } else {
//     return undefined;
//   }
// }
// const myArray = [4, 2, 9, 7, 5, 1];
// const n = 2; // Get the 3rd largest element
// const nthLargest = nthLargestElement(myArray, n);
// console.log(nthLargest);

//(50) How to Get Random items from An Array
// function rendomeItem(item) {
//   return item[Math.floor(Math.random() * item.length)];
// }
// // console.log(rendomeItem([1, 3, 2, 5, 4]));
// console.log(rendomeItem(["b", "a", "d", "f", "c"]));

//(51) How to Move/Rotate an Array element from one position to Another
// function shiftRight(arr) {
//   if (arr.length < 2) return arr;
//   return [arr[arr.length - 1], ...arr.splice(0, arr.length - 1)];
// }
// function shiftLeft(arr) {
//   if (arr.length < 2) return arr;
//   return [...arr.splice(1, arr.length - 1), arr[0]];
// }
// console.log(shiftLeft([1, 2, 3, 4, 5]));
// console.log(shiftRight([1, 2, 3, 4, 5]));

//(or)
// function moveElement(arr, OldIndex, NewIndex) {
//   while (OldIndex < 0) {
//     OldIndex = OldIndex + arr.length;
//   }
//   while (NewIndex < 0) {
//     NewIndex = NewIndex + arr.length;
//   }
//   if (NewIndex >= arr.length) {
//     var k = NewIndex - arr.length;
//     while (k-- + 1) {
//       arr.push(undefined);
//     }
//   }
//   arr.splice(NewIndex, 0, arr.splice(OldIndex, 1)[0]);
//   return arr;
// }
// console.log(moveElement([1, 2, 3, 4, 5], 1, 4));

//(52) Compare two Arrays are Equal or Not
// var arr1 = [1, 2, 3];
// var arr2 = [1, 2, 3];
// const isSame =
//   arr1.length == arr2.length &&
//   arr1.every((curElement) => {
//     if (arr2.indexOf(curElement) > -1) {
//       return (curElement = arr2[arr2.indexOf(curElement)]);
//     }
//   });
// console.log(isSame);

//(53) Condation check Long or Short Process
// function ajit(val) {
//   if (
//     val === "admin" ||
//     val === "employee" ||
//     val === "hr" ||
//     val === "owner"
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(ajit("hr"));

//(or)Sort process
// function ajit(val) {
//   const allval = ["admin", "employee", "hr", "owner"];
//   return allval.includes(val);
// }
// console.log(ajit("employee"));

//or Test case generating code
// function ajit(val) {
//   const allval = new Set(["admin", "employee", "hr", "owner", "hr"]);
//   // console.log(allval);
//   return allval.has(val);
// }
// console.log(ajit("hr"));

//(54) Read digit easy new features Add  _ underscore
// const max = 1_000_000;
// console.log(max);

//(55) Object clone/copy trick concept
// const cart = {
//   userId: 454555,
//   items: [
//     {
//       productId: 112,
//       productPrice: 100,
//     },
//     {
//       productId: 113,
//       productPrice: 60,
//     },
//   ],
//   totalPrice: 160,
// };
// const newCart = { ...cart }; //cally copy hoti hai. object ke andar nested object hoga to proper copy nahi hoga. usaka only for reference copy hoga
// //const newCart = JSON.parse(JSON.stringify(cart)); //ise used karene se sabhi copy hoga or nested object bhi proper copy ho jaye ga
// console.log(newCart);

//(56) Cache in javascript npm i and import then workin code (This code  Backend  import fetch from "node-fetch";)
// async function fetchData(url) {
//   const data = await fetch(url).then((res) => res.json());
//   return data;
// }
// (async function () {
//   await fetchData("https://jsonplaceholder.typicode.com/comments/1");
//   await fetchData("https://jsonplaceholder.typicode.com/comments/1");
//   await fetchData("https://jsonplaceholder.typicode.com/comments/1");
// })();

//(or) npm i and import then workin code (This code  Backend  import fetch from "node-fetch";)
// async function fetchData(url) {
//   const data = await fetch(url).then((res) => res.json());
//   return data;
// }
// (async function () {
//   const url = "https://jsonplaceholder.typicode.com/comments/1";
//   try {
//     const data1 = await fetchData(url);
//     console.log("Data 1:", data1);
//     const data2 = await fetchData(url);
//     console.log("Data 2:", data2);
//     const data3 = await fetchData(url);
//     console.log("Data 3:", data3);
//   } catch (error) {
//     console.error("An error occurred:", error);
//   }
// })();

//(57) Faster http requests runing //npm i and import then workin code (This code  Backend  import fetch from "node-fetch";)
// async function fetchNormal() {
//   const categories = await fetch(
//     "https://fakestoreapi.com/products/categories"
//   ).then((res) => res.json());

//   const products = await fetch(
//     "https://fakestoreapi.com/products/categories"
//   ).then((res) => res.json());

//   const users = await fetch(
//     "https://fakestoreapi.com/products/categories"
//   ).then((res) => res.json());

//   return Promise.all([categories, products, users]);
// }
// fetchNormal().then((res) => console.log(res));

//(58) Kisa sandav me used karana hai usape depend karata hai this keyword
// function Ajit() {
//   console.log(this);
// }
// Ajit(); //output :- Window object
// new Ajit(); //output :- Ajit name ka object

//(or)
// const user = {
//   Ajit() {
//     console.log(this);
//   },
// };
// user.Ajit(); //output :- khud (user object)
// const userboj = user.Ajit;
// //userboj(); ////output :-Window object

//(59) Avoid to many if else same working
//long process
// function getprice(item) {
//   if (item === "Bur") {
//     return 200;
//   } else if (item === "Pi") {
//     return 500;
//   } else if (item === "San") {
//     return 400;
//   } else if (item === "Jui") {
//     return 100;
//   }
// }
// console.log(getprice("Bur"));

//(sort cut process)
// const foodMap = {
//   Burger: 200,
//   Pizza: 500,
//   Sandwich: 400,
//   Juice: 100,
// };
// function getPrice(item) {
//   return foodMap[item];
// }
// console.log(getPrice("Burger"));

//(60)use of DSA in real Application
// const userPermission = ["CREAT_POST", "EDIT_POST", "READ_POST", "DELETE_POST"];
// const newvalue = new Set(userPermission);
// function createPost() {
//   if (!newvalue.has("CREAT_POST")) {
//     return 404;
//   } else {
//     return 201;
//   }
// }
// console.log(createPost({}));

//(61) DS Insertion Sort Program
// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let current = arr[i];
//     let j = i - 1;
//     while (j > -1 && current < arr[j]) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = current;
//   }
//   return arr;
// }
// const Result = insertionSort((arr = [10, 4, 15, 6, 5]));
// console.log("Sorting Array = " + Result);

//(or)
// const insertion_Sort = (nums) => {
//   for (let i = 1; i < nums.length; i++) {
//     let j = i - 1;
//     let temp = nums[i];
//     while (j >= 0 && nums[j] > temp) {
//       nums[j + 1] = nums[j];
//       j--;
//     }
//     nums[j + 1] = temp;
//   }
//   return nums;
// };
// console.log(insertion_Sort([3, 0, 2, 5, -1, 4, 1]));

//(62) Bubble Sort program
// function bubbleSort(a) {
//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < a.length - 1 - i; j++) {
//       if (a[j] > a[j + 1]) {
//         let temp = a[j];
//         a[j] = a[j + 1];
//         a[j + 1] = temp;
//       }
//     }
//   }
//   console.log(a);
// }
// bubbleSort((arr = [34, 15, 28, 8, 4]));

//(65) Calculate Sum of Digit Single Digit
// var num = 356,
//   x;
// if (num) x = num % 9 == 0 ? 9 : num % 9;
// else x = 0;
// console.log(x);

//(66) Execution Context Stack Program
// var str = "windows";
// function a() {
//   var fa = "1nd function";
//   console.log(fa);
//   b();
//   console.log(`Let's see when I will be on console ${str}`);
// }
// function b() {
//   console.log("2nd function");
//   c();
// }
// function c() {
//   console.log("3rd function");
// }
// debugger;
// a();

//(67) Lexical Scoping program
// var a = "hello ";
// function first() {
//   var b = "How are you ";
//   second();
//   function second() {
//     var c = "my name is ajit";
//     console.log(a + b + c);
//   }
// }
// first();

//(68) Squares of first 10 natural number
// var i = 5;
// while (i >= 1) {
//   console.log(i * i);
//   i--;
// }

//(69) String value and find particular letter and count letter
// var str = "ajit KUMAR patna";
// var convertUpper = str.toUpperCase();
// const reg = /[aj]/gi;
// var test = convertUpper.match(reg);
// var leng = test.length;
// console.log(leng);
// console.log(test);

//(70) Largest Number find without using if condition
// var a = 50;
// var b = 40,
//   c = 30,
//   max;
// max = a > b ? (a > c ? a : c) : b > c ? b : c;
// console.log(max);

//(71) String value and count vowels
// var str = "ajitkumatpatna";
// var reg = /[aeiou]/gi;
// var chars = str.match(reg);
// console.log(chars);

//(72) String value and check start and ends characters
// var str = "Ajitkumar String";
// var lastEndex = str.endsWith("g");
// var firstEndex = str.startsWith("a");
// if (lastEndex == true && firstEndex == true) {
//   console.log("Start with A and End with G");
// } else if (lastEndex == true && firstEndex == false) {
//   console.log("Start with A");
// } else if (lastEndex == false && firstEndex == true) {
//   console.log("End with G");
// } else {
//   console.log("Start with A not End with G");
// }

//(73) Armstrong number 100 to 1000
// function Armstrong() {
//   for (let i = 100; i <= 1000; i = i + 1) {
//     let str = i.toString();
//     let a = str[0] * 1;
//     let b = str[1] * 1;
//     let c = str[2] * 1;
//     let check = a * a * a + b * b * b + c * c * c;
//     if (check === i) {
//       console.log(i);
//     }
//   }
// }
// Armstrong();

//(or) Armstrong find yes or not
// const number = 15;
// let sum = 0;
// let temp = number;
// while (temp > 0) {
//   let remainder = temp % 10;
//   sum += remainder * remainder * remainder;
//   temp = parseInt(temp / 10);
// }
// if (sum == number) {
//   console.log(`${number} is an Armstrong number`);
// } else {
//   console.log(`${number} is not an Armstrong number.`);
// }

//(74) Fibonacci Serises yes or not
/*let a = 0,
  b = 1,
  c = 0,
  n = 4;
c = a + b;
while (c < n) {
  a = b;
  b = c;
  c = a + b;
}
if (c == n) console.log("Fibonacci", c);
else console.log("Not Fibonacci", c);*/

//(74) Fibonacci Serises
// const number = 6;
// let n1 = 0,
//   n2 = 1,
//   nextTerm;
// for (var i = 1; i <= number; i++) {
//   console.log(n1);
//   nextTerm = n1 + n2;
//   n1 = n2;
//   n2 = nextTerm;
// }

//(or)
/*function fibonacciIterative(n) {
  let fibSeries = [0, 1];
  for (let i = 2; i < n; i++) {
    fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
  }
  return fibSeries;
}
console.log(fibonacciIterative(8)); */

//(74) Alternate fibonacci serise
/*let a = -1,
  b = 1,
  c,
  n = 5; // Set 'n' to a desired value

for (let i = 2; i <= n * 2; ++i) {
  c = a + b; // Calculate the next number in the sequence
  a = b; // Update 'a' to the previous 'b'
  b = c; // Update 'b' to the new 'c'

  if (i % 2 == 0) {
    console.log(c); // Print 'c' when 'i' is even
  }
}*/

//(74) Range 8 to 15 fibonacci serise print
/*let a = 0,
  b = 1,
  c;
const lowerBound = 8;
const upperBound = 21;

while (true) {
  c = a + b;
  if (c > upperBound) break;
  if (c >= lowerBound) {
    console.log(c);
  }
  a = b;
  b = c;
}*/

//(75) Find the value Even or Odd number given Array
// var arr = [2, 4, 3, 1, 6, 5, 8, 7];
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     console.log("Evan Number " + arr[i]);
//   }
//   if (arr[i] % 2 != 0) {
//     console.log("Odd Number " + arr[i]);
//   }
// }

//(76) Find Largest and Smallest Number in Array
// var arr = [2, 4, 5, 1, 8, 10, 3];
// var smaill, large;
// smaill = large = arr[0];
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] < smaill) smaill = arr[i];
//   if (arr[i] > large) large = arr[i];
// }
// console.log(
//   `Largest Number In Array =  ${large} And Small Number In Array = ${smaill}`
// );

//(77) Find Product of Digit of any Number
// var n = 244,
//   rem,
//   prod = 1;
// while (n > 0) {
//   rem = n % 10;
//   prod = prod * rem;
//   n = Math.floor(n / 10);
// }
// console.log(prod);

//(78) Find the sum of digits of numbers until the sum is reduced to one digit
// const findSum = (num) => {
//   if (num < 10) {
//     return num;
//   }
//   const lastDigit = num % 10;
//   const rem = Math.floor(num % 10);
//   return findSum(lastDigit + findSum(rem));
// };
// console.log(findSum(538769));
