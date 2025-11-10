//***** All Main  Data Structure Programming Interview Question ******/
//(1) Insertion Sorting Programming Best Algorithm in DSA Time Complicity on^2 ?
// function InsertionSorting(arr) {
//   for (var i = 1; i < arr.length; i++) {
//     var current = arr[i];
//     var j = i - 1;
//     while (j > -1 && current < arr[j]) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = current;
//   }
//   return arr;
// }
// const array = [10, 40, 20, 11, 50, 1];
// const Result = InsertionSorting(array);
// console.log(`Inserting Sorting :- ${Result}`);

//(or)
// const InsertionSorting = (nums) => {
//   for (var i = 1; i < nums.length; i++) {
//     var j = i - 1;
//     var temp = nums[i];
//     while (j >= 0 && nums[j] > temp) {
//       nums[j + 1] = nums[j];
//       j--;
//     }
//     nums[j + 1] = temp;
//   }
//   return nums;
// };
// const array = [10, 50, 20, 40, 30];
// const Result = InsertionSorting(array);
// console.log(`Inserting Sorting :- ${Result} `);

//(2) Bubble Sorting Prgram
function BubbleSort(a) {
  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < a.length - 1 - i; j++) {
      if (a[j] > a[j + 1]) {
        let temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
      }
    }
  }
  console.log(a);
}
const array = [1, 4, 3, 5, 6, 2];
BubbleSort(array);
