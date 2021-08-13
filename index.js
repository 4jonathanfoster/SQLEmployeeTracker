const inquirer = require("inquirer");
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Live4Life!",
    database: "employees_db"
})

db.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + db.threadId);

    startScreen();
});

function mainMenuOnStart() {
    inquirer.prompt({
            type: "list",
            choices: [
                "Add department",
                "Add roles",
                "Add employee",
                "View departments",
                "View roles",
                "View employees",
                "Update employee role",
                "Quit"
            ],
            message: "What would you like to do?",
            name: "option"
        })
        .then(function(result) {
            console.log("You entered: " + result.option);

            switch (result.option) {
                case "Add department":
                    addDepartment();
                    break;
                case "Add roles":
                    addRole();
                    break;
                case "Add employee":
                    addEmployee();
                    break;
                case "View departments":
                    viewDepartment();
                    break;
                case "View roles":
                    viewRoles();
                    break;
                case "View employees":
                    viewEmployees();
                    break;
                case "Update employee role":
                    updateEmployee();
                    break;
                default:
                    quit();
            }
        });
}




function addDepartment() {


    inquirer.prompt({

        type: "input",
        message: "What's the Department name?",
        name: "deptName"

    }).then(function(answer) {



        db.query("INSERT INTO department (name) VALUES (?)", [answer.deptName], function(err, res) {
            if (err) throw err;
            console.table(res)
            startScreen()
        })
    })
}

function addRole() {
    inquirer
        .prompt([{
                type: "input",
                message: "What's the name of the role?",
                name: "roleName"
            },
            {
                type: "input",
                message: "What's the salary for this role?",
                name: "salaryTotal"
            },
            {
                type: "input",
                message: "What's the department id number?",
                name: "deptID"
            }
        ])
        .then(function(answer) {


            db.query("INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)", [answer.roleName, answer.salaryTotal, answer.deptID], function(err, res) {
                if (err) throw err;
                console.table(res);
                startScreen();
            });
        });
}

function addEmployee() {
    inquirer
        .prompt([{
                type: "input",
                message: "What's the first name of the employee?",
                name: "empFirstName"
            },
            {
                type: "input",
                message: "What's the last name of the employee?",
                name: "eeLastName"
            },
            {
                type: "input",
                message: "What's the employee's role id number?",
                name: "roleID"
            },
            {
                type: "input",
                message: "What's the manager id number?",
                name: "managerID"
            }
        ])
        .then(function(answer) {


            db.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answer.empFirstName, answer.empLastName, answer.roleID, answer.managerID], function(err, res) {
                if (err) throw err;
                console.table(res);
                startScreen();
            });
        });
}

function updateEmployee() {
    inquirer
        .prompt([{
                type: "input",
                message: "Which employee would you like to update?",
                name: "empUpdate"
            },

            {
                type: "input",
                message: "What role do you want to update?",
                name: "updateRole"
            }
        ])
        .then(function(answer) {


            db.query('UPDATE employee SET role_id=? WHERE first_name= ?', [answer.updateRole, answer.empUpdate], function(err, res) {
                if (err) throw err;
                console.table(res);
                startScreen();
            });
        });
}

function viewDepartment() {

    let query = "SELECT * FROM department";
    db.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
        startScreen();
    });

}

function viewRoles() {

    let query = "SELECT * FROM roles";
    db.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
        startScreen();
    });

}

function viewEmployees() {

    let query = "SELECT * FROM employee";
    db.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
        startScreen();
    });

}

function quit() {
    db.end();
    process.exit();
}