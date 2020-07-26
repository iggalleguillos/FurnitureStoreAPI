
const Position = require('../../../domain/entities/positionEntity');


module.exports = async (id, positionRepository) => {

    let position = await positionRepository.getPositionById(id);

    return new Position(position.id, position.name, position.description);
}