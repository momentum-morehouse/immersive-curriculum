# QuestionBox API

## Description

Modify your QuestionBox application and add API functionality to it. You'll work on this weekend project with your existing QB team and a front-end team.

The front-end team will build a React application that will send AJAX requests to your application's API. Your application will respond with JSON data that the front end will display using React.

Your application can still work as it currently does, but it should respond to requests for JSON data _in addition_ to serving HTML. It should incorporate token-based authentication for API users. Some endpoints for your API should be freely available, but for creating and editing capabilities, API users will need to be authenticated.

The API should allow all the same CRUD functions that the original application does, with the exception of creating a new user. A new user will need to be created in the UI (your application should already be doing this). Now, your application will allow a logged in user to request an auth token for making API requests that require authentication (creating and editing capabilities).

Your first order of business should be sketching out the endpoints for your application and communicating with the front-end developers about the structure and content of the data your application returns.

Your API should be completely documentated for developers using your API. The README for your application is a good place to put this documentation.

## Extra Challenges

- Allow photo or file uploads using ActiveStorage
- Create admin users using ActiveAdmin
- Add documentation for developers in the UI itself
- Implement authentication using a gem. Some options are:
  - [OmniAuth](https://github.com/omniauth/omniauth)
  - [Doorkeeper](https://github.com/doorkeeper-gem/doorkeeper)
  - [AuthLogic](https://github.com/binarylogic/authlogic)
  - [Devise](https://github.com/omniauth/omniauth)
