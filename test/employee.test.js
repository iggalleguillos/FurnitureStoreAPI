
const AddEmployee = require('../src/application/use_cases/employee/addEmployee');
const GetEmployeeById = require('../src/application/use_cases/employee/getEmployeeById');
const GetEmployees = require('../src/application/use_cases/employee/listEmployees');
const EmployeeRepository = require('../src/infrastructure/repository/employeeRepository');
const EmployeeEntity = require('../src/domain/entities/employeeEntity');
const PositionEntity = require('../src/domain/entities/positionEntity');

const mockEmployeeRepository = new EmployeeRepository();

describe('Employee Tests', () => {

    test('Should return an added employee resource', async () =>{

        //arrange
        let result = new EmployeeEntity("123", "Test Employee", new PositionEntity("123"));
        mockEmployeeRepository.addEmployee = jest.fn((employee) => result);
        //act
        let employee = await AddEmployee(new EmployeeEntity("123", "Test Employee", new PositionEntity("123", "Test Position", "Test Description")), 
                            mockEmployeeRepository);

        //asserts
        expect(mockEmployeeRepository.addEmployee).toHaveBeenCalledWith(new EmployeeEntity(null, "Test Employee", 
            new PositionEntity("123")));
        expect(employee).toEqual(result);
    });

    test('Should return a specific resource that matches with input id', async () =>{

        //arrange
        let result = { _id: "123", name: "Test Employee", position: { _id: "123", name: "Test Position", description: "Test Description"}}
        let useCaseResult = new EmployeeEntity("123", "Test Employee", new PositionEntity("123", "Test Position", "Test Description"));
        mockEmployeeRepository.getEmployeeById = jest.fn((id) => result);

        //act
        let employee = await GetEmployeeById("123", mockEmployeeRepository);

        //asserts
        expect(mockEmployeeRepository.getEmployeeById).toHaveBeenCalledWith("123");
        expect(employee).toEqual(useCaseResult);
    });

    test('Should return a list with employee resources persisted in repository', async () =>{

        //arrange
        let result = [{ _id: "123", name: "Test Employee", position: { _id: "123", name: "Test Position", description: "Test Description" }},
                    { _id: "124", name: "Test Employee", position: { _id: "124", name: "Test Position 1", description: "Test Description 1" }}];

        let useCaseResult = [new EmployeeEntity("123", "Test Employee", new PositionEntity("123", "Test Position", "Test Description")),
                            new EmployeeEntity("124", "Test Employee", new PositionEntity("124", "Test Position 1", "Test Description 1"))];

        mockEmployeeRepository.getEmployees = jest.fn(() => result);

        //act
        let employees = await GetEmployees(mockEmployeeRepository);

        //asserts
        expect(mockEmployeeRepository.getEmployees).toHaveBeenCalled();
        expect(employees).toEqual(useCaseResult);
    });
});