// GIVEN a command-line application that accepts user input
// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids
// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
// BONUS
// * Update employee managers.
// * View employees by manager.
// * View employees by department.
// * Delete departments, roles, and employees.
// * View the total utilized budget of a department&mdash;in other words, the combined salaries of all employees in that department.

// ------------------------------------------------------------------------------------------------------------------------------------
// START WORKING CODE
// require packages
const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
// hide mysql password
require('dotenv').config()

// db connection
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'process.env.MYSQL_PASSWORD',
        database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
);

db.connect(err => {
    if (err) throw err;
    console.log('connected as id ' + db.threadId);
    mainNav();
});

// make EMPLOYEE MANAGER display

// start app
const mainNav = () => {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'nav',
            message: 'Please select an action from the list below.',
            choices: [
                'View All Employees',
                'Add Employee',
                'Update Employee Role',
                'View All Departments',
                'Add Role',
                'Add a Department',
                'Update Employee Manager',
                'View Employees by Manager',
                'View Employees by Department',
                'Delete Department',
                'Delete Role',
                'Delete Employee',
                'View Total Utilized Budget by Department',
                'Quit',
            ],
        }
    ])
    .then(response => {
        
        if(response === "View All Employees"){
            viewEmployees();
        } else if(response === "Add Employee") {
            // POST 
        } else if(response === "Update Employee Role") {
            // UPDATE
        } else if(response === "View All Departments") {
            viewDepartments();
        } else if(response === "Add Role") {
            // POST
        } else if(response === "View all Roles") {
            viewRoles();
        } else if(response === "Add a Department") {
            // POST
        } else if(response === "Update Employee Manager") {
            // UPDATE
        } else if(response === "View Employees by Manager"){
            // GET
        } else if(response === "View Employees by Department") {
            // GET
        } else if(response === "Delete Department") {
            // DELETE
        } else if(response === "Delete Role") {
            // DELETE
        } else if(response === "Delete Employee") {
            // DELETE
        } else if(response === "View Total Utilized Budget by Department") {
            // GET
        } else if(response === "Quit") {
            // END
        };
    })
}

//TODO: GET STATEMENTS
// view all employees
viewEmployees = () => {
    // select from employees table: id, first, last, role, department, salary, manager
    const employees = 'SELECT*FROM employee JOIN role ON';
    connection.employees(employees, function(err, res) {
        if (err) throw err;
        // console.table: 
        console.table('All Employees:', res); 
        // GO BACK TO NAV
        mainNav();
    })
};

// view all departments
viewDepartments = () => {
    // show department names, ids
    const departments = 'SELECT*FROM department';
    connection.departments(departments, function(err, res) {
        if (err) throw err;
        // console.table: 
        console.table('All Departments:', res); 
        // GO BACK TO NAV
        mainNav();
    })
};

// view all roles
viewRoles = () => {
    // show role title, salary, role id
    const roles = 'SELECT*FROM roles';
    connection.roles(roles, function(err, res) {
        if (err) throw err;
        // console.table: 
        console.table('All Roles:', res); 
        // GO BACK TO NAV
        mainNav();
    })
}

//TODO: POST STATEMENTS
// add a dept.
newDept = () => {
    // inquire:  input: name of dept, 
    inquirer.prompt ([
        {
            type: 'input',
            name: 'newDept',
            message: 'What is the name of the new Department you would like to add?',
        }
    ])
    // then response.name 
    .then(response => {
        const addDept = `INSERT INTO department (name)
                        VALUES (?)`;
            connection.query(sql, function(err, res) {
                if (err) throw err;
                // console.table: 
                console.table('All Roles:', res); 
                // GO BACK TO NAV
                mainNav();
            })
    })
    // const sql statments
}

// add a role
newRole = () => {
    // inquire: input: name of role, salary
    inquirer.prompt ([
        {
            type: 'input',
            name: 'newRole',
            message: 'What is the name of the new Role you would like to add?',
        },
        {
            type: 'input',
            name: 'newSalary',
            message: 'What is the salary of the role you are adding?',
        }
    ])
    // response.name, response.salary
    .then(response => {
        const addRole = `INSERT INTO role (salary)
        VALUES (?)`;
        connection.query(roles, function(err, res) {
            if (err) throw err;
            // console.table: 
            console.table('All Roles:', res); 
            // GO BACK TO NAV
            mainNav();
        })
    })

}

// add an employee
newEmployee = () => {
    // inquire: input: first, last, role
    // response.first response.last, response.role
        inquirer.prompt ([
            {
                type: 'input',
                name: 'newEmployeeFirstName',
                message: 'What is the first name of the new employee?',
            },
            {
                type: 'input',
                name: 'newEmployeeLastName',
                message: 'What is the last name of the new employee?',
            },
            {
                type: 'input',
                name: 'newEmployeeRole',
                message: 'What is the role of this new employee?',
            }
        ])
        // response.name, response.salary
        .then(response => {
            const addRole = `INSERT INTO role (salary)
            VALUES (?)`;
            connection.roles(roles, function(err, res) {
                if (err) throw err;
                // console.table: 
                console.table('All Roles:', res); 
                // GO BACK TO NAV
                mainNav();
            })
        })
}


//TODO: UPDATE STATEMENT
// update an employee role
updateEmployee = () => {
    // inquire: list: employee names
    // select employee
    // 
}
app.put('/api/review/:id', (req, res) => {
    const sql = `UPDATE reviews SET review = ? WHERE id = ?`;
    const params = [req.body.review, req.params.id];
  
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
      } else if (!result.affectedRows) {
        res.json({
          message: 'Movie not found'
        });
      } else {
        res.json({
          message: 'success',
          data: req.body,
          changes: result.affectedRows
        });
      }
    });
  });

// * BONUS --------------------------------------
// update employee manager

// Get: view employees by manager

// GET: view employees by department

// DELETE:
// delete department

// delete roles

// delete employee

// GET: view total utilized budget by deparment