
const Position = require('../mongoose/schemas/positionSchema');
const PositionRepository = require('../../domain/interfaces/positionRepository');


module.exports = class extends PositionRepository {

    constructor(){
        super();
    }

    async addPosition(positionEntity){

        const { name, description } = positionEntity;
        
        const mongoosePosition = new Position({ name, description });
        await mongoosePosition.save();

        return mongoosePosition;
    }

    async getPositions(){

        return await Position.find();

        // positions.map((position) => {
        //     return new Position(position._id, position.name, position.description);
        // });
    }

    async getPositionById(id){

        return await Position.findById(id);
    }
}