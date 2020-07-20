
const AddPosition = require('../../application/use_cases/position/addPosition');
const PositionRepository = require('../repository/positionRepository');

const positionRepository = new PositionRepository()

const PositionController = {

    async addPosition(request) {
        
        return await AddPosition(request.name, request.description, positionRepository);
    }

}

module.exports = PositionController;