# QuestionBox API

## Description

Modify the QuestionBox application you've been working on this week and add API functionality to it, so that your application can also return JSON data if requested. If you have been working on a team, you can keep working together.

Your application should still work as it currently does, but you should have endpoints that respond to requests for JSON data _in addition_ to the endpoints that serve HTML or JS.

The API should allow all the same CRUD functions that the original application does, including user registration and authentication. Now, your application will allow users to register via api and registered users to request an auth token for making API requests that require authentication (creating and editing capabilities). Note that you don't need to create separate classes of users for the regular application and for the api. You just need to be able to create a new user via an API endpoint.

Your API should be completely documented for developers using your API. The README for your application is a good place to put this documentation, but you could also consider using a tool like [HackMD](https://hackmd.io/).

## Extra Challenges

- Deploy your application to Heroku
- Allow photo or file uploads via API.
- Send email for new user registrations using an email service add-on through Heroku.
- Add documentation for developers in the UI itself (i.e., add some routes to your existing non-api application to render documentation in the browser).
- Implement authentication using a gem. Some options are:
  - [OmniAuth](https://github.com/omniauth/omniauth)
  - [Doorkeeper](https://github.com/doorkeeper-gem/doorkeeper)
  - [AuthLogic](https://github.com/binarylogic/authlogic)
  - [Devise](https://github.com/omniauth/omniauth)
