const fs = require('fs')
const inquirer = require('inquirer')

const makeHTML = require('./src/makeHTML');
const Engineer = require('./lib/engineer');
const Intern = require ('./lib/intern');
const Manager = require ('./lib/manager');
const team = [];

//Prompts for the manager
const managerInput = [
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
];

//Prompts for the interns and engineers
const employeeInput = [
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
        name: 'confirmAddEmployee',
        default: false
    },
];

//This is going to create a new manager object.
const newManager = () => {
    return inquirer.prompt(managerInput)
        .then(response => {
            const { name, id, email, officeNumber } = response;
            const manager = new Manager(name, id, email, officeNumber);

            team.push(manager);
            console.log(manager);
        })
};

//This is going to create a new employee obeject.
const newEmployee = () => {
    return inquirer.prompt(employeeInput)
        .then(response => {
            let { name, id, email, role, github, school, confirmAddEmployee } = response;
            let employee;

            if (role === "Engineer") {
                employee = new Engineer(name, id, email, github);
                console.log(employee);
            } else if (role === "Intern") {
                employee = new Intern(name, id, email, school);
                console.log(employee);
            }

            team.push(employee);

            if (confirmAddEmployee) {
                return newEmployee(team);
            } else {
                return team;
            }
        })

};

//This fuction is going to make an HTML page based on the inputed data.
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Index.html has been created!")
        }
    })
};

newManager()
    .then(newEmployee)
    .then(team => {
        return makeHTML(team);
    })
    .then(employeePage => {
        return writeFile(employeePage);
    })
    .catch(err => {
        console.log(err);
    });