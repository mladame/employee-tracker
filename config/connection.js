// db connection
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

