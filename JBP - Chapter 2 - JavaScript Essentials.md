# Chapter 2 - JavaScript Essentials

This chapter deals with some of the essential building blocks of JavaScript.

1. Variables

2. Operators

We will start with variables, what they are, and the different variable data types that exist. We need these basic building blocks to store and work with variable values in our scripts, making them dynamic.

Then we will deal with operators. Arithmetic, assignment, and conditional and logical operators will be discussed at this stage.

We need operators to modify our variables or to tell us something about these variables. This way we can do basic calculations based on factors such as user input.

# Variables

Variables are values in your code that can represent different values each time the code runs. Here is an example of two variables is a script:

```
firstname = "Nick";
x = 2;
```

Any they can be assigned a new value while the code is running:

```
firstname = "Edward";
x = 7;
```

## Declaring variables

The first time you create a variable, you declare it.

This is done with either 'let', 'var', or 'const'.

The second time you call a variable, you only use the name of the existing variable to assign it a new value:

```
let secondname = "Hamer";
secondname = "Gamer";
```

In our examples, we will be assigning a value to our variables in the code. This is called "hardcoded" since the value of your variable is definied in the script instead of coming dynamically from some external input. This is something you won't be doing that often in actual code, as more commonly the value comes from an external source, such as an input box on a website that a user filled out, a database, or some other code that calls your code.

## let, var and const

Here you can see examples of variables using the different keywords:

```
let nr1 = 12;
var nr2 = 8;
const PI = 3.14159;
```

let and var are both used for variables that might have a new value assigned to them somewhere in the program.

The different between let and var is scope.

let has 'block scope' whereas var has 'global scope'.

var's global scope means that you can use the variable defined with var in the entire script.

let's block scope means you can only use variables defined with let in the specific block of code in which they are defined.

Remember, a block of code will always start with { and end with }.

const is used for variables that only get a value assigned once, which will not change. If you try reassigning a value declared with const, you will get an error message:

```
const someConstant = 3;
someConstant = 4;
Uncaught TypeError: Assignment to constant variable.
```

# Primitive data types

A distinction exists between primitive data types and other, more complex data types.

JavaScript has seven primitive data types, or 'primitives':

1. String
2. Number
3. BigInt
4. Boolean
5. Symbol
6. undefined
7. null

## String

A string is used to store a text value. It is a sequence of characters. There are different ways to declare a string:

1. Double quotes
2. Single quotes
3. Backticks:special template strings in which you can use variables directly.

Single and double quotes can be used like so:

```
let singleString = 'Hi there!';
let doubleString = "How are you?";
```

In a string using backticks, you can point to variables and the variable's value will be substituted into the line. For example:

```
let language = "JavaScript";
let message = `Let's learn ${language}`;
console.log(message);
```

## Escape Characters

If you want to have double quotes, single quotes, and backticks in our string there is a special character that can be used to tell JavaScript, "do not take the next character as you normally would."

This is the escape character, a backslash.

In this example, the backslash can be used to ensure your interpreter doesn't see the single or double quote marks and end either string too early:

```
let str = "Hello, what's your name? Is it \"Mike\"?";
console.log(str);
let str2 = 'Hello, what\'s your name? Is it "Mike"?';
console.log(str2);
```

The escape character has even more purposes. You can use it to create a line break with \n, or to include a backslash character in the text with \\:

```
let str3 = "New \nline.";
let str4 = "I'm containing a backslash: \\!";
console.log(str3);
console.log(str4);
```

## Number

The number data type can be used to represent integers, decimals, exponentials, octal, hexadecimal, and binary numbers.

```
let intNr = 1;
let decNr = 1.5;
let expNr = 1.4e15;
let octNr = 0o10; //decimal version would be 8
let hexNr = 0x3E8; //decimal version would be 1000
let binNr = 0b101; decimal version would be 5
```

The number data type is very commonly used, but in some special cases, you will need an even bigger number.

## BigInt

The limits of the number data type are between 2^53-1 and -(2^53-1). In case you were to need a bigger (or smaller) number, BigInt comes into play. A BigInt data type can be recognized by the postfix n:

```
let bigNr = 90071992547409920n;
```

Let's see what happens when we start to do some calculations between out previously made integer Number, intNr, and BigInt, bigNr:

```
let result = bigNr + intNr;
```

The output will be as follows:

```
Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
```

We cannot mix BigInt with the Number data type to perform operations.

## Boolean

The Boolean data type can hold two values: true and false. For example,

```
let bool1 = false;
let bool2 = true;
```

In the preceeding example, you can see the options we have for the Boolean data type. It is used for situations in which you want to store a true or a false value, or a yes/no value, or an on/off value.

## Symbol

Symbol can be used when it is important that variables are not equal, even though their value and type are the same. For example,

```
let str1 = "JavaScript is fun!";
let str2 = "JavaScript is fun!";
console.log("These two strings are the same:",str1 === str2);

let sym1 = Symbol("JavaScript is fun!");
let sym2 = Symbol("JavaScript is fun!");
console.log("These two Symbols are the same:",sym1 === sym2);
```

And the output:

```
These two strings are the same: true
These two symbols are the same: false
```

In the first half, JavaScript concludes that the strings are the same. They have the same value, and the same type. However, in the second part, each symbol is unique. Therefore, although they contain the same string, they cannot be the same, and output false when compared.

## Undefined

JavaScript has a special data type for a variable that has not been assigned a value. And this data type is undefined:

```
let unassigned;
console.log(unassigned);
```

The output here will be:

```
Undefined
```

Defining a variabled as undefined is generally considered bad practice and should not be done.

## null

null is a special value for saying that a variable is empty or has an unknown value.

```
let empty = null;
```

To solve the issue we encountered with setting a variable as undefined, note that if you set it to null, you will not have the same problem. This is one of the reasons it is better to assign null to a variable when you want to say it is empty and unknown at first:

```
let terribleThingToDo = undefined;
let lastName;
console.log("Same undefined:", lastName === terribleThingToDo);

let betterOption = null;
console.log("Same null:", lastName === betterOption);
```

This output the following:

```
Same undefined: true
Same null: false
```

This shows that an automatically undefined variable, lastName, and a deliberately undefined variable, terribleThingToDo, are considered equal, which is problematic. On the other hand, lastName and betterOption, which was explicitly declared with a value of null, are not equal.

# Analyzing and modifying data types

## Working out the type of a variable

The typeof function returns the type of the variable.

```
testVariable = 1;
variableTypeTest1 = typeof testVariable;
variableTypeTest2 = typeof(testVariable);
console.log(variableTypeTest1);
console.log(variableTypeTest2);
```

As you'd expect, both methods will output number.

Brackets aren't required because technically, typeof is an operator, not a method, unlike console.log. But, sometimes it may be appropriate to use brackets to make code easier to read.

```
let str = "Hello";
let nr=7;
let bigNr = 1234567890234n;
let bool = true;
let sym = Symbol("unique");
let undef = undefined;
let unknown = null;

console.log("str", typeof str);
console.log("nr", typeof nr);
console.log("bigNr", typeof bigNr);
console.log("bool", typeof bool);
console.log("sym", typeof sym);
console.log("undef", typeof undef);
console.log("unknown", typeof unknown)
```

Here, in the same console.log() print command, we are printing the name of each variable (as a string, declared in double quotes), then its type (using typeof). This will produce the following output:

```
str string
nr number
bigNr bigint
bool boolean
sym symbol
undef undefined
unknown object
```

There is an odd one out, and that is the null type. In the output you can see that typeof null returns object, which in fact, null truly is a primitive and not an object. This is a bug that cannot be removed due to backward compatibility problems.

## Converting data types

The variables in JavaScript can change types. Sometimes JavaScript does this automatically.

```
let nr1 = 2;
let nr2 = "2";
console.log(nr1 * nr2);
```

The example above converts the string to a number, giving the answer 4. However, you need to be careful as this doesn't always work.

```
let nr1 = 2;
let nr2 = "2";
console.log(nr1 + nr2);
```

This will log 22. The plus sign can be used to concatenate strings. Therefore, instead of converting a string to a number, it is converting a number to a string in this example, and clubbing the two strings together makes 22.

There are built-in functions we can use to convert the data type of a variable.

1. String()
2. Number(), and
3. Boolean().

The first one converts a variable to type String. It takes pretty much any value, including undefined and null, and puts quotes around it.

The second one tries to convert a variable to a number. If that cannot be done logically, it will change the value into NaN (not a number).

The third one converts a variable into a Boolean. This will be true for everything except for null, undefined, 0 (number), and empty string, and NaN.

```
let nrToStr = 6;
nrToStr = String (nrToStr);
console.log(nrToStr, typeof nrToStr);

let strToNr = "12";
strToNr = Number(strToNr);
console.log(strToNr, typeof strToNr);

let strToBool = "any string will return true";
strToBool = Boolean(strToBool);
console.log(strToBool, typeof strToBool);
```

This will log the following

```
6 string
12 number
true boolean
```

Let's continue with the following code:

```
let strToBool2 = "false";
strToBool2 = Boolean(strToBool2);
console.log(strToBool2, typeof strToBool2);

let strToBool = "";
strToBool = Boolean(strToBool);
console.log(strToBool, typeof strToBool);
```

Finally, this one will log the following:

```
true boolean
false boolean
```

This output shows that any string will return true when converted to a Boolean, even the string "false"! Only an empty string, null, and undefined will lead to a Boolean value of false.

# Operators

Arithmetic operators can be used to perform operations with numbers.

## Addition

The addition simple can be used to concetenate strings.

```
let str1 = "Hello ";
let str2 = "addition";
let result2 = str1 + str2;
```

The output will be as follows:

```
Hello addition
```

## Subtraction

Here is an example of how subtraction works:

```
let nr1 = 20
let nr2 = 4;
let str1 = "Hi";
let nr3 = 3;
let result1 = nr1 -nr2;
let result2 = str1 - nr3;
console.log(result1, result2);
```

The output is as follows:

```
16 NaN
```

The first result is 16. The second is more interesting. It gives NaN, not an error, but simply the conclusion that a work and a number subtracted are not a number.

## Multiplication

As with subtration, the result of multiplying and number with a string in JavaScript is NaN.

## Division

Another straightforward opertor is division.

## Exponentiation

Exponentiation means raising a certain base number to the power of the exponent, by example, x^y. This means that we multiply x by itself y number of times. Here is an example of how to do this is JavaScript - we use \*\* for this operator:

```
let nr1 = 2;
let nr2 = 3;
let result1 = nr1 ** nr2;
console.log(result1);
```

Bear in mind the square root of a value is the same as raising it to the power of 0.5.

## Modulus

Modulus is the operation in which you determine how much is left after dividing a number by another number in its entirety. The amount will be the remainder, or what is left over. The character we use for this operation is the % character. Here are some examples:

```
let nr1 = 10;
let nr2 = 3;
let result1 = nr1 % nr2;
console.log(`${nr1}%${nr2} = ${result1}`);

let nr3 = 8;
let nr4 = 2;
let result2 = nr3 % nr4;
console.log(`${nr3}%${nr4} = ${result2}`);

let nr5 = 15;
let nr6 = 4;
let result3 = nr5 % nr6;
console.log(`${nr5}%${nr6} = ${result3}`);
```

And the output:

```
10 % 3 = 1
8 % 2 = 0
15 % 4 = 3
```

This can be used for time calculations. If you wanted to add 125 minutes to the current time you could use 125 % 60 to conclude that you need to add 2 hours and 5 minutes to the current time.

## Unary operators: increment and decrement

The last two operators of our arithmetic operator section are increment and decrement.

A term we use here is operand. Operands are subject to the operator. So, if we say x + y, x and y are the operands.

If we see x++, we can read this as x = x + 1.

If we see x--, we can read this as x = x - 1:

```
let nr1 = 4;
nr1++;
console.log(nr1);

let nr2 = 4;
nr2--;
console.log(nr2);
```

The output is as follows:

```
5
3
```

## Prefix and postfix operators

We can have the increment operator after the operand (x++) in which case we call this the postfix unary operator.

We can have it before (++x), which is the prefix unary operator. This does something different.

The postfix gets executed after sending the variable though, and then after that, the operation gets executed. In the following example, nr gets incremented by 1 AFTER logging. So the first logging statement is still logging the old value because it has not been updated yet. It has been updated from the second log statement:

```
let nr = 2;
console.log(nr++);
console.log(nr);
```

The output is as follows:

```
2
3
```

The prefix gets executed BEFORE sending the variable through, and often this is the one you will need. Have a look at the follwoing example:

```
let nr = 2;
console.log(++nr);
```

We get the following output:

```
3
```

## Combining the operators

You can combine operators. This creates precedence, that may not necessarily read from left to right.

Name Symbol Example
Grouping (brackets) (...) (x + y)
Exponentiation ** x ** y
Prefix increment and decrement --, ++ --x, ++y
Multiplication, division, modulus _, /, % x _ y, x / y, x % y
Addition and subtraction +, - x + y, x - y

## Assignment operators

The basic assignment operator is =.

There are a few others available. Every binary arithmetic operator has a corresponding assignment operator to write a shorter piece of code.

For example, x+= 5 means x = x + 5, and x**= 3 means x = x ** 3.

Here are a few more examples:

```
let x = 2;
x += 2;
```

After this assignment operation, the vale of x becomes 4.

```
x -= 2;
```

After this operation the value of x becomes 2 again.

```
x *= 6;
```

When this line has been executed, the value of x becomes 12.

```
x /= 3;
```

After dividing by 3 the new value becomes 4.

```
x **= 2;
```

The value of x become 16.

```
x %= 3;
```

After this assignment operation, the value of x is 1.

# Comparison operators

Comparison operators are different from the operators we have seen so far. The outcome of the comparison operators is always a Boolean, true, or false.

## Equal

There are a few equality operators that determine whether two values are equal.

They come in two flavours: equals value only, or equal value and data type.

The first one returns true when the values are equal, even though the type is different, while the second returns true only when the value and the type are the same.

```
let x = 5;
let y = "5";
console.log(x == y);
```

The double equals operator, two equal signs, means that it will only check for equal value. Both have the value 5, so it will log:

```
true
```

This type of equality is sometimes called loose equality.

The triple equals operator, written as three equal signs, means that it will evaulate both the value and the data type to determine whether both sides are equal or not. They both need to be equal in order for this statement to be true. In this example,

```
console.log(x === y);
```

Gives the result:

```
false
```

This is sometimes also called strict equality. This triple equals operator is the one you should most commonly be using when you need to check for equality, as only with this one can you be sure that both variable are really equal.

## Not equal

Not equal is very similar to equal, except it does the opposite = it returns true when two variables are not equal, and false when they are equal.

We use the exclamation mark for not equal:

```
let x = 5;
let y = "5";
console.log(x != y);
```

This will give the result:

```
false
```

This is because with a single equals sign the console is checking if the two values loosely match, which they do, and therefore with a not equals operator this returns a false value.

However, when there are two equals signs the console is checking for strict non-equality:

```
console.log(x !== y);
```

This will conclude that since x and y have different data types, they are not the same, and will log

```
true
```

# Logical operators

Whenever you want to check two conditions in one, or you need to negate a condition, the logical operators come in handy.

You can use and, or, and not.

## And

If you want to check whether x is greater than y and y is greater than z, you would need to be able to combine two expressions.

This can be done with the && operator.

It will only return true if both expressions are true:

```
let x = 1;
let y = 2;
let z = 3;
```

With these variables in mind, we are going to have a look at the logical operators.

```
console.log(x < y %% y < z);
```

This will log true.

```
console.log(x > y && y < z);
```

This will log false.

## Or

If you want to get true if either one of the expressions is true, you use or.

The operator for this is ||.

These pipes are used to see if either one of these two is true, in which case the whole expression evaluates to true.

```
console.log(x > y || x < z);
```

This will result in true, whereas it was false with &&.

When both sides are false, it will log false, for example:

```
console.log(x > y || y > z);
```

## Not

In some cases you will have to negate a Boolean. This will make it the opposite value.

It can be done with the exclamation mark, which reads as not:

```
let x = false;
console.log(!x);
```

This will log true, since it will simply flip the value of the Boolean.

You can also negate an expression that evaluates to a Boolean, but you would have to make sure that the expression gets evaluated first by grouping it.

```
let x = 1;
let y = 2;
console.log(!(x < y));
```

x is smalled than y, so the expression evaluates to true. But, it gets negated due to the exclamation mark and prints false to the console.
