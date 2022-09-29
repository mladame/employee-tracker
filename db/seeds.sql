-- insert to "table name"
-- values to be inserted

-- department
-- name
INSERT INTO department (name)
VALUES  ("Sales & Marketing"),
        ("Accouting & Finance"),
        ("Research & Development"),
        ("Administration");

-- role
-- title, salary, dept. id
INSERT INTO role (title, salary, department_id)
VALUES  ("Salesman", 50000, 1),
        ("Marketing Coordinator", 60000, 1),
        ("Accountant", 80000, 2),
        ("Finance Planner" 85000, 2),
        ("Software Engineer", 100000, 3),
        ("Research Scientist", 90000, 3),
        ("Data Entry Clerk", 40000, 4),
        ("Executive Assistant" 50000, 4)

-- employee
-- first, last, role id, manager id
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('Paulina', 'Mendoza', 1, ),
        ('Krishna', 'Shea', 1, ),
        ('Ben', 'Brook', 2, ),
        ('Mila', 'Abello', 4, ),
        ('Andrew', 'Taylor',3, ),
        ('Maya', 'Ivanov', 3, ),
        ('Bryon', 'Gorbold', 5, ),
        ('Jolie', 'Terry', 5, ),
        ('Darnell', 'Blake', 6, ),
        ('Cleo', 'Power', 8, ),
        ('Eddie', 'Stafford', 7, ),
        ('Kurtis', 'Patton', 7, );