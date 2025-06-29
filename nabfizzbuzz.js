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
