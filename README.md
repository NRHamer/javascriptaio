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
