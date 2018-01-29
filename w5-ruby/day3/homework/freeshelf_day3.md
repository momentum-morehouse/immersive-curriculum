FreeShelf Day 3
===============

## Skills
TODO

## Description
During this project, you will build a Ruby on Rails application to collect an index of free programming books online. This application will, after three days, allow users to look at the index, add new books, edit or remove books they added, and checkout books.

On the first day, your application should:

* Allow anyone to create a new book entry
  * Books have, at a minimum, a title, author, description, and URL
* Allow anyone to update or delete a book entry
* Allow anyone to view the list of books

On the second day, your application should:

* Associate each book entry with a user
* Prevent editing a book unless you are the book entry's creator
* Prevent deleting a book unless you are the book entry's creator
* allow users to checkout a book

On the third day (today), your application should:

* Allow users to register and login
* Prevent users from creating, editing, or deleting book entries if they are not logged in

<!--  User `has_many :books, through: :checkouts` -->

### Added features

If you finish all of the above, consider some of the following:

* Style your application with your own CSS by editing `app/assets/stylesheets/application.css` or digging into [the asset pipeline](http://guides.rubyonrails.org/asset_pipeline.html)
* Allow users to upload an image for the book with [CarrierWave](https://code.tutsplus.com/tutorials/rails-image-upload-using-carrierwave-in-a-rails-app--cms-25183)
* Allow some users to be admins. Only admins can edit and delete any book entry.
* Add categories to books and have index pages for each category
* Allow users to change their username and password
* Track clicks on book URLs
