// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee
const Employee = require("./Employee.js");

class Engineer extends Employee {
    //TODO: ask how default values work with subclasses. 
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;