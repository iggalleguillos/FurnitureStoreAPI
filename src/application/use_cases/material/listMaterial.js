
const MaterialEntity = require('../../../domain/entities/materialEntity');

module.exports = async (materialRepository) => {

    let materials = await materialRepository.getMaterials();

    return materials.map((material) => {

        let totalStock = material.stocks.map(a => a.amount).reduce((a, b) => a + b, 0)
        return new MaterialEntity(material.id, material.name, material.description, totalStock)
    })
}