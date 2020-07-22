const mongoose = require("../mongoose/mongoose");

const Position = require('../mongoose/schemas/positionSchema');
const PositionRepository = require('../../domain/interfaces/positionRepository');


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

    async getPositions(){

        let positions = await Position.find();

        positions.map((position) => {
            return new Position(position._id, position.id, position.name, position.description);
        });

        return positions;
    }

    async getPositionById(id){

        return await Position.findOne({id : id});
    }
}