const express = require('express');
const inquirer = require('inquirer');
const emp = require('./lib/Employee');
const rol = require('./lib/Role');
const dep = require('./lib/Department');
const ques = require('./lib/questions');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());