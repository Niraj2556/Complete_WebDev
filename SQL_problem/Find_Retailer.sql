-- From the above dataframes, write a SQL query to find those retailers who have bought 'key board' but not 'mouse'. Return retailer ID.

-- Table-I: item

-- Table-II: sales_info

-- Expected Output:

-- retailer_id
-- 1001
-- 1004

-- Write your query here

SELECT retailer_id
FROM sales_info 
JOIN item 
USING(item_code)
WHERE item_desc IN ('mouse', 'key board')
GROUP BY retailer_id
HAVING SUM(DISTINCT item_code) = 
(SELECT item_code FROM item WHERE item_desc = 'key board');


-- Explaination
-- This query aims to find the retailer_ids of retailers who have bought both 'mouse' and 'key board' items but have bought 'key board' exclusively. Here's a breakdown of how it works:

-- SELECT retailer_id: Specifies the column to be selected, which is the retailer_id.

-- FROM sales_info JOIN item USING(item_code): This clause specifies the tables to be used for the query and how they are joined. It joins the sales_info and item tables using the item_code column.

-- WHERE item_desc IN ('mouse', 'key board'): Filters the rows to include only those where the item_desc is either 'mouse' or 'key board'.

-- GROUP BY retailer_id: Groups the results by retailer_id. This is necessary because we want to aggregate the purchases for each retailer.

-- HAVING SUM(DISTINCT item_code) = (SELECT item_code FROM item WHERE item_desc = 'key board'): This HAVING clause filters the grouped results to include only those retailer_ids whose total distinct item_codes are equal to the item_code of 'key board'. This ensures that the retailer has only bought 'key board' items and no other items.

-- In summary, this query finds retailer_ids of retailers who have bought both 'mouse' and 'key board' items but have bought 'key board' exclusively.





