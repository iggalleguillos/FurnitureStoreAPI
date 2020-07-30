
const AddPosition = require('../src/application/use_cases/position/addPosition');
const GetPositionById = require('../src/application/use_cases/position/getPositionById');
const GetPositions = require('../src/application/use_cases/position/listPositions');
const PositionRepository = require('../src/infrastructure/repository/positionRepository');
const PositionEntity = require('../src/domain/entities/positionEntity');

const mockPositionRepository = new PositionRepository();

describe('Position Tests', () =>{

    test('Add a new position should be return an added position', async () => {

        //arrange 
        let result = new PositionEntity("123", "Test Name", "Test Description");
        mockPositionRepository.addPosition = jest.fn(() => result);

        //act
        let position = await AddPosition("Test Name", "Test Description", mockPositionRepository);

        //asserts
        expect(mockPositionRepository.addPosition).toHaveBeenCalledWith(new PositionEntity(null, "Test Name", "Test Description"));
        expect(position).toEqual(result);
    });

    test('Should return a specific resource that matches with the input id', async () => {

        //arrange
        let result = new PositionEntity("123", "Test Name", "Test Description");
        mockPositionRepository.getPositionById = jest.fn(() => result);

        //act
        let position = await GetPositionById("123", mockPositionRepository);

        //asserts
        expect(mockPositionRepository.getPositionById).toHaveBeenCalledWith("123");
        expect(position).toEqual(result);
    });

    test('Should return a list with position resources persisted in repository', async () =>{

        //arrange
        let result = [];
        result.push({ _id: "123", name: "Test Name", description: "Test Description"});
        result.push({ _id: "124", name: "Test Name 1", description: "Test Description 1"});

        let useCaseResult = [new PositionEntity("123", "Test Name", "Test Description"), new PositionEntity("124", "Test Name 1", "Test Description 1")];

        mockPositionRepository.getPositions = jest.fn(() => result);

        //act
        let position = await GetPositions(mockPositionRepository);

        //asserts
        expect(mockPositionRepository.getPositions).toHaveBeenCalled();
        expect(position).toEqual(useCaseResult);
    });
});

