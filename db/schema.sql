-- delete and create database
DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

-- select and use db
USE employee_db

-- create tables with properties
CREATE TABLE department (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_id INT, 
    FOREIGN KEY (department_id)
    REFERENCES department(id)
)

CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name:VARCHAR(30) NOT NULL,
    last_name:VARCHAR(30) NOT NULL,
    role_id: INT,
    manager_id: INT,

)