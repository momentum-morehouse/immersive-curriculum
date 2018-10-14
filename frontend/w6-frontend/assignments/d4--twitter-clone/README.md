# Build a Microblogging Application

## Skills

TODO

## Description

For this group project, we will work together to build separate front and back-end applications that work like Twitter! The application will allow users to create and share short posts. This will also be your first opportunity to work together with a back-end team to create a full end-to-end product.

The front-end team will build the user interface, and the backend team will build the API that responds with JSON data to http requests sent from the front-end application.

_Yes, the posts are tweets. But please find another name to call them in your app._

## Project details

front-end team, your job will be to build and style the application to provide a user experience that functions like Twitter. You'll need to conceptualize and wireframe what your application will look like, what data you need to display, and how you will display that data.

As part of this assignment, you'll meet with the back-end developers on your team to discuss project requirements. The back-end is responsible for building the API that you will send requests to. They will need to understand from you what data your applicaiton needs, and you will need to understand from them what endpoints you can use to send requests to for that information.

The application should be deployed to Heroku. Please provide documentation for running your application in your project's README, and include any other information that you think will make your documentation friendly and useful.

### Requirements

- Users should be able to register for an account and log in.
- Posts have a text body and belong to a user.
- Only authenticated users can create or delete posts.
  - Posts are not editable. They can only be created and destroyed.
  - Only the user that created a post should be able to delete it.
- Add *client-side validation* to the post submission form. Posts should not be submittable if they are less than 2 characters or greater than 140 characters.
- Add the post form to the main page, so users can read all the existing posts and create a new post from the same page.

### Story details

- As a user, I should be able to logout by clicking a link in the navbar.
- As a user, I should be able to edit my own user information.
- Clicking on a user's name anywhere in the app will show me their user page and all the posts they have sent.
- Each post should have its own show page.

### Extra Challenges

- The root url of the site shows a list of the top users (ordered by who has the most posts) in a sidebar.
- Add the ability to "follow" other users on the site. If you are 'following' a user, your dashboard should only show the posts from the users you are following.
- Add the ability to "unfollow" users you have followed.
- Display all the users that a user is following and who is following them on their profile.
- Create a new type of user, an admin user. This admin user should be allowed to edit anybody's posts or user accounts.
  - No one should be able to create an admin user from the site (it'll have to be created by a back-end developer), but they should be able to login to an existing admin account.

### Tips

- Part of this assignment is learning to work with back-end developers. Time spent on project planning at the beginning will save you time fixing costly mistakes due to miscommunications later on.
- **Establish a clear git workflow before anyone commits code.**
- Remember to get your app set up for deploying to Heroku early, and deploy as early as possible.
