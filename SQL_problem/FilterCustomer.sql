-- From the following table, write a SQL query to find customers whose grade is 200. Return customer_id, cust_name, city, grade, salesman_id.

-- Input

-- Table: customercustomer_id	cust_name	city	grade	salesman_id
-- 3007	Brad Davis	New York	200	5001
-- 3005	Graham Zusi	California	200	5002
-- 3003	Jozy Altidor	Moscow	200	5007

-- \

-- -- Write your query here

SELECT customer_id, cust_name, city, grade, salesman_id
FROM customer
WHERE grade = 200;



-- From the following table, write a SQL query to find those employees whose salaries are less than 6000. Return full name (first and last name), and salary.

-- Input:
-- Table: employees

-- Output:
-- Full_Name	salary
-- David Austin	4800
-- Valli Pataballa	4800
-- Diana Lorentz	4200
-- Alexander Khoo	3100
-- Shelli Baida	2900
-- Sigal Tobias	2800
-- Guy Himuro	2600

SELECT first_name || ' ' || last_name AS Full_Name, salary
FROM employees
WHERE salary < 6000;