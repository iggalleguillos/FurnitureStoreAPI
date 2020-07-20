const mongoose = require("../mongoose/mongoose");

const Position = require('../mongoose/schemas/positionSchema');
const PositionRepository = require('../../domain/interfaces/positionRepository')


module.exports = class extends PositionRepository {

    constructor(){
        super();
    }

    async addPosition(positionEntity){
        const { id, name, description } = positionEntity;
        
        const mongoosePosition = new Position({ name, description });
        await mongoosePosition.save();

        return mongoosePosition;
    }
}