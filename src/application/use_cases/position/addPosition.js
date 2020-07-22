
const PositionEntity = require('../../../domain/entities/positionEntity');

module.exports = (name, description, positionRepository ) => {
    let position = new PositionEntity(null, name, description);

    return positionRepository.addPosition(position);
};