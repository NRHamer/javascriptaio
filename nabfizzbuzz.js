//NabFizzBuzz

//Count from 1 - 32

//If divisible by 2, output Nab

//If divisible by 3, output Fizz

//If divisible by 5, output Buzz
/*
let x = "";

for (let i = 1; i < 33; i++) {
  if (i % 2 === 0) {
    x = "Nab";
  }
  if (i % 3 === 0) {
    x = "Fizz";
  }
  if (i % 5 === 0) {
    x = "Buzz";
  }
  if (i % 2 === 0 && i % 3 === 0) {
    x = "NabFizz";
  }
  if (i % 2 === 0 && i % 5 === 0) {
    x = "NabBuzz";
  }
  if (i % 3 === 0 && i % 5 === 0) {
    x = "FizzBuzz";
  }
  if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
    x = "NabFizzBuzz";
  }
  if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0) {
    x = "";
  }
  console.log(i + " " + x);
}
*/
let y = "";

for (loop = 1; loop < 33; loop++) {
  y = "";

  if (loop % 2 == 0) {
    y = "Nab";
  }
  if (loop % 3 == 0) {
    y += "Fizz";
  }
  if (loop % 5 == 0) {
    y += "Buzz";
  }
  if (loop.toString().includes("2")) {
    y = "Baz";
  }
  console.log(loop + " " + y);
}
