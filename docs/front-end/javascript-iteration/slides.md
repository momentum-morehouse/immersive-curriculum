# JavaScript Arrays

---

# Arrays

An array is a list of values. These values can be anything, including other arrays. They can be any length, including 0.

```js
let people = ["Sam", "Zara", "Autumn", "Cadence", "Gale"];
let grades = [91, 83, 100, 87];
```

---

# Array indexes

An _index_ is a number that points to a position in an array. Indexes start at 0 and go to (length - 1), where length is the length of the array.

```js
let people = ["Sam", "Zara", "Autumn", "Cadence", "Gale"];

people[0]; // => "Sam"
people[1]; // => "Zara"
people[4]; // => "Gale"
people[people.length - 1]; // => "Gale"
```

---

# Array properties and methods

Arrays have a `.length` property that gives us the length of the array.

They also have many methods[^1] to let us manipulate and interrogate them.

[^1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

---

# Looping over an array with `for`

We can use a `for` loop to get each index in an array and then use that index to get each member.

```js
for (let i = 0; i < names.length; i++) {
  console.log("Hello, " + names[i] + "!");
}
```

---

# Using `while` to loop over an array

```js
let i = 0;
while (i < names.length) {
  console.log(i, names[i]);
  i = i + 1;
}
```

---

# for-of loops

For a simpler way to loop over an array and get each member, we can use a `for-of` loop.

```js
for (let name of names) {
  console.log("Hello, " + name + "!");
}
```

As the loop runs, each member of `names` is assigned to `name` in order. We _do not_ get the index in this case.

---

# Adding to/removing from the ends of arrays

```js
let students = ["Sam", "Val", "Landry"];
students.push("Charlie");
students; // => ["Sam", "Val", "Landry", "Charlie"]

students.pop(); // => "Charlie"
students; // => ["Sam", "Val", "Landry"]

students.unshift("Logan");
students; // => ["Logan", "Sam", "Val", "Landry"]

students.shift(); // => "Logan"
students; // => ["Sam", "Val", "Landry"]
```

---

# Finding things in arrays

```js
let students = ["Sam", "Val", "Landry"];

students.indexOf("Val"); // => 1
students.indexOf("Landry"); // => 2
students.indexOf("Logan"); // => -1
```

---

# Removing things from arrays

```js
let students = ["Sam", "Val", "Landry"];
let idx = students.indexOf("Val");
students.splice(idx, 1); // => ["Val"]
students; // => ["Sam", "Landry"]
```

---

# Copying arrays

```js
students.slice(); // returns a new array
```

---

# Common array actions

Three things we often want to do are:

- transform an array (create a new array of the same length with derived values)
- filter an array
- get one value from an array (sum, min, max, etc)

Let's see two techniques for each of these.

---

# Transforming an array

1. Create a new array
2. Loop over the original array
3. For each element of the original array, transform it
4. Push the new transformed element into the new array

---

# Transforming an array

Get word lengths

```js
let words = ["tapeworm", "gnarly", "armoire"];
let wordLengths = [];

for (let word of words) {
  wordLengths.push(word.length);
}

// wordLengths => [8, 6, 7]
```

---

# Transforming an array

Is the score a passing grade?

```js
let scores = [91, 54, 78, 39, 81];
let passingGrades = [];

for (let score of scores) {
  passingGrades.push(score >= 60);
}

// passingGrades => [true, false, true, false, true]
```

---

# Filtering an array

1. Create a new array
2. Loop over the original array
3. For each element of the original array, test to see if you want to keep it
4. If you want to keep it, push the element into the new array

---

# Filtering an array

Get only words with length > 6

```js
let words = ["tapeworm", "gnarly", "armoire"];
let filteredWords = [];

for (let word of words) {
  if (word.length > 6) {
    filteredWords.push(word);
  }
}

// filteredWords => ["tapeworm", "armoire"]
```

---

# Filtering an array

Keep only passing scores

```js
let scores = [91, 54, 78, 39, 81];
let passingScores = [];

for (let score of scores) {
  if (score >= 60) {
    passingScores.push(score);
  }
}

// passingScores => [91, 78, 81]
```

---

# Getting one value (reducing) an array

1. Find a starting value. This depends on the problem. If you want a sum, start with 0.
2. Loop over your array
3. For each element of the array, compare to the current value. If you need to update the value, do that.

This is not very clear!

---

# Reducing an array

Find the sum

```js
let scores = [91, 54, 78, 39, 81];
let sum = 0;

for (let score of scores) {
  sum += score;
}

// sum => 343
```

---

# Reducing an array

Find the shortest word

```js
let words = ["tapeworm", "gnarly", "armoire"];
let shortestWord = null;

for (let word of words) {
  if (shortestWord === null || word.length < shortestWord.length)
    shortestWord = word;
}

// shortestWord = "gnarly"
```

---

# Another technique for the above

Transforming, filtering, and reducing all can be done with array methods.

- `.map()`
- `.filter()`
- `.reduce()`

These methods take functions as arguments.

---

# Passing a function as an argument

In JavaScript, functions are another type of value. They can have variable names
(via `function` or `let/const`) or be _anonymous_.

---

# Anonymous functions

Use `function`, but leave the name out.

```js
function (score) {
  return score > 60
}
```

---

# Transforming an array

Get word lengths

```js
let words = ["tapeworm", "gnarly", "armoire"];
let wordLengths = words.map(function(word) {
  return word.length;
});
```

Note that `.map()` runs the loop for us! The function it takes as an argument (the mapping function) takes the individual elements one at a time as its argument.

---

# Filtering an array

```js
let words = ["tapeworm", "gnarly", "armoire"];
let filteredWords = words.filter(function(word) {
  return word.length > 6;
});

// filteredWords => ["tapeworm", "armoire"]
```

The filtering function should return true or false for each element. Elements which return true are kept.

---

# Reducing an array

```js
let scores = [91, 54, 78, 39, 81];
let sum = scores.reduce(function(total, score) {
  return total + score;
}, 0);

// score => 343
```

---

# Reducing an array

Note that `.reduce()` takes two arguments:

- a function that takes the current reduced value and the next array element as arguments
- the starting reduced value (this is optional -- if you don't include it, the first array element is used)

---

# Reducing an array

```js
let words = ["tapeworm", "gnarly", "armoire"];
let shortestWord = words.reduce(function(current, word) {
  if (word.length < current.length) {
    return word;
  } else {
    return current;
  }
});

// shortestWord = "gnarly"
```

I did not use a starting value here because using the first word as the starting value is easier than testing for null.

---

# Arrow functions

For simple anonymous functions, the _arrow syntax_ is sometimes used. Curly braces are not needed and the return is implicit.

```js
function (score) {
  return score > 60
}

// vs
(score) => score > 60

// or even
score => score > 60
```

---

# Arrow function examples

```js
let words = ["tapeworm", "gnarly", "armoire"];
let wordLengths = words.map(word => word.length);
let filteredWords = words.filter(word => word.length > 6);

let scores = [91, 54, 78, 39, 81];
let sum = scores.reduce((total, score) => total + score);
```
