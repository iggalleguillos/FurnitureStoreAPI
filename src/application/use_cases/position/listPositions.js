
const Position = require('../../../domain/entities/positionEntity');

module.exports = async (positionRepository) => {
    let positions = await positionRepository.getPositions();

    return positions.map((position) => {
        return new Position(position.id, position.name, position.description);
    });
}