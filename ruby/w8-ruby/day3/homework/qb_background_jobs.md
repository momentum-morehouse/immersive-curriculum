# QB Background Jobs

## Description

Today we'll add a final feature to your QuestionBox application: background jobs!

ActiveJob requires you to decide on a third-party library to use as a queueing service. [ActiveJob provides adapters for several popular libraries](http://api.rubyonrails.org/v5.1.4/classes/ActiveJob/QueueAdapters.html). We'll use [Delayed Job](https://github.com/collectiveidea/delayed_job/) for this assignment.

## User activity summary

Write a background worker whose purpose is to create an weekly summary of data for each user and send them an email with that summary. [Google Takeout](https://takeout.google.com/) is an example of the type of summary you could create.

Each user should get a customized weekly email summary of their activity on QuestionBox. The summary should include a list of their own questions and answers that week. Don't worry about styling the email; it's more important that the data is there.

Emails should be sent on a regular schedule to all registered users. If you have 50 users, your application should send 50 emails.

If you can verify that the mailers are sent via console output, you are done.

## Extra challenges

- For users that had no activity that week, send a different email inviting the user to come back to the site, perhaps showing them some examples of recent posts to demonstrate what they are missing.
- Allow users to request an archive of all their activity to be sent to them as an email attachment zip file. Again, data is most important, not styling.

### Resources

- [Active Job Rails Guide](http://edgeguides.rubyonrails.org/active_job_basics.html)
- [Action Mailer Rails Guide](http://guides.rubyonrails.org/action_mailer_basics.html)
- [Delayed Job](https://github.com/collectiveidea/delayed_job/)