-- From the following Dataframes, write a SQL query to find those customers who never ordered anything. Return customer name.

-- Table-I: customers

-- Table-II: orders

-- Expected Output:

-- customers
-- Evan
-- Toby

-- Write your query here
SELECT customer_name as customers
FROM customers
WHERE customer_id NOT IN
(
SELECT customer_id FROM orders
);