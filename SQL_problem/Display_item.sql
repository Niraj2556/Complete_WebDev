-- From the following dataframe, write a SQL query to display those items that were only sold in the 2nd quarter of a year, i.e. April 1st to June end for the year 2020. Return item code and item description.

-- Table-I: item

-- Table-II: sales_info

-- Expected Output:

-- item_code	item_desc
--   103    	key board

-- Write your query here
SELECT item_code, item_desc
FROM item
WHERE item_code IN (
SELECT item_code
FROM sales_info
WHERE date_of_sell BETWEEN '2020-04-01' AND '2020-06-30'
);



-- Explaination
-- This query retrieves the item_code and item_desc columns from the item table for items that were sold in the 2nd quarter of 2020 (between April 1st and June 30th). Here's a breakdown of how it works:

-- SELECT item_code, item_desc: This part of the query specifies the columns to be selected from the item table. It selects the item_code and item_desc columns, which represent the code and description of each item, respectively.

-- FROM item: This clause specifies the table from which the data is being retrieved, in this case, the item table.

-- WHERE item_code IN (...): This is a filtering condition that restricts the rows returned from the item table to only those where the item_code exists in the result set of the subquery.

-- SELECT item_code FROM sales_info WHERE date_of_sell BETWEEN '2020-04-01' AND '2020-06-30': This subquery selects the item_code values from the sales_info table where the date_of_sell falls between April 1st, 2020 and June 30th, 2020. This subquery effectively gives us a list of item_code values for items that were sold in the 2nd quarter of 2020.

-- IN (...): The IN keyword is used to check if a value exists in a list of values. In this case, it checks if each item_code from the item table exists in the list of item_code values from the sales_info table for the 2nd quarter of 2020.

-- In summary, this query retrieves the item_code and item_desc for items that were sold in the 2nd quarter of 2020, based on the sales_info table, and filters the item table to only include those items.