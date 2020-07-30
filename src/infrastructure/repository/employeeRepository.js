

const Employee = require('../mongoose/schemas/employeeSchema');
const Position = require('../mongoose/schemas/positionSchema');
const EmployeeRepository = require('../../domain/interfaces/employeeRepository');

module.exports = class extends EmployeeRepository {

    async addEmployee(employee) {

        const mongoosePosition = await Position.findById(employee.position.id);

        const mongooseEmployee = new Employee({ name: employee.name, position: mongoosePosition });

        return await mongooseEmployee.save();
    }

    async getEmployees(){

        return await Employee.find().populate('position');
    }

    async getEmployeeById(id){

        return await Employee.findById(id).populate('position');
    }
}