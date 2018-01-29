Create a new Rails application. Inside this application, use `rails generate scaffold` to make a scaffold for a record collection. You can choose what fields each album should have, but you should have at least these three:

* artist
* album name
* year released

### Hard Mode

Add a new field to albums after scaffolding. Create a migration to add the field to the database, then add the field to the `index`, `show`, and `_form` views.