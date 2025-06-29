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
