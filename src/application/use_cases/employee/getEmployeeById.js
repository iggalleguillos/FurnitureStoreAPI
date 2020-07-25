
const EmployeeEntity = require('../../../domain/entities/employeeEntity');
const PositionEntity = require('../../../domain/entities/positionEntity');

module.exports = async (id, employeeRepository) => {

    let employee = await employeeRepository.getEmployeeById(id);

    let positionEntity = new PositionEntity(employee.position._id, employee.position.name, employee.position.description);
    let employeeEntity = new EmployeeEntity(employee._id, employee.name, positionEntity);

    return employeeEntity;
}