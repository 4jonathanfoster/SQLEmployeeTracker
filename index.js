const inquirer = require("inquirer");
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Live4Life!",
    database: "company_db"
})

connection.connect(err => {
    if(err) throw err;
    mainMenu()
})

function mainMenu() {
    inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [
                "View Departments",
                "View Roles",
                "Add Department"
            ]
        }
    ]).then(({choice}) => {
        console.log(choice)
        if(choice == "View Departments"){
            viewDept()
        }

        if(choice == "Add Department"){
            addDept()
        }
    })
}

function viewDept (){
    const sqlString = `SELECT * FROM department`

    connection.query(sqlString, (err, data) => {
        if(err) throw err;
        console.log("\n")
        console.table(data)
        console.log("\n")

        mainMenu()
    })
}

function addDept() {
    inquirer.prompt([
        {
            type: "input",
            name: "newDept",
            message: "What is the new department's name?"
        }
    ]).then(({newDept}) => {
        const sqlString = `
        INSERT INTO department(name)
        VALUES (?)`
        
        connection.query(sqlString, [newDept], (err, data) => {
            if(err) throw err;
            mainMenu()
        })
    })
}