# Chapter 1 - Getting Started with JavaScript

A web page isn't just JavaScript. Web pages are written in three languages: HTML, CSS, and JavaScript.

## HTML

HTML determines what is on the page; the content of the page is in there.

HTML consists of elements, also called tags. They specify what is on the page.

For example:

```
<html>
  <body>
    Hello world!
  </body>
</html>
```

## CSS

CSS is the layout of the web page. So for example, if the text colour is blue, this is done by CSS. Font size, font family, and position on the page are all determined by CSS.

## JavaScript

JavaScript defines what the web page can do and how it can interact with the user or the backend.

The current specification or standardization for JavaScript language is called ECMAScript 6.

ECMAScript 6 is the basic specification that the JavaScript implementation will definitely include.

## Console

The console is used by developers to log what is going on and do any debugging. The console gives some insights as to what is happening if you log sensible messages. This is the first command we are going to learn:

```
console.log("Hello world!");
```

Web browers have an in built console which can be found by pressing F12.

There are also other console methods, such as console.table(), that creates a table when the inputted data can be presented as a table. Another console method is console.error(), which will log the inputted data, but with a styling that draws attention to the fact that it's an error.

# Adding JavaScript to a Web Page

There are two ways to add JavaScript to a web page.

The first way is to type the JavaScript directly in the HTML between two < script > tags.

In HTML, the first tag, < script >, is to declare that the following script will be executed. Then we have the content that should be inside this element. Next, we close the script with the same tag, but preceded by a forward slash < /script >.

The second way is to link a JavaScript file to the HTML file using the script tag at the head of the HTML page.

## Directly in HTML

Here is how to write a very simple web page that will give a pop-up box saying 'Hi there!':

```
<html>
  <script type = "text/javascript">
    alert("Hi there!");
  </script>
</html>
```

Read now we have the content directly within our < html > tags. This is not best practice.

We will need to create two elements inside < html > - < head > and < body >.

In the head element, we write metadata and we also use this part later to connect external files to our HTML file.

In the body, we have the content of the web page.

We also need to let the browser know what kind of document we're working on with the < !DOCTYPE > declaration. Since we're writing JavaScript inside an HTML file, we need to use < !DOCTYPE html>. Here's an example.

```
<!DOCTYPE html>
<html>

<head>
 <title>This goes in the tab of your browser </title>
 </head>

 <body>
 The content of the webpage
   <script>
     console.log("Hi there!");
   </script>
 </body>
</html>
```

## Linking an external file to our webpage

You can also link an external file to the HTML file.

This is considered better practice, as it organizes code better and you can avoid very lengthy HTML pages due to the JavaScript.

In addition to these benefits, you can reuse the JavaScript on other web pages of your website without having to copy and paste.

First create a seperate JavaScript file called 'JBP - External Alert.js'. The content will beL

```
alert("Saying hi from a different file");
```

Then we are going to create a seperate HTML file and give it this content:

```
<html>
  <script type="text/javascript" src="External Alert.js"></script>
</html>
```

# Writing JavaScript code

## Indentations and whitespace

When writing code, often a line of code belongs to a certain code block (code between two curly backets) or parent statement. You can use indentations to make reading code easier. For example:

```
let status = "new"; let scared = true; if (status === "new") {console.log("Welcome to JavaScript!"); if (scared) {console.log("Don't worry you will be fine!");} else {console.log("You're brave! You are going to do great!");}} else {console.log("Welcome back, I knew you'd like it!");}
```

With lines and indentation this becomes:

```
let status = "new";
let scared = true;
if (status === "new"){
  console.log("Welcome to JavaScript!");
  if (scared){
    console.log("Don't worry you will be fine!");
  } else {
    console.log("You're brave! You are going to do great!");
  }
} else {
  console.log("Welcome back, I knew you'd like it!");
}
```

## Semicolons

After every statement, you should insert a semicolon.

When you declare a code block, such as an if statement or loop, you should not end with a semicolon. It is only for the seperate statements.

## Code comments

You can add comments to code. This can be done for a number of reasons:

1. You do not want to execute a piece of code while running the script, so you comment it out so it gets ignored by the interpreter.

2. Metadata. Adding some context to the code.

3. Adding comments to specific parts of the code to explain what is happening or why a certain choice has been made.

There are two ways to do this.

```
// use double foward slashes for single line comments

/* Use
an asterisk and
a forward slash
for multiple line comments
*/
```

## Prompt

A command prompt works very much like an alert, but instead, it takes input from the user.
We will learn how to store variables very soon, and once you know that, you can store the result of this prompt function and do something with it.

Open the Hi.html document and change the alert() to a prompt().

Now you get a popup with an input box in which you can enter text. The value you enter will be returned to the script, and can be used in your code. This is great for getting user input to shape the way your code works.

## Random numbers

The command to create a random number is:

```
Math.random();
```

We can use it in the console and see the result appear if we log it:

```
console.log(Math.random());
```

This number will be a decimal between 0 and 1. If we want a number between 0 and 100, we can multiply it by 100, like this:

```
console.log(Math.random()*100);
```

If you don't want to have a decimal result, we can use the Math.floor function on it, which is rounding it doen to the nearest integer:

```
console.log(Math.floor(Math.random()*100));
```

# Chapter Project

## Creating an HTML file and a linked JavaScript file

Create an HTML file and create a seperate JavaScript file. Then, connect to the JavaScript file from the HTML file.

1. In the JavaScript file, output your name in the console and add a multiple line comment to your code.

2. Try commenting out the console message in your JavaScript file so that nothing shows in the console.

## Self-check quiz

1. What is the HTML syntax to add an external JavaScript file?

```
< script type="type/javascript" src="Insertfilenamehere.js" > < /script >
```

2. Can you run JavaScript in a file with a JS extension in your browser?

Yes.

3. How do you write a multiple-line comment in JavaScript?

```
*/
Use asterisk and forward slashes
/*
```

4. What is the best way to remove a line of code from running that you might want to keep as you debug?

Comment it out using // for a single line and _/ and _/ for multiple lines.
