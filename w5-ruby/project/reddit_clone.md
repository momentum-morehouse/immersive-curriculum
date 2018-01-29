Build Reddit
=============

## Skills
(bookmarks and voting in Rails using Forms and relationships)

Build an application that works like [Reddit](https://news.ycombinator.com/), allowing users to post news links, vote for them, and add comments.

* Each story (post) should have a link, an author, a timestamp, and a votes display
* Posts have many comments, which are displayed on the post's show page

## Requirements

* The homepage should order by the most number of votes
* Clicking on thumbs-up should increment positive vote and redirect you to the home-page
* Clicking on the title should redirect you to the post detail page
* When on the post detail page, you should display the comments beneath the link
* I can post a comment and type in my username
* I can sign in and view and manage my own posts
* posts can be viewed by anyone, but only signed-in users can comment or vote
* Add Controller tests to verify voting
* Deploy this application to Heroku
* Styling can be minimal (using Bootstrap or Shoelace, if you want) but there should be enough styling to support the basic functionality of the app

## Additional Resources

* Read [Active Record Associations](http://guides.rubyonrails.org/association_basics.html)
* Read [Rails Routing from the Outside In](http://guides.rubyonrails.org/routing.html)
* Read [Action Controller Overview](http://guides.rubyonrails.org/action_controller_overview.html)