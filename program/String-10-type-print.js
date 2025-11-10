//(1) 10 different ways to print values from an String in JavaScript ?

const Str = "Ajitkumar";

let Ind = 6;
if (Ind >= 0 && Ind < Str.length) {
  console.log(Str[Ind]);
} else {
  console.log("Index out of bounds");
}

/*for (let i = 0; i < Str.length; i++) {
  console.log(Str[i]);
}*/

/*for (let i = 0; i < Str.length; i++) {
  if (i >= 0 && i < Str.length) {
    console.log(Str[i]);
  }
}*/

/*let i = 0;
while (i < Str.length) {
  console.log(Str[i]);
  i++;
}*/

/*for (const char of Str) {
  console.log(char);
}*/

// Array.from(Str).forEach((char) => console.log(char));

// Array.from(Str).map((char) => console.log(char));

// Array.from(Str).filter((char) => console.log(char));

/*Array.from(Str).reduce((_, char) => {
  console.log(char);
  return char;
}, null);*/
