QuestionBox Day 2
=================

## Skills
TODO

## Description
You will work on this project in teams.

During this project, your team will build a question and answer platform, not unlike Stack Overflow. After a few days, your application will allow people to ask questions, receive answers, and mark an answer as valid.

The application should be styled with [Bootstrap](https://getbootstrap.com/).

On the first day, your application should:

- Allow a user to create a question.
  + That question should allow for several paragraphs of text as well as code samples. We recommend allowing users to use [Markdown](https://en.wikipedia.org/wiki/Markdown) for authoring questions. [Redcarpet](https://github.com/vmg/redcarpet) is a good gem for rendering Markdown as HTML. [This blog post](https://richonrails.com/articles/rendering-markdown-with-redcarpet) may help as well.
- Allow questions to have answers.
- Allow unauthenticated users to view questions and answers.
- Have registration and login. Every question and answer will be associated with a user.
- Allows an authenticated user to create a question or answer an existing question.

On the second day, your application should:
- Send a welcome email when a new user signs up.
- Paginate the index of questions with [Kaminari](https://github.com/kaminari/kaminari)
- Allow the original author of the question to mark an answer as correct.


### Added features if you have time
- Use AJAX to update the page when a user submits an answer to a question.
- Allow a user to change their password.
- Send an email to a user to reset their password if they have forgotten it, and allow them to reset it.
- Allow the author of a question to delete that question, removing all answers.
- Allow an unanswered question to be edited.
- Allow the author of an answer to delete or edit that answer.
