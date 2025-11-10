//(1) All prime Number find 1 to 100 Range
/*for (var i = 1; i <= 50; i++) {
  for (var j = 2; j < i; j++) {
    if (i % j == 0) break;
  }
  if (i == j) {
    console.log(`Prime Number = ${i}`);
  }
}*/

//(or) Print First N prime Number
/*var n = 5,
  x = 2;
while (n) {
  for (var i = 2; i < x; i++) {
    if (x % i == 0) {
      break;
    }
  }
  if (i == x) {
    console.log(x);
    n--;
  }
  x++;
}*/

//(or) Print First N prime Number
/*var n = 5;
for (var i = 1; i <= n * 2; i++) {
  for (var j = 2; j < i; j++) {
    if (i % j == 0) break;
  }
  if (i == j) {
    console.log(" N Prime Number", i);
  }
}*/

//(or) Number is prime or Not prime
/*var x = 7;
for (var i = 2; i <= x - 1; i++) {
  if (x % i == 0) break;
}
if (i == x) {
  console.log("This is Prime Number = " + x);
} else {
  console.log("This is Note Prime Number = " + x);
}*/

// (or) Print Prime number Upper Range to Lower Range
/*var L = 10,
  U = 20;
for (var x = L + 1; x <= U - 1; x++) {
  for (var i = 2; i < x; i++) {
    if (x % i == 0) break;
  }
  if (i == x) {
    console.log(x);
  }
}*/

//(or) Sum of Two Prime Number Ex:- 3+31=34 , 5+29=34, 17+17=34 ,11+23=34
// var x = 34;
// for (var i = 2; i <= x - 1; i = nextPrime(i)) {
//   if (isPrime(x - i)) console.log(`${i} + ${x - i} = ${x}`);
// }
// var n;
// function nextPrime(n) {
//   do n++;
//   while (!isPrime(n));
//   return n;
// }
// function isPrime(n) {
//   for (var i = 2; i < n; i++) {
//     if (n % i == 0) return 0;
//   }
//   return 1;
// }

//(or) Sum of All prime Number
// var sum = 0;
// for (var i = 1; i <= 20; i++) {
//   for (var j = 2; j < i; j++) {
//     if (i % j == 0) break;
//   }
//   if (i == j) {
//     sum = sum + i;
//     console.log(`Prime Number = ${i}`);
//   }
// }
// console.log(`Sum of All Prime Number = ${sum}`);

//(or) Alternate Prime Number Print Ex:- 2 3 5 7 11 13 17 =>Final Output:- 2 5 11 17 And Total Sum = 35
// var sum = 0;
// function AlternatPrime(L, U) {
//   var p = 0;
//   for (var i = L; i <= U; i++) {
//     if (i < 2) {
//       continue;
//     }
//     var count = 0;
//     for (var j = 1; j <= U; j++) {
//       if (i % j === 0) {
//         count++;
//       }
//     }
//     if (count <= 2) {
//       p++;
//       if (p % 2 !== 0) {
//         sum = sum + i;
//         console.log(i);
//       }
//     }
//   }
// }
// AlternatPrime(2, 20);
// console.log(`Sum of All Prime Number = ${sum}`);

//(or) Prime Factors Of a Number 36:- prme factor 2*2*3*3 only for prime number
// var x = 36;
// for (var i = 2; x > 1; i++) {
//   while (x % i == 0) {
//     console.log(i);
//     x = x / i;
//   }
// }

//(or) check co-prime number print
var a = 12,
  b = 15,
  min;
min = a < b ? a : b;
for (var i = 2; i <= min; i++) {
  if (a % i == 0 && b % i == 0) {
    break;
  }
}
if (i == min + 1) {
  console.log(`A and B are Co-Prime ${a} = ${b}`);
} else {
  console.log(`A and B are Not Co-Prime ${a} = ${b}`);
}
