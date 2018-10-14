# Rails-Reddit

Build an application that works like [Reddit](https://news.ycombinator.com/), allowing users to post news links, vote for them, and comment on them.

## Requirements

- Each story (post) should have a link, an author, a timestamp, and a votes display
- Posts have many comments, which are displayed on the post's show page
- The home page should order by the most number of votes
- Clicking on thumbs-up should increment a positive vote and redirect you to the home page
- Clicking on the title should redirect you to the post detail (show) page
- When on the post detail page, you should display the comments beneath the link
- I can sign in and view and manage my own posts
- I can post a comment when I am signed in
- I can sign out
- Posts can be viewed by anyone, but only signed-in users can comment or vote
- Add Controller tests to verify voting
- Deploy this application to Heroku
- Styling should look intentional. Use Bootstrap or Shoelace, if you want.

## Extra features

If you finish the above, consider implementing:

- A user profile dashboard that lets people change their username, email, or password
- A display of posts that I have up-voted
- Support for downvotes as well as upvotes
- Tests for your models
- Any other feature you feel would enhance the user experience

## Resources

- [Active Record Associations](http://guides.rubyonrails.org/association_basics.html)
- [Rails Routing from the Outside In](http://guides.rubyonrails.org/routing.html)
- [Action Controller Overview](http://guides.rubyonrails.org/action_controller_overview.html)
