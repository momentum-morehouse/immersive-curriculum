# JavaScript and Forms

## Objectives

Students should be able to:

- create HTML forms
- get data from forms via JavaScript
- validate forms on the client side
- respond to change and submit events

## Assignment

- [Form validation](https://github.com/momentum-assignments/js--form-validation)

## Lecture notes

What even is a form? As a developer, not as a user, looks slightly different.

- user fills out information and hits submit button
- the browser sends a request to the server with the form data
  - next week we'll dig into this a bit deeper, but today we'll stop short of what happens after submit (eg we're using preventDefault)

The most important things for students to know:

- the different form element types (input, textarea, select, button)
  - input types:
  - text - the one you use everywhere
  - checkbox - a checkbox
  - hidden - holds data, doesn't appear
  - password - doesn't show the input
  - radio - allows a single value to be selected out of multiple choices
  - submit - button that submits the form
  - reset - button that clears the form
  - button - a button with no purpose
- how to link labels to form elements using `for`
- how to get the value of a form element
- how to get the value of all form elements using `FormData`
- how to change the appearance of a form element to indicate success or failure
- the difference between a click event on a button and a submit event on a form
  - click event happens before the submit
  - sometimes users submit a form using return -- that will submit but not trigger the click event

## Demo ideas

- [Glitch project with form demo: t-shirts](https://glitch.com/~great-vinyl)
- grocery list/todo list
- basic login form

## Exercise ideas

- build a simple log in form!

  - Your form should have two inputs: one for an email address and one for a password

- [Simple error message exercise on Glitch](https://glitch.com/~simple-error-msg) (or just use the form from the previous exercise)

## Resources

- [MDN Your First Web Form](https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form)
- [MDN Web Forms](https://developer.mozilla.org/en-US/docs/Learn/Forms)
- [MDN HTML Form element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement)
- [MDN FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData)
- [Shay Howe Building Forms](https://learn.shayhowe.com/html-css/building-forms/)
- [MDN client-side validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)

## Schedule
