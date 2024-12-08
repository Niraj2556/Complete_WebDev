-- From the following dataframe, write a SQL query to find the highest purchase with its corresponding item for each customer. In case of a same quantity purchase find the item code which is smallest.

-- The output must be sorted by increasing of customer_id. Return customer ID,lowest item code and purchase quantity.

-- Table-I: purchase

-- Expected Output:


-- customer_id	lowest item code	purch_qty
-- 101	              503	            50
-- 102	              505	            50
-- 103	              501	            35
-- 104	              504           	40


SELECT customer_id, min(item_code) as 'lowest item code', purch_qty
FROM purchase
WHERE (customer_id, purch_qty) IN (SELECT customer_id, max(purch_qty) 
FROM purchase
GROUP BY customer_id)
GROUP BY customer_id, purch_qty
ORDER BY customer_id;



--Explaination

-- This SQL query retrieves the lowest item code along with the purchase quantity for each customer where the purchase quantity is the maximum for that customer. Here's a step-by-step explanation:

-- SELECT customer_id, min(item_code) as 'lowest item code', purch_qty: This part of the query selects three columns from the purchase table. customer_id is the identifier for each customer, item_code is the code of the purchased item, and purch_qty is the quantity purchased. min(item_code) as 'lowest item code' is an aggregate function that finds the minimum item code for each group of rows (in this case, each customer's purchases).

-- FROM purchase: Specifies that the data is being selected from the purchase table.

-- WHERE (customer_id, purch_qty) IN (SELECT customer_id, max(purch_qty) FROM purchase GROUP BY customer_id): This WHERE clause filters the rows to include only those where the combination of customer_id and purch_qty matches a subquery. The subquery selects the customer_id and the maximum purch_qty for each customer_id.

-- GROUP BY customer_id, purch_qty: Groups the result set by customer_id and purch_qty. This grouping is not necessary for the desired output and can be removed.

-- ORDER BY customer_id: Orders the result set by customer_id in ascending order.

-- However, there is a mistake in this query. The GROUP BY customer_id, purch_qty is not needed and could lead to incorrect results or unexpected behavior. The correct query should only GROUP BY customer_id to get the lowest item code for each customer.