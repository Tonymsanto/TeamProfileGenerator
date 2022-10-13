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

//Prompts for interns and engineers
inquirer.prompt([
    {
     message: 'What is the emplyee\'s role?',
     type: 'list',
     name: 'role',
     choices: ['Intern', 'Engineer']
    },
    {
        message: 'What is the employee\'s name?',
        type: 'input',
        name: 'name'
    },
    {
        message: 'What is the employee\'s ID?',
        type: 'input',
        name: 'id'
    },
    {
        message: 'What is the employee\'s email?',
        type: 'input',
        name: 'email'
    },
    {
        message: 'What is the engineer\'s github?',
        type: 'input',
        name: 'email',
        when: (input) => input.role === 'engineer'
    },
    {
        message: 'Where does the intern go to school?',
        type: 'input',
        name: 'school',
        when: (input) => input.role === 'Intern'
    },
    {
        message: 'Would you like to add another team member?',
        type: 'confirm',
        name: 'confirmAddEmployuee',
        default: false
    },
]);