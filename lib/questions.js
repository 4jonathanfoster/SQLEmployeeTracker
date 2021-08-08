const tableData = require('./tableData');

const initialQuestions = [{
    type: 'list',
    message: 'Welcome, What would you like to do?',
    name: 'answer',
    choices: ['Employees', "Departments","Roles", "Quit"]
}]

// ?---------------------------------------------EMPLOYEE QUESTIONS------------------------------------------
const employeeOptions = [{
    type: 'list',
    message: 'Employee options',
    name: 'eOption',
    choices: ['View Employees', 'Update Employees']
}]

const employeeViewOption = [{
    type: 'list',
    message: 'View options',
    name: 'eView',
    choices: ['View All Employees', 'View Employees By Manager', 'View Employees By Department']
}]

const employeeUpdateOptions = [{
    type: 'list',
    message: 'Update options',
    name: 'eUpdate',
    choices: ['Add Employee', 'Update Existing Employee Traits', 'Delete Employee']
}]

const addEmployee = [{
    type: 'input',
    message: "What is your new employee's first name?",
    name: "eFName",
},
{
    type: 'input',
    message: "What is your new employee's last name?",
    name: "eLName",
},
{
    type: 'list',
    message: "What is your new employee's role?",
    name: "eRole",
    choices: tableData.getRoles()
},
{
    type: 'list',
    message: "Who is your new employee's manager?",
    name: "eManager",
    choices: tableData.getEmployeeNames()
}]

const updateEmployee = [
    {
        type: 'list',
        message: 'Who would you like to update?',
        name: 'eName',
        choices: tableData.getEmployeeNames()
    },
    {
        type: 'list',
        message: 'What would you like to update?',
        name: 'eUpdate',
        choices: ['role', 'manager']
    },
    {
        type: 'list',
        message: 'Update role',
        name: 'eRole',
        choices: tableData.getRoles(),
        when: (list) => list.eUpdate == "role"
    },
    {
        type: 'list',
        message: 'Update manager',
        name: 'eManager',
        choices: tableData.getManagers(),
        when: (list) => list.eUpdate == "manager"
    }
]

const deleteEmployee = [
    {
        type: 'list',
        message: 'Who would you like to delete?',
        name: 'name',
        choices: tableData.getEmployeeNames()
    }
]

// ?---------------------------------------------ROLE QUESTIONS------------------------------------------
const roleQuestions = [{
    type: 'list',
    message: 'Role optons',
    name: 'option',
    choices: ['View Roles', 'Add a New Role']
}];

const roleViewQuestions = [
    {
        type: 'list',
        message: 'View options',
        name: 'viewOption',
        choices: ['View All Roles', 'View Roles By Department']
    }
]

const addRole = [
    {
        type: 'input',
        message: 'What is the name of the role?',
        name: 'title'
    },
    {
        type: 'number',
        message: 'What is the salary of the role?',
        name: 'salary'
    },
    {
        type: 'list',
        message: 'Which department does the role belong to?',
        name: 'department',
        choices: tableData.getDepartments()
    }
]

// ?---------------------------------------------DEPARTMENT QUESTIONS------------------------------------------
const departmentQuestions = [{
    type: 'list',
    message: 'Department Options',
    name: 'dOption',
    choices: ['View All Departments', 'Add Departments', 'Delete Departments', 'Check Utilizied Budget of Departments']
}];

const addDepartment = [
    {
        type: 'input',
        message: 'What is the name of the department?',
        name: 'name'
    }
];

const deleteDepartment = [
    {
        type: 'list',
        message: 'What is the name of the department you would like to delete?',
        name: 'name',
        choices: getDepartments()
    }
];

module.exports = {initialQuestions, employeeOptions, employeeViewOption, employeeUpdateOptions, addEmployee, updateEmployee, deleteEmployee, roleQuestions, addRole, roleViewQuestions, departmentQuestions, addDepartment, deleteDepartment}