
const PositionEntity = require('../../../domain/entities/positionEntity');

module.exports = async (name, description, positionRepository) => {
    let position = new PositionEntity(null, name, description);

    return await positionRepository.addPosition(position);
};