-- What is the total amount each customer spent at the restaurant?

-- Table-I: sales

-- Tabe-II: members

-- Table-III: menu

-- Expected Output:
-- customer_id	money_spent
--   A	          76
--   B	          74
--   C	          36


SELECT customer_id, 
       SUM(price) AS money_spent 
FROM sales 
JOIN menu 
ON menu.product_id = sales.product_id
GROUP BY customer_id