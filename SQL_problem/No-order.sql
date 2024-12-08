-- // From the following dataframes find those customers who did not make any order to the supplier 'DCX LTD'.

-- // Table- I: customers

-- // Table- II: supplier

-- // Table- III: orders

-- // Expected Output:
-- customer_name
-- Liam
-- Josh
-- Sean

-- Write your query here

SELECT c.customer_name
FROM customers c
WHERE c.customer_id NOT IN (
    SELECT o.customer_id
    FROM orders o
    JOIN supplier s ON o.supplier_id = s.supplier_id
    WHERE s.supplier_name = 'DCX LTD'
);

-- Explaination
-- This SQL query retrieves the names of customers who have not placed any orders with a supplier named 'DCX LTD'. Here's a breakdown of how it works:

-- Main Query (SELECT c.customer_name FROM customers c): This is the outer query that selects the customer_name from the customers table (aliased as c).

-- Subquery (SELECT o.customer_id FROM orders o JOIN supplier s ON o.supplier_id = s.supplier_id WHERE s.supplier_name = 'DCX LTD'): This is a subquery that finds the customer_id of customers who have placed orders with the supplier 'DCX LTD'. It joins the orders table (aliased as o) with the supplier table (aliased as s) on the supplier_id column. It then filters the rows to include only orders from the supplier 'DCX LTD'.

-- WHERE Clause (WHERE c.customer_id NOT IN (subquery)): The main query has a WHERE clause that filters out customers whose customer_id is not found in the subquery's result set. This effectively gives you the customers who have not placed any orders with the supplier 'DCX LTD'.

-- So, the final result of this query would be a list of customer names who have not placed any orders with the supplier 'DCX LTD'.