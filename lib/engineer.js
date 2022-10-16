//Importing the constructor for employees
const Employee = require("./employee.js");

//Constructor for Engineer
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }
    
    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
;}

module.exports = Engineer;