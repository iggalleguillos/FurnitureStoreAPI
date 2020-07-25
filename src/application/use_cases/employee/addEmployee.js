

const EmployeeEntity = require('../../../domain/entities/employeeEntity');
const PositionEntity = require('../../../domain/entities/positionEntity');


module.exports = async (employee, employeeRepository) => {

    let positionEntity = new PositionEntity(employee.position.id);
    let employeeEntity = new EmployeeEntity(null, employee.name, positionEntity);

    return await employeeRepository.addEmployee(employeeEntity);
}