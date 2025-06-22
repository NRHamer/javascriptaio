# Chapter 3 - Using Data

# Variables

## Making Variables with let

Variables are names that represent values in a program.

JavaScript has the 'let' keyword for creating new variables.

## Declaring variables

Creating a new variable is known as declaring a variable. To declare a variable using let, simply write the let keyword followed by what you want to name the variable, like this:

```
let phoneNumber;
```

This line creates a new empty variable named phoneNumber.

Technically, a new declared variable isn't empty. JavaScript automatically assigns it a value of 'undefined'.

Once you've declared a variable, you can assign it a value like this:

```
phoneNumber = '503-555-5555';
```

## Initializing Variables

Assigning a value to a variable for the first time is called 'initializing a variable'. You can also combine the declaration and initializing of a variable into one statement, like this:

```
let favouriteColour = 'red';

let seven = 7;
let eight = 8;
let sum = seven + eight;
sum
15
```

## Using Variables

You can think of a variable as a box that holds a single item.

This box may have a label that describes its contents, and the more descriptive the label is, the easier it is to know what should be kept in the box.

Variables are typically named according to the purpose of the values they store.

Constants are typically named in a way that identifies the exact value they store.

```
let lastName = 'Hamer';
let firstName = 'Nick';
let fullName = firstName + lastName;
fullName
'Nick Hamer'
firstName = 'Richard';
fullName
'Nick Hamer'
```

# Constants

## Making Constants with const

Constants created using const work similarly to variables created with let, with one important difference:

```
Once declared, a constant can't be re-assigned.
```

Because a constant can't be assigned a new value after it's created, you must always declare and initialize a constant at the same time - for example:

```
const likesTacos = true;
```

Technically speaking, const doesn't create values that can't be changed ('immutable values') it creates a read-only reference to a value.

What this means in practice is that if you assign a value to a const that includes other values, you can still change the inner values of the const - just not the value the const refers to.

## When to use constants

Anytime you have a value that you know won't change during the life of a program, and that you need to use more than once, you should make it a constant.

# Data Types

## Taking a Look at the Data Types

Variables and constants all have two things in common: a value and a type.

We've already seen examples of values. These are bits of data you want to store in the variable.

A variable's data type is the kind of data a variable can hold. It's what determines whether 97103-4535 is a postal code or a mathematical operation.

## JavaScript is loose and dynamic

```
Loose Language

JavaScript is a loosely typed language. This means you can store any type of data in a variable or constant without having to tell JavaScript in advance the type of data you'll store in the variable.
```

```
Dynamic Language

JavaScript is also a dynamically typed language. This means that you can change the type of data stored in a variable. You might initialize a variable using a number but later store text in it.
```

To see a value's or variable's data type, you can use the typeof operator.

```
typeof "1"
string

typeof 0
number

typeof true
boolean

typeof "true"
string

typeof a
undefined

typeof "a"
string
```

## Passing by value

JavaScript has seven basic data types, which are known as the primitive data types.

Primitive data types are passed by value.

When you create a new variable from an existing variable, what's happening is that the value is that the value of the existing variable is copied to the new one.

```
let firstName = "Nick";
let lastName = "Hamer";

let fullName = firstName + ' ' + lastName;
```

When you create fullName, the values of firstName and lastName are copied and concatenated.

If you change the values of firstName and lastName after fullName was created, fullName doesn't know about that, in the same way that a picture you take of someone doesn't change when they get a haircut.

```
let firstName = "Richard";
fullName;
"Nick Hamer"
```

## Escaping characters

When you need to use double quotes in a double-quoted string, you can escape them by prefacing the offending symbol with a backslash ( \ ).

```
let famousQuote = "\"Nothing great was ever achieved without enthusiasm"\".
```

## Template literal notation

In additiona to single quotes and double quotes needing to be "escaped", several other special characters can't be used in a string unless you use an escape code.

Template literals start and end with the backtick (`) character

```
\` - Single quote
\`` - Double quote
\\ - Backslash
\n - New line
\r - Carriage return
\t - Tab
\b - Backspace
\f - Form feed
```

The useful thing about template literals is that you can include JavaScript expressions inside them by surrounding the expression with curly braces preceded by a dollar sign ($).

The below example shows how to use a template literal string to compile a message to be displayed after someone places an order.

```
let orderTotal = 39.99;
let itemPurchased = 'JavaScript All-In-One For Dummies';
let customer = 'Joe Q. Developer';

let thankYou = `${customer}, thank you for your order of ${itemPurchased}. Your payment of ${orderTotal} was successful.`;
```

## Work with Number Functions

parseInt - converts a number to an integer

Example

```
parseInt(5.343235);
5
```

parseFloat - specifically tells JavaScript to treat a number as a float, meaning that it will include the portion after a decimal point.

Example

```
parseFloat(10.00);
10

parseFloat(10.01);
10.01
```

One of the most common uses of parseInt and parseFloat is to convert strings to numbers. For example, if the user of your web app enters a number into a text field, that value is received by your program as a string.

## Boolean Data Type

Boolean variables store one of two possible values: either true or false.

When you compare items in JavaScript, the result is a Boolean.

```
3 < 10
true

90 < 10
false

true === false
false

0! == "0"
true

"apples" === "oranges">>
false
```

Any value in JavaScript can be converted to a Boolean by using the !! operator.

```
!!"JavaScript is awsome"
true

!!"I am the best JavaScript programmer"
true

!!0
false

!!""
false

!!99
true

!!null
false
```

Some of the values in this list are true and others convert to false. But why? The answer lies in the idea of 'Truthy' and 'Falsy' values.

The ! (called "bang") operator is the logical NOT operator.

Using one ! to the left of a value returns its Boolean opposite. So, two !'s returns the double opposite, which is how !! can be used to convert a value to its associated Boolean value.

## Getting Truthy and Falsy

You can always know whether a value, when coverted to Boolean, will be true or false by remembering a short list of items that always convert to false.

These value are called "falsy" in JavaScript.

```
false
0 (zero)
-0
0n (BigInt zero)
"" (an empty string)
null
undefined
NaN
```

Everything else is true when converted to Boolean.

Why is this useful?

The idea of truthy and falsy allows you to simplify the code for many operations in JavaScript.

For example, it's quite common to need to determine whether a variable has a value before trying to do something with it.

One way to do this is to write something like the following statement:

```
if(city === ''){
    alert('City is a required field.');
}
```

This code might be used to determine whether someone forgot to fill out a field named city on a form. Another way to write this same thing is to just use the city variable in the parentheses, which converts city to a Boolean. If it has a value, it will be true. If it doesn't have a value, it will be false. Because you want to know whether city is false, you can invert the Boolean to say "If city is not truthy" like this:

```
if(!city){
    alert('City is a required field.');
}
```

## NaN data type

NaN stands for Not a Number. NaN is what you get when you try to perform impossible mathematical operations or when you try to perform mathematical operations with strings.

These are examples of operations that return NaN:

Math operations where the result is not a real number, such as trying to calculate the square root of a negative number:

```
Math.sqrt(-1)
```

Attempting any mathematical operation involving a string, other than with the additional operator:

```
"yarn" / "cats"
```

Attempting to convert a string into a number:

```
parseInt("sandwich")
```

## Undefined data type

Undefined is the default data type and value of a variable that's been declared but not initialised in JavaScript.

It's also the value that will be returned by a statement or function that doesn't specifically return a value.

You can see this default return value in action by entering a variable declaration into the JavaScript console in your browser. Whenever you run a JavaScript statement or expression in the console, JavaScript must return a value. If the statement you run doesn't specifically have a return value, the returned value is undefined.

## Symbol data type

The Symbol data type is used to create unique identifiers in JavaScript. Unlike the other data types, even if two symbols appear to be identical and have the same name, JavaScript guarantees that they'll be unique.

```
let symbol1 = Symbol("mysymbol");
let symbol2 = Symbol("mysymbol");
symbol1 === symbol2
FALSE
```

## Wrangling the Object: The Complex Data Type

In addition to its seven primitive data types, JavaScript also has a complex data type called 'object'.

Objects are containers for related data and functionality.

For example, an object called customerInfo might contain a name and an address and various other values related to a particular customer of a business.

To make an object, place curly braces { } around a comma-seperated list of name:value pairs.

For example

```
const customer = {
    name: 'Laura Wigfall',
    address: '3427 Crummit Lane',
    city: 'Providence',
    state: 'RI';
    zipcode: '02905',
    customerId: 4,
    isInLoyaltyClub: true,
};
```

The key things to notice about this object are:

```
The values inside an object (which are called properties) can be of any combination of the other data types. In fact, these values can be (and often are) objects themselves.

This object was declared using const. Objects are commonly declared as constants. The result is that the object itself is unchangeable, though the values inside it can still be changed.
```

You can access the properties of an object by using what's called dot notation.

```
customer.zipcode
02905
```

JavaScript returns the value of that property in response. You can use dot notation to create and change properties as well.

## Examining the Array - a Special Kind of Object

Arrays aren't primitive data types, but they aren't exactly objects, either.

Arrays are used to store lists of items using a single name. The items inside an array are its 'elements', and the number you can use to access or modify elements is the 'index'.

For example

```
const favouriteCities = [
    'Rome',
    'Berlin',
    'New York',
    'Paris',
    'Astoria',
];
```

You can now access the elements in an array by using the name of the array followed by square brackets containing the index position of the element you want.

For example

```
favouriteCities[1];
Berlin
```

## Getting a Handle on Scope

The location where you declar a variable determines where your program can make use of that variable. This concept is called 'variable scope'.

JavaScript has three kinds of variable scope:

```
Global-scoped variables can be used anywhere inside a program.

Function-scoped variables can be used anywhere within the function where it was declared. Function scoped-variables are created using the var keyword.

Block-scoped variables are variables created using the let or const keyword and initialized inside of a block. A block in JavaScript is a unit of code that starts with a left curly brace ({) and ends with a right curly brace (}). Block scoped variables can be used anywhere within the block where they are declared.
```
