// Intro JS: if/else

// 1. What will be logged to the console when the statement below runs?
var x;

if (x) {
  console.log("True!");
} else {
  console.log("False!");
}

// 2. Which branch of the if/e;se statement will run here?
if ("") {
  console.log("True!");
} else {
  console.log("False!");
}


// 3. Can you predict what will happen when you run the following?
var x = 1 * undefined;

if (x) {
  console.log("True!");
} else {
  console.log("False!");
}


// 4.
if (-5 && 5) {
  console.log("True!");
} else {
  console.log("False!");
}


// 5.
if ("Hello World!") {
  console.log("True!");
} else {
  console.log("False!");
}

// 6. Try running this a few times, changing the boolean values for a and b so that the logic will run with different combinations. Observe the outcomes.
var a = false;
var b = true;

if (a || b) {
  console.log("True!");
} else {
  console.log("False!");
}