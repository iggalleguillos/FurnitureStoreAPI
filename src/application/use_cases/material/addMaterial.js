
const Material = require('../../../domain/entities/materialEntity');

module.exports = async (material, materialRepository) => {

    let materialEntity = new Material(null, material.name, material.description);

    return await materialRepository.addMaterial(materialEntity);
}