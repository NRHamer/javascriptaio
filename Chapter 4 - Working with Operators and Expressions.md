# Chapter 4 - Working with Operatros and Expressions

# Building Expressions

There are two types of expression

```
Those that affect something

Those that simply resolve to a value
```

An example expression that combines both of these expressions would be,

```
x = x + 1;
```

This statement consists of two expressions. The first one adds 1 to the value of x, and the second one assigns that new value to x. The result is that the value of x is incremented by 1.

## Express Yourself

There are numerous ways to write expressions that produce the same result. For example, the expression above could also be written,

```
x += 1;
++x;
x = (-(~x));
```

The method used is entirely personal preference.

# Operators: The Lineup

The symbols and keywords that make expressions do their work are called 'operators'. They operate on values called 'operands', to produce the final value of an expression.

## Operator precedence

Operator precendence - assigns a number from 1 to 19 to each operator.

Associativity - the direction is which expressions that use the operator are evaluated.

Left-associativity - means that the left side of the operator is evaluated first.

Right-associativity - means that the right side of the operator is evaluated first.'

## Using parentheses

The is one operator you can use to make sure your statements always do things in the order you want. This is the grouping operator.

Grouping Operator - used to control the order of evaluation of statements. Is made up by opening and closing parenthesis.

## Assignment operators

The assignment operator assigns a value to the operand on the left based on the operand on the right. For example,

```
x = 10;
x = y = z = 0;
```

Remember that the associativity of the assignment operator is from right to left. So, the way JavaScript executes this expression is by assigning 0 to z, and then the value of z to y, and then the value of y to x. In the end, all variables are 0.

## Comparison operators

The comparison operators test for 'equality' of the left and right operands, and return a Boolean value.

```
JavaScript Comparison Operators

Operator    Description         Example
==          Equality            3 == "3" //true
!=          Inequality          3 != 3 //false
===         Strict equality     3 === "3" //false
!==         Strict inequality   3 !== "3" //true
>           Greater than        7 > 1 //true
>=          Greater than or equal to
<           Less than           7 < 10 //true
<=          Less than or equal to
```

The equality and inequality operators only compare the values of the left and right operands.

When possible they changeo the type of the right operand to match the type of the left operand.

This is useful, but it can create bugs. For example,

```
0 == "0"
True
```

In reality, the number 0 is not the same as a string containing a 0. Relying on JavaScript to automatically convert a string to a number is bad coding practice.

For this reason, most JavaScript developers never use the == and != operators.

Instead, you should convert strings to numbers by using the parseInt( ) or parseFloat( ) function, convert numbers to string using the toString( ) function, and use the strict equality and strict inequality operators, like this:

```
a = parseInt("3");
b = parseInt("5");
a === b
false

c = parseFloat("3.01")
d = parseFloat("3.00")
a === c
false

a === d
true
```

## Arithmetic Operators

```
Operator     Description                    Example
%            Remainder                      a = 5 % 2

++           Increment                      a = ++b
                                            a = b++
                                            a++

--           Decrement                      a = --b
                                            a = b--
                                            b--

**           Exponentiation operator        2 ** 2
```

## Logical Operators

Logical operators evaluate an expression for truthiness or falsiness.

```
Operator    What it means       What it does
&&          And                 Returns the first falsy operand. If all
                                values are truthy, it returns the value of
                                the last operand.

||          Or                  Returns the value of the first truthy
                                operand. If all the operands evaluate to
                                false, it returns the last operand.

!           Not                 Takes only one operand. Returns false if
                                its operand can be converted to true.
                                Otherwise it returns true.
```

The logical AND and OR operators also have clever other uses. The || operator can be used to set a variable to a default value, like this:

```
let language = userPreference.language||'English';
```

This statement sets the language to the user-specified language if the user has set one; otherwise it sets language to 'English'.

The && operator can be used to choose between paths, like this:

```
let logInScreen = !loggedIn && showLogInScreen( );
```

In this example, if the loggedIn variable is falsy, the showLogInScreen( ) function will run. The condition you're testing for is whether the value of loggedIn is falsy.

```
The || and && operators are known as short-circuit operators because they stop executing and return a value when they find a truthy value (||) or a falsy value (&&).
```

The logical NOT operator(!) is often used to test whether a variable hasn't been initialized or is false:

```
if (!isRegistered) {alert ("Register now!");}
```

Two NOT operators can be used to convert any value to its Boolean equivalent:

```
!!"I like cheese"
true
```

## Combining Operators

The assignment operator can be combined with other operators as a shorthand method of assigning the result of an expression to a varaible or constant. For example, the following statements are equivalent:

```
score = score + 1;
score += 1;
```

To form the combination operators, the assignment operator is always on the right and the other operator is on the left.
