createEmployee(employee) {
    return this.connection.promise().query("INSERT INTO employee SET ?", employee)
}