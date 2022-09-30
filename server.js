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

// make EMPLOYEE MANAGER display

// start app
const startApp = () => {
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
            
        } else if(response === "Add Employee") {
            
        } else if(response === "Update Employee Role") {
            
        } else if(response === "View All Departments") {
            
        } else if(response === "Add Role") {
            
        } else if(response === "Add a Department") {
            
        } else if(response === "Update Employee Manager") {
            
        } else if(response === "View Employees by Manager"){
            
        } else if(response === "View Employees by Department") {
            
        } else if(response === "Delete Department") {
            
        } else if(response === "Delete Role") {
            
        } else if(response === "Delete Employee") {
            
        } else if(response === "View Total Utilized Budget by Department") {
            
        } else if(response === "Quit") {
            
        };
    })
}


//TODO: GET STATEMENTS
// view all departments

// view all roles

// view all employees

//TODO: POST STATEMENTS
// add a dept.

// add a role

// add an employee


//TODO: UPDATE STATEMENT
// update an employee role

// * BONUS --------------------------------------
// update employee manager

// Get: view employees by manager

// GET: view employees by department

// DELETE:
// delete department

// delete roles

// delete employee

// GET: view total utilized budget by deparment