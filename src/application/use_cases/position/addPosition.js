
const PositionEntity = require('../../../domain/entities/positionEntity');

module.exports = (name, description, positionRepository ) => {
    let position = new PositionEntity(null, name, description);

    console.log(position);
    console.log(positionRepository);
    positionRepository.addPosition(position).then((result) => {
        console.log("works")
    }).catch((err) => {
        
    });
    //return positionRepository.addPosition(position);
};