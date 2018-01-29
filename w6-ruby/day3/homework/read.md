# ReadingList App

## Skills
TODO

## Description

For this project you will build an api-only application that lets a single user to track what they are reading, what they want to read, and keep notes about each book. Basic CRUD functions should be available via your API: an api user should be able to retrieve a book or note, add an entry for a new book or note, and delete a book or note. If you finish that, implement the functionality to edit books and notes and search for a book based on url params.

** Models **
A book should have at least a title, an author, a status (the categories are up to you, but consider: `read`, `in progress`, `want to read`), and the ability to add notes. A note should have at least a body.

The level of complexity is up to you, but plan to start small and be able to add features later on.

Implement the following endpoints:

* `GET /api/books` - return all books as JSON
* `GET /api/books/:id` - return an individual book as JSON
* `POST /api/books` - create a new book, return success/failure status code
* `DELETE /api/books/:id` - delete book, return success/failure status code (this should delete all the associated notes as well)
* `GET /api/books/:id/notes` - return all notes for an individual book
* `POST /api/books/:id/notes` - create a new note for a book, return success/failure status code
* `DELETE /api/books/:id/notes/:id` - delete a note, return success/failure status code

Ensure that you return proper success/failure HTTP status codes based on the user input and results, for example return a `200` status code if the operation was successful, `201` for created resource, or `404` if a resource with a given id cannot be found. See [httpstatuses.com](https://httpstatuses.com).


## Extra Challenges

### Edit books and notes

Implement endpoints to accept updated data for books and notes:

* `PUT /api/books/:id` - update a book, return success/failure status code
* `PUT /api/books/:id/notes/:id` - update a note, return success/failure status code

### Implement searching, sorting, and filtering for `Book` resources

Modify the `GET /api/books` endpoint to support filtering, searching, and sorting resources by using query string parameters.

Implement the following endpoints:

* `GET /api/books?read=1` - return all read books as JSON
* `GET /api/books?read=0` - return all unread books as JSON
* `GET /api/books?author=authorName` - return all books by a certain author as JSON
* `GET /api/books?search=foo` - return all books that contain "foo" in their description as JSON
* `GET /api/books?sort=priority` - return all books sorted in some meaningful way, by priority, created/updated date, completed status, etc as JSON
