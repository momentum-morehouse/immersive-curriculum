# Introduction to Programming with JavaScript

---

# What is a programming language

# (and why do we need so many of them)?

- Programming languages are written for humans
- They provide us with a mental model of the computer and a vocabulary
- Different models and vocabularies make sense for different applications

---

# What's JavaScript good for?

- JavaScript is a general-purpose language
- It is the universal language for creating interactive web pages

---

# Where does JavaScript come from?

- It was designed by Brendan Eich in 1995 as a scripting language for Netscape Navigator (the predecessor to Firefox)
- Eich designed it in two weeks, drawing inspiration from languages both popular and obscure
- Because it powers the web, it has had an interesting trajectory

---

# Parts of almost every language

- Data types
- Variables
- Conditionals
- Loops
- Functions

---

# Data types in JavaScript

- numbers
- strings
- booleans
  - `true` and `false`
- null
- undefined
  - variable without an assignment
  - call a function without all of its arguments

---

# Numbers

- These are what you expect
- Can do math with `+`, `-`, `*`, `/`, `%`, and `**`
- Can compare with `===`, `!==`, `>`, `>=`, `<`, and `<=`

---

# Math operators

- `+`, `-`, `*`, `/` - add, subtract, multiply, divide
- `%` - _modulo_. The remainder of division. For example, `9 % 2` equals `1`
- `**` - _power_. Raise x to the power of y. For example, `2 ** 3` equals `8`

---

# Strings

- "I have 5 pets"
- "0"
- ""
- "^&#O%@"

---

# Booleans

- `true` and `false`
- Result of comparison operations

---

# Variables

- Variables are a name given to a value
- But can have new values assigned to them
- One way to think of them is a box that holds a value

![right](img/cat-in-box.jpg)

---

# Declaring and setting variables

```js
// variables declared with const cannot be reassigned
const width = 300;
const name = "Dorian";

// variables declared with let can be reassigned
let points = 12;
let paused = false;
paused = true;
points = 13;
```

---

# Shortcut assignment

`=` is used to assign values to variables. There are shortcuts for using math and updating variables, though.

```js
points += 5; // same as points = points + 5
points *= 2; // same as points = points * 2
points++; // same as points = points + 1
```

---

# Printing output

```js
console.log("My name is", name);
```

---

# Conditionals

One of the most basic things we need to do in programming is say "if this thing is true, then do this other thing." We use if/else statements for this.

---

# `if` alone

```js
if (points > 10) {
  console.log("You win");
}

if (madeGoal) {
  points = points + 2;
  console.log("You made a goal!");
  madeGoal = false;
}
```

---

# `if/else`

```js
if (points > 10) {
  console.log("You win");
} else {
  console.log("You lose");
}
```

---

# `if/else-if/else`

```js
if (yourPoints > theirPoints) {
  console.log("You win");
} else if (theirPoints > yourPoints) {
  console.log("You lose");
} else {
  console.log("You tied");
}
```

---

# Comparison operators

- `===` - equality
- `!==` - inequality
- `>`, `>=`, `<`, `<=` - gt, gte, lt, lte

_Anything_ that evaluates to true or false can be used in an if statement.

---

# `if/else` structure

```js
if (predicate) {
  codeBlock;
} else {
  otherCodeBlock;
}
```

---

# while and for loops

The next basic thing we need to do in programming is repeat the same task over and over. `while` and `for` are our tools for this.

---

# while loop

```js
// say hi 5 times
let count = 0;
while (count < 5) {
  console.log("Hi!");
  count += 1;
}
```

---

# while loop

A while loop will run its code block as long as its predicate is true.

```js
while (predicate) {
  codeBlock;
}
```

---

# for loop

```js
// say hi 5 times
for (let count = 0; count < 5; count++) {
  console.log("Hi!");
}
```

---

# for loops

A for loop combines its setup, predicate, and updating in one statement. It will run its code block as long as its predicate is true.

```js
for (setup; predicate; update) {
  codeBlock;
}
```

---

# When do I use a while loop vs a for loop?

- A for loop is for when you need to go through a limited list of numbers, always increasing (or decreasing) by the same amount, and ending at a specified point.
- A while loop is for everything else.
- You might think you'd use more while loops than for loops, but that's not usually the case.

---

# While loop - finding the first 10 even numbers

```js
let evenCount = 0;
let currentNumber = 1;

while (evenCount < 10) {
  if (isEven(currentNumber)) {
    console.log(currentNumber, "is even");
    evenCount += 1;
  }
  currentNumber += 1;
}
```

---

# For loop - find if a number is an odd number

```js
// ...
let limit = 20;

for (let i = 1; i <= limit; i++) {
  if (i % 2 != 0) {
    console.log(x, "is an odd number");
  }
}
```

---

# What is a function?

A function is a block of code that takes zero or more values and returns one value. This block of code isn't executed immediately, but later when it is _called_.

---

# Think about a recipe - black beans and rice

1. **Chop** an _onion_.
2. **Mince** _two cloves of garlic_.
3. **Heat** _1 teaspoon olive oil_ in a _stockpot_ over _medium-high heat_.
4. **Add** the _onion_ and _garlic_ and **saute** for _4 minutes_.
5. **Add** the _rice_ and **saute** for _2 minutes_.
6. **Add** _1.5 cups of vegetable broth_ and **boil** _the mixture_.
7. **Lower the heat** and **cook** for _20 minutes_.
8. **Add** _the spices_ and _3.5 cups black beans_.

---

# How to chop a vegetable

1. If the _vegetable_ is an onion, **peel back** the _papery skin_ and **cut off** the _top_.
2. **Cut** the _vegetable_ in _half_.
3. **Place** _each half_ cut-side down and **slice** the _vegetable_ _lengthwise_ in _parallel cuts_.
4. **Cut** the _vegetable_ with _several horizontal cuts parallel to the board_.
5. **Cut** through the _vegetable_ at _right angles to the board_.

---

# How does this relate to functions?

- We all have a vocabulary (chop, mince, saute, boil, etc) for cooking that each contain several sub-steps. These are functions!
- How you do each of these things is dependent on what you're doing it to (the arguments!)

---

# Creating and using functions

```js
function sayHello(name) {
  return "Hello, " + name + "!";
}

sayHello("Charlie"); // Hello, Charlie!
```

---

# Creating and using functions

```js
function ordinal(num) {
  if ((num > 3 && num <= 20) || (num < -3 && num >= -20)) {
    return num + "th";
  } else if (Math.abs(num % 10) === 1) {
    return num + "st";
  } else if (Math.abs(num % 10) === 2) {
    return num + "nd";
  } else if (Math.abs(num % 10) === 3) {
    return num + "rd";
  }
  return num + "th";
}
```

---

# Function arguments and variable names

- Function arguments are like variables
- You can reassign them with new values
- If you pass variables to a function as arguments, they _do not_ have to have the same name

---

# Using different variable and argument names example

```js
let ballRadius = 10;
let pi = 3.14159;

function circleArea(radius) {
  return pi * radius * radius;
}

console.log(circleArea(ballRadius));
```

---

# Scope

Variables have a _scope_ -- a defined area of the code where they exist and can be used. If you define a variable outside of any code block (an area surrounded by curly braces), it is available throughout your code. If you define a variable within a code block, it is available in that code block and all code blocks nested under it.

---

# Scope

```js
// global scope
let name = "Keelan";
let score = 0;

if (score === 0) {
  // new scope - name and score are available
  let punctuation = "!";
  printLoss(name, punctuation);
}

function printLoss(name, punctuation) {
  // new scope - name and punctuation are available from the arguments,
  // and score is available from the global scope
  let message = "You lose, " + name + punctuation;
  console.log(message);
}
```
