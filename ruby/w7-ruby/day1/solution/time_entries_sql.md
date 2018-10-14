# SQL Queries!

## Find all time entries

```sql
SELECT *
FROM time_entries;
```
  - Number of results returned: 500 rows

## Find the developer who joined most recently

```sql
SELECT name, MAX(joined_on)
FROM developers;
```

  - Specific datum returned for each field(if one row returned)
    Dr. Danielle McLaughlin joined on 2015-07-10

## Find the number of projects for each client

```sql
  SELECT clients.name, count(*) AS "number_of_projects"
  FROM clients, projects
  ON clients.id = projects.client_id
  GROUP BY client_id;
```
  - Number of results returned: 9

    "West Group"                              	"3"
    "Mohr Inc"                                 	"3"
    "Jast LLC"                                	"3"
    "Carter, Farrell and Goodwin"	              "3"
    "Ortiz, Gislason and Rutherford"          	"6"
    "Zieme-Ortiz"	                              "3"
    "Eichmann, Altenwerth and Morar"	          "3"
    "Kuhic-Bartoletti"	                        "3"
    "Goodwin Group"                            	"3"

## Find all time entries, and show each one's client name next to it

```sql
    SELECT clients.name AS "client_name", time_entries.*
    FROM clients
    JOIN projects
    ON clients.id = projects.client_id
    JOIN time_entries
    ON projects.id = time_entries.project_id;
```

Results returned: 500 (# of rows in time_entries table)

## Find all developers in the "Ohio sheep" group.

```sql
    SELECT developers.name, groups.name as "group_name"
    FROM developers
    JOIN group_assignments
    ON developers.id = group_assignments.developer_id
    JOIN groups
    ON groups.id = group_assignments.group_id
    WHERE groups.name = "Ohio sheep";
```

  - Number of results returned: 3

## Find the total number of hours worked for each client

```sql
    SELECT clients.name AS "client_name", SUM(time_entries.duration) AS "total_time_worked"
    FROM clients
    JOIN projects
    ON clients.id = projects.client_id
    JOIN time_entries
    ON projects.id= time_entries.project_id
    GROUP BY clients.name;
```

Number of results returned: 9

    "Carter, Farrell and Goodwin"	               "174"
    "Eichmann, Altenwerth and Morar"	           "188"
    "Goodwin Group"	                             "238"
    "Jast LLC"	                                 "166"
    "Kuhic-Bartoletti"	                         "223"
    "Mohr Inc"	                                 "209"
    "Ortiz, Gislason and Rutherford"	           "330"
    "West Group"	                               "176"
    "Zieme-Ortiz"	                               "166"


## Find the client for whom Mrs. Lupe Schowalter (the developer) has worked the greatest number of hours

```sql
    SELECT developers.name AS "developer_name" , clients.name AS "client_name",  SUM(time_entries.duration) AS "total_time_worked"
    FROM developers
    JOIN time_entries
    ON developers.id = time_entries.developer_id
    JOIN projects
    ON time_entries.project_id= projects.id
    JOIN clients
    ON projects.client_id = clients.id
    WHERE developers.name = "Mrs. Lupe Schowalter"
    GROUP BY clients.name
    ORDER BY SUM(time_entries.duration) DESC
    LIMIT 1;
```

Number of results returned: 1
  "Mrs. Lupe Schowalter"	"Kuhic-Bartoletti"	"11"

## List all client names with their project names (multiple rows for one client is fine).  Make sure that clients still show up even if they have no projects.

```sql
    SELECT clients.name, projects.name
    FROM clients
    LEFT JOIN projects
    ON clients.id = projects.client_id;
```

Number of results returned: 33 rows

## Find all developers who have written no comments

```sql
    SELECT developers.name
    FROM developers
    WHERE developers.id NOT IN (SELECT comments.developer_id FROM comments)
```

Number of results returned: 13

## Challenges

### Find all developers with at least five comments

select developers.*
from developers
  left join comments
  on developers.id = comments.developer_id
group by comments.developer_id
having count(comments.developer_id) >= 5


### Find the developer who worked the fewest hours in January of 2015

select developers.*, sum(time_entries.duration) as hours
from developers
  join time_entries
  on time_entries.developer_id = developers.id
where time_entries.worked_on >= '2015-01-01' and time_entries.worked_on < '2015-02-01'
group by developers.id
order by hours
limit 1


### Find all time entries which were created by developers who were not assigned to that time entry's project

select *
from time_entries as t
  left join project_assignments as pa
  on t.project_id = pa.project_id and t.developer_id = pa.developer_id
where pa.id is null;



# Find all developers with no time put towards at least one of their assigned projects.

select developers.*
from developers
  join project_assignments
  on developers.id = project_assignments.developer_id
  left join time_entries
  on project_assignments.developer_id = time_entries.developer_id and project_assignments.project_id = time_entries.project_id
where time_entries.id is null
group by developers.id


### Find all pairs of developers who are in two or more different groups together

select d1.name, d2.name
from developers as d1
  join group_assignments as g1 on d1.id = g1.developer_id
  join group_assignments as g2 on g1.group_id = g2.group_id
  join developers as d2 on g2.developer_id = d2.id
where d1.id < d2.id
group by d1.id, d2.id
having count(*) > 1
