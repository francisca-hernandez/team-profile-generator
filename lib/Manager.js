
const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {

        //employee class
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
};

module.exports = Manager;