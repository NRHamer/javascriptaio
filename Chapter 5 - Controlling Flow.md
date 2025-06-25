# Chapter 5 - Controlling Flow

# Choosing a Path

Conditional statements allow you to write code that performs various actions based on various conditions.

## if...else statements

The if and else statements evaluate an expression and then run one block of code if the expression is truthy and another block of code it it's falsy.
For example,

```
if(country === "United States" || country === "Liberia"){
    temperature = temperature + "F";
} else {
    temperature = (temperature - 32) * 5 / 9 + "C";
}
```

Sometimes, you only want to either do something or not do it, rather than make a choice between two options. In that case, you can just use an if statement:

```
if(coffeeMakerIsOff){
    turnOnCoffeeMaker();
}
```

## Multiple paths with if else

At other times, you may want to choose between several options. For this, you can string together if and else statements.
For example,

```
if(pet === "cat"){
    greeting = "Good kitty";
} else if (pet === "dog"){
    greeting = "Who's a good boy or girl?';
} else if (pet === "parrot"){
    greeting = "Wanna cracker?";
} else {
    greeting = "Hi.";
}
```

## The Ternary Operator

Conditional statements can also be written using the conditional operator. The conditional operator is also known as the 'ternary' operator. The conditional operator shortens if...else statements to a single expression.

To use the conditional operator, write a condition followed by a question mark. After the question mark comes the expression that will run if the condition is true. Follow that expression with a colon and then the expression to run if the condition is false.

```
const dt = Date();
const hours = dt.getHours();
let msg;
msg = hours<12 ? ("Good morning!") : ("Welcome");
console.log(msg);
```

Note that the ternary operator can only be used to switch between two choices. If you code needs to decide between more than two outcomes, use the if...else statements or the switch statement.

## Switch Statements

The switch statement decides which statement to run based on the result of a single expression. Each possible outcome of a switch statement is called a case.

```
switch(expression){
    case x:
      //code to run when expression === x
      break;
    case y:
      //code to run when expression === y
      break;
    default:
      //code to run if nothing else matches expression
}
```

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Holiday Finder</title>
  </head>
  <body>
    <div id="message"></div>
    <script>
      const dt = new Date();
      const month = dt.getMonth();
      let msg;
      switch (month) {
        case 0:
          msg = "January 4 is National Spaghetti Day";
          break;
        case 1:
          msg = "February 9 is National Pizza Day";
          break;
        case 2:
          msg = "March 26 is National Spinach Day";
          break;
        case 3:
          msg = "April 26 is National Pretzel Day";
          break;
        default:
          msg = "No important holidays this month.";
      }
      const el = document.getElementById("message");
      el.innerHTML = msg;
    </script>
  </body>
</html>
```

Notes on this HTML document.

1. Just above the < script > tag, notice the div element with an id of message. Inside this element is where you display the program's output.
2. After the message div element is the script element that contains the program. The fact the script element comes after the HTML element where its output will be rendered is important. HMTL files are interpreted from top to bottom.
3. The first line of the JavaScript program uses the Date() function to find out the current date on the user's computer:

```
const dt = new Date();
```

Date() is what's know as a 'constructor' function is JavaScript: When you use it with the new function, it returns a new date object. The date object contains the current date as well as properties and functionality having to do with dates.

4. The getMonth() function runs with the date returned in Step 3:

```
const month = dt.getMonth();
```

The getMonth() function is part of every date object. To use it, attach it to any date object with a period (.)

JavaScript counts from 0, so the first month of the year is number 0!

5. A variable named msg is declared, but it's not initialized.

Putting the script after the HTML that it affects is just one way to cause the browser to wait until the HTML document is rendered before running the JavaScript.

6. The switch statement begins, and the month variable's value is passed into it:

```
switch(month){
```

The curly braces set off a block of JavaScript. In this case, the block contains the switch statement's cases.

7. The first case says what to do it the vlaue of month is 0:

```
case 0:
```

If the value of month is 0, any statements after the colon at the end of the case are run, until JavaScript encounters either a break statement (which stops execution of the switch statement) or the ending curly brace containing the switch cases.

8. The value of msg is set:

```
msg = 'January 4th is National Spaghetti Day';
```

9. The break statement ends the evaluation of the switch statement and jumps directly to the next statement after the closing curly bracket.

One common cause of bugs in JavaScript is forgetting to include a break statement before each case in a switch statement. If you don't include this, the switch statements runs the code after each case after one of them evaluates to true.

10. If none of the cases matches the value of month, the default case runs and sets the value of msg to a default message:

```
default:
 msg = 'No holidays this month';
```

Note that the break statement isn't required after the default case because there are no more cases after it to skip over.

11. The next statement locates the HTML element where you want to render the message and assigns it to a constant named el.

```
const el = document.getElementById('message');
```

12. The innerHTML property, which contains the HTML between the element's starting and ending tags is changed to the value of the msg variable:

```
el.innerHTML = msg;
```

Because nothing now appears between the < div id="message" > and < /div > tags, the message is just inserted between them.

# Making Loops

To make repeating statements easier, JavaScript provides several different types of looping statements, including these:

```
for
for ... in
for ... of
do ... while
while
```

The looping statements are also known as iterative statements.

## for loops

The for statement uses three expressions in parentheses after the for keyword to create a loop:

```
Initialization -
The initial value of a variable. This variable like a counter.

Condition -
A Boolean expression that determines whether to run the loop's statements.

Final Expression -
An expression to be evaluated following each iteration of the loop. This expression is typically used to increment a counter.
```

The 'for' loop is usually used to loop over code a predetermined number of times. Here's how you can write a 'for' loop to count to 100.

```
for(let i=0;i<=100;i++){
  console.log(i);
}
```

Here's how this loop works:

1. A new block-scoped variable called i is initialized with a value of 1.

2. The second expression tests the variable to see whether it's less than or equal to 100.

If it is, the statements in the block are executed.

If it isn't, the loop exits.

Note that because the i variable is block-scoped, it's only avaible inside the 'for' loop.

3. After the code in the 'for' block executes, the final expression runs, incrementing the counter.

4. The test is repeated.

# for ... in loops

The 'for ... in' loop iterates over the properties of an object and the properties it inherits from its parent object. Because arrays are types of objects, it's possible to use 'for ... in' loops to loop over the elements in an array as well.

Objects contain multiple values, called 'properties', which may hold any type of JavaScript data, including strings, numbers, Booleans, arrays, and even other objects.

To see how 'for ... in' works, start with the following simple object:

```
const house = {sqft:800, bdRooms:2, bthRooms:1}
```

The below script shows how you could write a web page that displays all the properties of this object.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>House Details</title>
  </head>
  <body>
    <div id="root"></div>
    <script>
      const house = { sqft: 800, bdRooms: 2, bthRooms: 1 };
      let houseDetails = "<h2>Information about this house</h2>";
      for (let prop in house) {
        houseDetails = `${houseDetails}<br>${prop}:${house[prop]}<br>`;
        document.getElementById("root").innerHTML = houseDetails;
      }
    </script>
  </body>
</html>
```

Like 'for' loops, 'for ... in' loops aren't often used in JavaScript, because you can find better and more modern ways to do anything that you might want to use 'for ... in' to do.

Also 'for ... in' loops loop over the properties of their parent object, which is usually not what you want to do. In practice, 'for ... in' loops are mostly useful for debugging your code.
