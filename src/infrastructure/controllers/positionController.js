
const AddPosition = require('../../application/use_cases/position/addPosition');
const ListPositions = require('../../application/use_cases/position/listPositions');
const PositionRepository = require('../repository/positionRepository');
const GetPositionById = require('../../application/use_cases/position/getPositionById');

const positionRepository = new PositionRepository()

const PositionController = {

    async addPosition(request) {
        
        return await AddPosition(request.name, request.description, positionRepository);
    },

    async getPositions(){

        return await ListPositions(positionRepository);
    },

    async getPositionById(id){
        
        return await GetPositionById(id, positionRepository);
    }

}

module.exports = PositionController;