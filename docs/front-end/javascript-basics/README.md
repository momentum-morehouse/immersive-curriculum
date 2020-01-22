# Programming basics in JavaScript

## Objectives

Students should be able to:

- Identify and explain basic programming concepts.
- Create and use variables, data types, conditionals, loops, and functions.
- Use variables, data types, conditionals, loops, and functions in context to create simple programs.
- Be able to look up and try methods and properties for built-in objects

## Assignment

This assignment lets students practice simple code constructs and get immediate feedback.

- [JS practice problems 1](https://github.com/momentum-assignments/js--practice-problems-1)

## Lecture notes

- variable assignment: variables are "wires" that point to values. The right hand side of a variable assignment is an expression that has to be evaluated (something like "darcy@gmail.com" is also an expression -- it is a string literal)
- naming variables is hard! Some considerations...

## Resources

- [Slides](slides.md)
- [Kyle Simpson's You Don't Know JS: Get Started](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/ch2.md)

## Demo ideas

- `typeof` in the console with different data types (this example is from Kyle Simpson)

```js
typeof 42; // "number"
typeof "abc"; // "string"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof null; // "object" -- oops, bug!
typeof { a: 1 }; // "object"
typeof [1, 2, 3]; // "object"
typeof function hello() {}; // "function"
```

- arithmetic operators and comparisons in the console
- concept of truthy/falsy with conditionals
- number includes both floats and integers; numbers are imprecise (e.g. eval `0.1 + 0.2`)
- variable assignment and reassignment in the console
  - difference between `let` and `const`

## Schedule

- Discussion: (5 minutes) talk with class about what programming languages they've heard of/used. Use this information for comparison when teaching JavaScript.
- Say/do: (120 minutes) Go through slides. Spend time answering questions and filling out the idea of what a programming language is. Between slides, break and demonstrate code in the JavaScript console in your browser.
- Demo: Homework. Explain how to do the practice problems by running the tests (demo in browser). Look at tests.js and talk through the basics of what is happening here (and remind students that it is important that your function is named correctly)
- Demo: (20 minutes, may do during next day's homework review) Demonstrate how to write a function to find the nth [Fibonacci number](https://en.wikipedia.org/wiki/Fibonacci_number).
