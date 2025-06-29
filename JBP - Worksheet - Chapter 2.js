//testing the let function
let language = "JavaScript";
let message = `Let's learn ${language} together!`;
console.log(message);
//testing backslashes and quotes in strings
let str = 'Hello, what\'s your name? Is it "Mike"?';
console.log(str);
let str2 = 'Hello, what\'s your name? Is it "Mike"?';
console.log(str2);
//testing new lines and backslashes in strings
let str3 = "New \nline.";
let str4 = "I'm containing a backslash: \\!";
console.log(str3);
console.log(str4);
//comparing strings and symbols
let str5 = "JavaScript is fun!";
let str6 = "JavaScript is fun!";
console.log("These two strings are the same:", str5 === str6);
let sym5 = Symbol("JavaScript is fun!");
let sym6 = Symbol("JavaScript is fun!");
console.log("These two symbols are the same:", sym5 === sym6);
//testing typeof operator
testVariable = 1;
variableTypeTest1 = typeof testVariable;
variableTypeTest2 = typeof testVariable;
console.log(variableTypeTest1);
console.log(variableTypeTest2);
// testing typeof operator with different data types
let str7 = "Hello";
let nr = 7;
let bigNr = 12345678901234n;
let bool = true;
let sym = Symbol("unique");
let undef = undefined;
let unknown = null;
console.log("st7", typeof str7);
console.log("nr", typeof nr);
console.log("bigNr", typeof bigNr);
console.log("bool", typeof bool);
console.log("sym", typeof sym);
console.log("undef", typeof undef);
console.log("unknown", typeof unknown);
//Automatic type conversion
let nr1 = 2;
let nr2 = "2";
console.log(nr1 * nr2);
//Converting data types
let nrToStr = 6;
nrToStr = String(nrToStr);
console.log(nrToStr, typeof nrToStr);
let strtoNr = "12";
strToNr = Number(strtoNr);
console.log(strToNr, typeof strToNr);
let strToBool = "any string will return true";
strToBool = Boolean(strToBool);
console.log(strToBool, typeof strToBool);
//Converting to Boolean
let strToBool2 = "false";
strToBool2 = Boolean(strToBool2);
console.log(strToBool2, typeof strToBool2);
let strToBool3 = "";
strToBool3 = Boolean(strToBool3);
console.log(strToBool3, typeof strToBool3);
