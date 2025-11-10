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
function cumulativeSum(arr) {
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
console.log(outputArray);
