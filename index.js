const fs = require('fs')
const inquirer = require('inquirer')

const makeHTML = require('./src/makeHTML');
const employee = require('./lib/employee');
const engineer = require('./lib/engineer');
const intern = require ('./lib/intern');
const manager = require ('./lib/manager');
const { type } = require('os');


//Prompts for the manager
inquirer.prompt([
    {
     message: 'What is the name of the manager?',
     type: 'input',
     name: 'name'
    },
    {
        message: 'What is the id of the manager?',
        type: 'input',
        name: 'id'
    },
    {
        message: 'What is the manager\'s email?',
        type: 'input',
        name: 'email'
    },
    {
        message: 'What is the manager\'s officenumber?',
        type: 'input',
        name: 'officeNumber'
    }
]);