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
// * BONUS------------------------
// * Update employee managers.
// * View employees by manager.
// * View employees by department.
// * Delete departments, roles, and employees.
// * View the total utilized budget of a department&mdash;
// in other words, the combined salaries of all employees in that department.

//* ------------------------------------------------------------------------------------------------------------------------------------
// require packages
const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
// const { response } = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//* CONNECTION------------------------------------------------------------------------
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'panda',
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

//* START APP---------------------------------------------------------------------------
const mainNav = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'nav',
            message: 'Please select an action from the list below.',
            choices: [
                {
                    name: 'View all employees',
                    value: "VIEW_EMPLOYEES"
                },
                {
                    name: 'Add Employee',
                    value: "ADD_EMPLOYEE"
                },
                {
                    name: 'Update Employee Role',
                    value: "UPDATE_ROLE"
                },
                {
                    name: 'View All Departments',
                    value: "VIEW_DEPARTMENTS"
                },
                {
                    name: 'Add a Department',
                    value: "ADD_DEPARTMENT"
                },
                {
                    name: 'View all Roles',
                    value: "VIEW_ROLES"
                },
                {
                    name: 'Add Role',
                    value: "ADD_ROLE"
                },
                {
                    name: 'Exit',
                    value: "EXIT"
                },
            ],
        }
    ])
        .then(response => {
//! fix 
            switch (response.nav) {
                case "VIEW_EMPLOYEES":
                    viewEmployees()
                    break;
                case "ADD_EMPLOYEE":
                    newEmployee()
                    break;
                case "UPDATE_ROLE":
                    updateEmployee()
                    break;
                case "VIEW_DEPARTMENTS":
                    viewDepartments()
                    break;
                case "ADD_DEPARTMENT":
                    newDept()
                    break;
                case "VIEW_ROLES":
                    viewRoles()
                    break;
                case "ADD_ROLE":
                    newRole()
                    break;
                default:
                    exitTracker();
            }
        })
}

//* QUIT FUNCTION----------------------------------------------------------------------
exitTracker = () => {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'quitEmployeeTracker',
            message: 'Would you like exit the Employee Tracker program?',
        }
    ])  //! fix 
        .then((answers) => {
            // if true quit, otherwise back to mainNav
            switch(answers) {
            case "false":
                    mainNav()
                    break;
                default:
                    prompt.ui.close();
        }}) //! fix 
        .catch((err) => {
            if (err) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        })
};

//* ADD EMPLOYEE--------------------------------------------------------------------
// EXAMPLE CODE - REMOVE LATER
// this would live in db folder index.js
// createEmployee(employee) {
//     return this.connection.promise().query("INSERT INTO employee SET ?", employee)
// }

// add to index.js code like : findAllEmployees() { return this.connection.promise().query(" WRITE MY SQL CODE" )}

// function addEmployee() {
//     prompt([
//         {
//             name: 'name',
//             messsage: 'what is employee name?'
//         }
//     ])
//         .then(res => {
//             let name = res.name

//             db.createEmployee(employee)
//         })
// };

//* GET ROUTES----------------------------------------------------------------------
// GET ALL EMPLOYEES DATA
viewEmployees = () => {
    // select from employees table: id, first, last, role, department, salary, manager
    // employee table: id, first, last,
    // role table: role name
    // department table: dept name
    //! fix 
    console.log('hello');
    const employees = 'SELECT*FROM employee LEFT JOIN roles ON employee.role_id = roles.id;'
    db.query(employees, function (err, res) {
        if (err) throw err;
        // display response as table 
        console.table('All Employees:', res);
        // back to nav
        mainNav();
    })
};

// GET ALL DEPARTMENTS
viewDepartments = () => {
    
    const departments = `SELECT*FROM department`;
    db.query(departments, function (err, res) {
        if (err) throw err;
        console.table('All Departments:', res);
        
        mainNav();
    })
};

// view all roles
// role id, name, salary
// department name through deptid
viewRoles = () => {
    
    const roles = `SELECT*FROM roles
    RIGHT JOIN department ON roles.department_id = department.id;`
    db.query(roles, function (err, res) {
        if (err) throw err;
        console.table('All Roles:', res);
        
        mainNav();
    })
}

//* POST ROUTES-----------------------------------------------------------------------
// add a dept.
// newDept = () => {
    
//     inquirer.prompt([
//         {
//             type: 'input',
//             name: 'newDept',
//             message: 'What is the name of the new Department you would like to add?',
//             validate: answer => {
//                 if (answer !== '') {
//                     return true;
//                 }
//                 return 'Please enter a new department name.';
//             }
//         }
//     ])
//     // then response.name 
//     .then(response => {
//         const addDept = `INSERT INTO department (name)
//                 VALUES (?)`;
//             connection.query(addDept, function (err, res) {
//             if (err) throw err;
//             console.table('All Departments:', res); 
//             // back to nav
//         })
//     })
// }

// add a role
// newRole = () => {
    
//     inquirer.prompt([
//         {
//             type: 'input',
//             name: 'newRole',
//             message: 'What is the name of the new Role you would like to add?',
//             validate: answer => {
//                 if (answer !== '') {
//                     return true;
//                 }
//                 return 'Please enter a role name.';
//             }
//         },
//         {
//             type: 'input',
//             name: 'newSalary',
//             message: 'What is the salary of the role you are adding?',
//             validate: answer => {
//                 if (answer !== '') {
//                     return true;
//                 }
//                 return 'Please the salary corresponding to the new role.';
//             }
//         }
//     ])
//     // answer.name, answer.salary
//     .then(answer => {
//         const addRole = `INSERT INTO role (title, salary)
//         VALUES (?)`;
//         connection.query(roles, function (err, res) {
//             if (err) throw err;
//             // display 
//             // console.table('All Roles:', res);
//             // GO BACK TO NAV
//             // mainNav();
//         })
//     })

// }

// ADD NEW EMPLOYEE
// newEmployee = () => {
//     const roles = `SELECT*FROM roles`

//     inquirer.prompt([
//         {
//             type: 'input',
//             name: 'newEmployeeFirstName',
//             message: 'What is the first name of the new employee?',
//             validate: answer => {
//                 if (answer !== '') {
//                     return true;
//                 }
//                 return 'Please enter a first name for the new employee.';
//             }
//         },
//         {
//             type: 'input',
//             name: 'newEmployeeLastName',
//             message: 'What is the last name of the new employee?',
//             validate: answer => {
//                 if (answer !== '') {
//                     return true;
//                 }
//                 return 'Please enter a last name for the new employee.';
//             }
//         },
//         {
//             // select from employee roles, pick one
//             type: 'list',
//             name: 'newEmployeeRole',
//             message: 'What is the role of this new employee?',
//             choices: [],
//         }
//     ])
//         // response.name, response.salary
//         .then(response => {
//             const addEmployee = `INSERT INTO employee (first_name, last_name, role_id)
//         VALUES (?)`;
//             connection.roles(addEmployee, function (err, res) {
//                 if (err) throw err;
//                 // console.table: new employee first, last, role
//                 // console.table();
//                 // GO BACK TO NAV
//                 // mainNav();
//             })
//         })
// }



//* UPDATE ROUTE----------------------------------------------------
// UPDATE EMPLOYEE ROLE
// updateEmployee = () => {
//     // select from employee_db
//     const findEmployeeSQL = `SELECT*FROM employee`;

//     // inquire list: employee name
//     inquirer.prompt([
//         {
//             // select from employee roles, pick one
//             type: 'list',
//             name: 'newEmployeeRole',
//             message: 'What is the role of this new employee?',
//             choices: [],
//         }
//     ])
// }

// app.put('/api/review/:id', (req, res) => {
//     const sql = `UPDATE reviews SET review = ? WHERE id = ?`;
//     const params = [req.body.review, req.params.id];

//     db.query(sql, params, (err, result) => {
//         if (err) {
//             res.status(400).json({ error: err.message });
//         } else if (!result.affectedRows) {
//             res.json({
//                 message: 'Movie not found'
//             });
//         } else {
//             res.json({
//                 message: 'success',
//                 data: req.body,
//                 changes: result.affectedRows
//             });
//         }
//     });
// });

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});
