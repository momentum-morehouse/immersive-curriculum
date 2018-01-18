// 1. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.

// 2. Create a function called "average" that takes an array of numbers
// and returns the average of those numbers.

// 3. Create a function called "intersection" that takes two arrays and
// returns a new array that contains the elements found in both arrays.
// The order they are in does not matter, but no duplicates should be
// in the returned array, even if they were in the input.

// 4. The deviation of a number can only be calculated in reference to
// a group. The deviation is the difference between a number and the
// average value of the group. For example, if you have an array of
// numbers [2, 4, 5, 7], the average is 4.5. The deviation of 2 is -2.5.
// The deviations, as an array, are [-2.5, -0.5, 0.5, 2.5].
// Create a function called "deviations" that takes an array of numbers
// and returns a new array of the deviations.

// 5. The standard deviation of a group of numbers is a measure of how spread
// out they are. For more information on the standard deviation, see
// https://www.mathsisfun.com/data/standard-deviation.html
//
// The standard deviation is calculated by calculating all the deviations,
// squaring each one, finding the average of those squared deviations, and
// then finding the square root of that average.
//
// Create a function called "standardDeviation" that takes an array of numbers
// and returns the standard deviation.
//
// (Note: this function and explanation are for the "population standard
// deviation," which may be useful in reading the linked article.)

// 6. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.

// 7. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
//
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//
// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// var arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.

// 8. Create a function called "createUser" that takes a name and a Date object
// and returns an object with the keys "name" and "dob" (date of birth) with
// those values.

// 9. Create a function called "calculateAge" that takes a user created from
// createUser and a Date object considered the current date, and calculates the user's
// age in years on that date. You can use your code from yesterday's homework.

// 10. Create a function called "addAge" that takes a user created from createUser
// and a Date object and adds a new key on the user object, "age", with the age
// in years the user was on that date.

// 11. Create a function called "createUsers" that takes two arrays of equal
// length, the first being a list of names and the second being a list of dates of
// birth, and returns a new array of objects created from those original arrays.

// 12. Create a function called "averageAge" that takes an array of users and
// a Date object and returns the average age in years of the users on that date.
// You do not have to handle the situation in which the current date is before
// a user's date of birth.
