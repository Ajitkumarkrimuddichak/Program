//(1) 10 different ways to print values from an Array in JavaScript ?
const Arr = [1, 2, 5, 3, 8, 11, 10, 6];

let Ind = 7;
if (Ind >= 0 && Ind < Arr.length) {
  console.log(Arr[Ind]);
} else {
  console.log("Index out of bounds");
}

/*for (let i = 0; i < Arr.length; i++) {
  console.log(Arr[i]);
}*/

/*for (const value of Arr) {
  if (value > 5) {
    console.log(value);
  }
}*/

//Arr.forEach((value) => console.log(value));

//Arr.map((value) => console.log(value));

// Arr.filter((value) => console.log(value));

/*
// Arr.reduce((index, value) => {
Arr.reduce((_, value) => {
  console.log(value);
  return value;
}, null);
*/

/*let i = 0;
while (i < Arr.length) {
  console.log(Arr[i]);
  i++;
}
*/

// new Set(Arr).forEach((value) => console.log(value));

/*Arr.find((value) => {
  console.log(value);
  return false;
});*/
