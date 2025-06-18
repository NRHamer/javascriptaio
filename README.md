# JavaScript All-In-One for Dummies

I'm learning JavaScript, React, Vue, Svelte, and Node from JavaScript All-In-One For Dummies by Chris Minnick

# Gamelet

A starter program for writing JavaScript games.

## Usage

1. Include gamelet.js in an HTML document containing an element with an id of 'ball'.

```html
<div id="ball">@</div>
<script src='gamelet.js"/>
```

2. The script will detect when the left or right arrow keys are pressed and will move the ball element accordingly.

## Template literal notation

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

# Boolean Data Type

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
