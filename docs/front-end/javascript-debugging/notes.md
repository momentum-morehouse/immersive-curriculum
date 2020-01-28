- how to use chrome dev tools
  - Console.log: what it is and how to use it to investigate the state of your code
- What is a bug?
  - [First bug!](https://americanhistory.si.edu/collections/search/object/nmah_334663)
- Common bugs
  - using an assignment operator `=` instead of a comparison operator `===`
  - comparing mismatched types (using `==` instead of `===`)
  - missing brackets and parentheses, or misplaced return statement
    - eg example from foundations: the return statement happens inside the loop
  - unescaped quotes in a string (closing the string too early)
  - Typos, mispellings, capitalization errors
  -

```js
let books = [
  { title: "Song of Solomon", author: "Toni Morrison", read: true },
  { title: "Tropic of Cancer", author: "Henry Miller", read: false },
  {
    title: "Oranges Are Not the Only Fruit",
    author: "Jeanette Winterson",
    read: true
  }
];

function listBooksRead(bookList) {
  var readingList = [];
  for (var i = 0; i < bookList.length; i++) {
    if (bookList[i].read === true) {
      readingList.push(bookList[i].title);
    }
    return readingList;
  }
}
```

- Read an error message and stacktrace
- How to read an error
  - name of error and error message
    - the name is part of JS, a built-in object
    - the message is an optional part of the error and is meant to be human-readable
    - the chrome dev tools will show you the line number and file that the error occurred in
- What is a stacktrace?
  - what is a stack?
- common error messages and what they usually indicate
  - `TypeError`
    - a value is not the type that the JS interpreter expected it to be, based on what you tried to do
    - `TypeError: cannot read property [something] of undefined`
  - `SyntaxError`
    - you have invalid syntax that stops execution. Look for misspellings, unclosed parentheses or characters that you meant to put in a string but forgot to
  - `Uncaught Reference Error: [something] is not defined`
    - js evaluated something that looked like a variable or function name, but it did not find that value
    - `undefined is not a function`
    - you've treated something that is not a function like a function.
  - `unexpected token`
    - you have a misplaced or missing character (usually a parenthesis or bracket)
- Errors that developers create on purpose
  - Errors in a larger context
  - Error object [mdn documentation]
- Breakpoints
  Use a debugger effectively (breakpoints)
