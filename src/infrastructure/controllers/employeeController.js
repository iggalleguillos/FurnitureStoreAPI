
const AddEmployee = require('../../application/use_cases/employee/addEmployee');
const GetEmployees = require('../../application/use_cases/employee/listEmployees');
const EmployeeRepository = require('../../infrastructure/repository/employeeRepository');
const GetEmployeeById = require('../../application/use_cases/employee/getEmployeeById');

const employeeRepository = new EmployeeRepository();

module.exports = {

    async AddEmployee(request){

        return await AddEmployee(request, employeeRepository);
    },

    async GetEmployees(){
        
        return await GetEmployees(employeeRepository);
    },

    async GetEmployeeById(id){

        return await GetEmployeeById(id);
    }
}