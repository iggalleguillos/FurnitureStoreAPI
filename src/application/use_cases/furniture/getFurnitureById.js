
const FurnitureEntity = require('../../../domain/entities/furnitureEntity');
const MaterialEntity = require('../../../domain/entities/materialEntity');

module.exports = async (id, furnitureRepository) => {

    let result = await furnitureRepository.getFurnitureById(id);
    
    let materials = result.materialsToBuildIt.map((item) => {

        let materialEntity = new MaterialEntity(item.material._id, item.material.name, item.material.description);
        return { material: materialEntity, amount: item.amount }
    });

    return new FurnitureEntity(result._id, result.name, result.description, result.measurements, materials);
}