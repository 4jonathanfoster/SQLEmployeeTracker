const mysql = require('mysql2');

const db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Live4Life!',
        database: 'company_db'
    },
    console.log(`Connected to the company_db database.`)
);

module.exports = db;