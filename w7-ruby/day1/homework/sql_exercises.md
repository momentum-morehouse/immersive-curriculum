SQL Queries!
=============

## Skills
TODO

## Description

For each of the questions below, add the following information to a **Gist** on GitHub:
  * The original question text
  * Your final SQL query (which you must have run and validated on the included database)
  * The number of results returned (if more than one)
  * The specific result returned (if a single record is returned)

* Find all time entries.
* Find the developer who joined most recently.
* Find the number of projects for each client.
* Find all time entries, and show each one's client name next to it.
* Find all developers in the "Ohio sheep" group.
* Find the total number of hours worked for each client.
* Find the client for whom Mrs. Lupe Schowalter (the developer) has worked the greatest number of hours.
* List all client names with their project names (multiple rows for one client is fine).  Make sure that clients still show up even if they have no projects.
* Find all developers who have written no comments.

Unless otherwise specified, return all columns in the requested table (e.g. developers).

## Challenges

Try these queries if you have time:

* Find all developers with at least five comments.
* Find the developer who worked the fewest hours in January of 2015.
* Find all time entries which were created by developers who were not assigned to that time entry's project.
* Find all developers with no time put towards at least one of their assigned projects.
* Find all pairs of developers who are in two or more different groups together.

## Extra Challenging Challenges

* For all clients, find the duration of the time entry which was entered most recently for that particular client.
* Find a list of the missing developer ids. This is tough to grok.  In the real world, the list of ids in a data table can become sparse over time.  We may have created developers 1 through 10, and then deleted 4, 5, 6, and 9.  This means that the list of ids present in the developers table will be 1, 2, 3, 7, 8, 10.  In this scenario, your query should find the gaps and return 4, 5, 6, and 9.

** TODO: Link to sqlite3 database file