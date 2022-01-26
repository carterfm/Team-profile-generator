// TODO: Write code to define and export the Employee class
class Employee {
    //I'm specifying default values for the parameters of the constructor just in case 
    constructor(name = "Placeholder", id = 0, email = "placeholder@placeholder.com"){
        this.name = name;
        this.id = id;
        this.email = email;
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

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;