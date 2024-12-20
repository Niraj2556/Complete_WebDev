-- From the following table, write a SQL query to find those employees who were hired between November 5th, 2007 and July 5th, 2009. Return full name (first and last), job id and hire date.

-- Input:

-- Table: employees


SELECT first_name || ' ' || last_name AS Full_Name, job_id, hire_date
FROM employees
WHERE hire_date BETWEEN '2007-11-05' AND '2009-07-05';