-- From the following dataframe, write a SQL query to find all the duplicate emails of employees keeping the unique email with the greater employee id. Return employee id and duplicate emails.

-- Table: employees

-- employee_id	   employee_name	email_id
--   105	        Toby Scott	   jo.da@abc.com


WITH duplicate_emails AS (
    SELECT 
        email_id, 
        MAX(employee_id) AS max_employee_id
    FROM 
        employees
    GROUP BY 
        email_id
    HAVING 
        COUNT(email_id) > 1
)
SELECT 
    e.employee_id, 
    e.employee_name, 
    e.email_id
FROM 
    employees e
JOIN 
    duplicate_emails d 
ON 
    e.employee_id = d.max_employee_id;


-- Explaination
-- duplicate_emails CTE: This subquery groups the employees by email_id and finds the maximum employee_id for each email that appears more than once.
-- Main Query: The main query joins the employees table with the duplicate_emails CTE on the employee_id to get the details of the employees with the highest employee_id for each duplicate email.




