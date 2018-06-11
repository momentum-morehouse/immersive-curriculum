# QB Background Jobs

## Description

Today we'll add another feature to your QuestionBox application: background jobs! We'll do this as an individual assignment, so fork the application you worked on with your team to get started with this. It's ok to talk and share with your teammates, but each team member should work in their own repo.

ActiveJob requires you to decide on a third-party library to use as a queueing service. [ActiveJob provides adapters for several popular libraries](http://api.rubyonrails.org/v5.1.4/classes/ActiveJob/QueueAdapters.html). We'll use [Delayed Job](https://github.com/collectiveidea/delayed_job/) for this assignment.

## User activity summary

Write a background worker whose purpose is to create an weekly summary of data for each user and send them an email with that summary. Like [Google Takeout](https://takeout.google.com/).

Each user should get a customized weekly email summary of their activity on QuestionBox. The summary should include a list of their own questions and answers that week. Don't worry about styling the email; it's more important that the data is there.

Emails should be sent on a regular schedule to all registered users. If you have 50 users, your application should send 50 emails.

## Extra challenges

- For users that had no activity that week, send a different email inviting the user to come back to the site and showing them some examples of recent posts to demonstrate what they are missing.
- Allow users to request an archive of all their activity to be sent to them as an email attachment zip file. The UX for this is up to you, but the end result should be an email with an attached zip file.

### Resources
- [Active Job Rails Guide](http://edgeguides.rubyonrails.org/active_job_basics.html)
- [Action Mailer Rails Guide](http://guides.rubyonrails.org/action_mailer_basics.html)
- [Ruby Standard Library CSV documentation](http://ruby-doc.org/stdlib-2.5.0/libdoc/csv/rdoc/index.html)
- [RubyZip gem](https://github.com/rubyzip/rubyzip)