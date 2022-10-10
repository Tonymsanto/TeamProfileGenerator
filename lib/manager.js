const employee = require("./employee.js");

class manager extends employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.officeNumber = officeNumber;
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

    getOfficeNumber() {
        return this.officeNumber
    }

    getRole() {
        return 'Manager';
    }
;}

module.exports = manager;