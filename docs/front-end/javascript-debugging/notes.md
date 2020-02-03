# Debugging How-to

## What is a bug?

A bug is an unintended consequence of running code.

- It could be showing up as an error in our console
- It could be as small as a typo
- It could be an actual mistake (we meant to do one thing but accidentally chose the wrong method, e.g)
- It does not have to be an error!
- It could just be a result of complexity and unforeseen side effects

- What is a bug?
  - [First bug!](https://americanhistory.si.edu/collections/search/object/nmah_334663)
- It's important to clearly identify what is happening so that you know where to start looking. To do that, it has to be reproducible. You want to be able to say, "Every time this happens, the result is this." The hardest to fix bugs are the ones that are not consistently reproducible.
- Common bugs
  - using an assignment operator `=` instead of a comparison operator `===`
  - comparing mismatched types (using `==` instead of `===`)
  - missing brackets and parentheses, or misplaced return statement
    - eg example from foundations: the return statement happens inside the loop
  - unescaped quotes in a string (closing the string too early)
  - Typos, mispellings, capitalization errors

## How to think about debugging

We are trying to get to the source of an issue. To do that, we need to isolate the problem so that we can focus on one thing at a time. Sometimes this means we have to untangle things. We need to deal with one problem at at time -- the issue we are seeing might be caused by more than one thing.

- First thing: reproduce the bug and observe it in action until you understand what is going on
  - observe the behavior and investigate to see what is happening clearly
- Step though and test your assumptions.

  - Your goal is to verify everything, line by line
  - Start at the place where you are sure everything is fine, and then go back at least one step to start there.

- Isolate as much as you can.

  - Take one tiny piece of code that can be executed -- for instance, not the whole if statement at once, but the predicate/condition only.
  - Run that in the console. Does that give you what you expect? If so, move on to the next thing. If not, then YAY that's at least part of your bug.
  - Confirm your expectations at each step.

- Be methodical. Do not jump around. Follow one line of inquiry though to the end.
  - A common beginner mistake is to change a number of things all at once and then reload the browser. You have no idea what change you made may have caused any differences in behavior.
  - You need to go slow in debugging.

## Tools

### Linters

VS Code and other editors have the ability to automatically check your code for errors or other potential problems. The way linters work is that you have the basic functionality and then you add a set of linting rules that you choose. These rules are configurable.

- [ES Lint](https://eslint.org/)
- [ES Lint extension for VS Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

This is what highlights something in your code with a squiggly line or some other indicator and warns you about a potential problem.

Linters can be really helpful, but can also get in the way if they are overly sensitive. You still have to make the judgment about whether something is ok or not, by manually checking what is going on.

### Other VS Code tools that can help you

- Bracket pair colorizer

### Using chrome dev tools

(demo the number guessing game)

#### The console

- Console.log: what it is and how to use it to investigate the state of your code
  - verify that a particular line is reached
  - use these liberally while developing but don't leave them in your code

* Look at error messages in the console
  - see what the line number is
    - sometimes the line number is simply the first place the problem surfaced and not actually the source
  - what the exact error is
* How to read an error
  - name of error and error message
    - the name an Error object, but implemented differently in different browsers
    - the message is an optional part of the error and is meant to be human-readable
    - the chrome dev tools will show you the line number and file that the error occurred in
* common error messages and what they usually indicate
  - `TypeError`
    - a value is not the type that the JS interpreter expected it to be, based on what you tried to do --
    - `TypeError: cannot read property [something] of undefined`
    - `TypeError: cannot read property [something] of null`
    -
  - `SyntaxError`
    - you have invalid syntax that stops execution. Look for misspellings, unclosed parentheses or characters that you meant to put in a string but forgot to
  - `Uncaught Reference Error: [something] is not defined`
    - js evaluated something that looked like a variable or function name, but it did not find that value
  - `TypeError: undefined is not a function`
    - you've treated something that is not a function like a function.
    - or you have a typo in your function name
  - `unexpected token`
    - you have a misplaced or missing character (usually a parenthesis or bracket)
    - Js expected one character and got another
    - e.g. `let calculatePrice; calculatePrice ( { console.log }`
    - in this example, we just forgot to type a closing paren after the function name

### Breakpoints

- what is a breakpoint and why would I want to use one
- Set a breakpoint in Chrome DevTools on Sources panel
  - conditional breakpoint (useful for a loop or a large data set
  - event listener breakpoints
- debugger keyword

- step through with panel in chrome dev tools [docs](https://developers.google.com/web/tools/chrome-devtools/javascript/reference#stepping)
- hit ESC key to open a console here that you can type in and see what you have access to
- step over a function if you want to execute it without stepping into it
- step into a line of code to execute it
- step out of a line of code to keep going in execution

- watch panel:
- [chrome dev tools watch](https://developers.google.com/web/tools/chrome-devtools/javascript/reference#watch)

### Exceptions

- Errors and error messages are good! They contain information about what went wrong, so we can fix it!
- Error object [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error))
- Errors that developers create on purpose:
  - stops execution of the program
  - either ends the program or passes execution to the first catch block it encounters
  - In that catch block we can log information about what happened, or

#### try/catch

```js
// this function will throw an error
function wack(something) {
  if (something) {
    console.log("Carry on!");
  } else {
    // the throw keyword is used to raise an exception
    throw new Error("something went wrong!");
  }
}

// if we anticipate a potential error, we can set up our code to catch that error
// this prevents it from stopping execution of the rest of the program

function doStuffThatReliesOnWack() {
  try {
    wack();
  } catch (error) {
    console.log(error);
    // console.log(error.message);
    // console.log(error.stack);
  }
}
```

- can also add a `finally` block to ensure code that always executes
