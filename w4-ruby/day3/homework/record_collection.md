Scaffolding a Rails Application
===============================

## Skills
TODO

## Description
Create a new Rails application to keep track of all the music albums you own. Inside this application, use `rails generate scaffold` to make a scaffold for a record collection. You can choose what fields each album should have, but you should have at least these three:

* Title
* Artist Name
* Year Released

Your Rails app should allow you to do the following:

* See all albums
* Make a new album
* See an existing album
* Edit an existing album
* Delete an existing album

### Hard Mode

Add a new field to albums after scaffolding. Create a migration to add the field to the database, then add the field to the `index`, `show`, and `_form` views.
