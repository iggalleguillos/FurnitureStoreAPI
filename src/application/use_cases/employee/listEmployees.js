
const Position = require('../../../domain/entities/positionEntity');
const Employee = require('../../../domain/entities/employeeEntity');

module.exports = async (employeeRepository) => {

    let result = await employeeRepository.getEmployees();

    return result.map((employee) => {

        let positionEntity = new Position(employee.position._id, employee.position.name, employee.position.description);
        let employeeEntity = new Employee(employee._id, employee.name, positionEntity);

        return employeeEntity;

    });
}