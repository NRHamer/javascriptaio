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
