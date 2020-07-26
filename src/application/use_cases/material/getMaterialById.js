
const MaterialEntity = require('../../../domain/entities/materialEntity');

module.exports = async (id, materialRepository) => {

    let material = await materialRepository.getMaterialById(id);

    let totalStock = material.stocks.map(a => a.amount).reduce((a, b) => a + b, 0);

    return new MaterialEntity(material.id, material.name, material.description, totalStock);
}