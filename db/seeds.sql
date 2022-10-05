use employee_db

-- departments
INSERT INTO department (name)
VALUES  ("Sales & Marketing"),
        ("Accouting & Finance"),
        ("Research & Development"),
        ("Administration");

-- roles
INSERT INTO role (title, salary, department_id)
VALUES  ("Salesman", 50000, 1),
        ("Marketing Coordinator", 60000, 1),
        ("Accountant", 80000, 2),
        ("Finance Planner", 85000, 2),
        ("Software Engineer", 100000, 3),
        ("Research Scientist", 90000, 3),
        ("Data Entry Clerk", 40000, 4),
        ("Executive Assistant", 50000, 4);

-- employees
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('Paulina', 'Mendoza', 1, 1),
        ('Krishna', 'Shea', 1, null),
        ('Ben', 'Brook', 2, null),
        ('Mila', 'Abello', 4, 4),
        ('Andrew', 'Taylor',3, null),
        ('Maya', 'Ivanov', 3, null),
        ('Bryon', 'Gorbold', 6, null),
        ('Jolie', 'Terry', 6, null),
        ('Darnell', 'Blake', 5, 9),
        ('Cleo', 'Power', 8, 10),
        ('Eddie', 'Stafford', 7, null),
        ('Kurtis', 'Patton', 7, null);
