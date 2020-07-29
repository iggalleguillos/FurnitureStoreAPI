
const FurnitureEntity = require('../../../domain/entities/furnitureEntity');
const MeasurementEntity = require('../../../domain/entities/measurementEntity');
const MaterialEntity = require('../../../domain/entities/materialEntity');

module.exports = async (furniture, furnitureRepository) => {

    let measurementEntity = new MeasurementEntity(furniture.measurements.height, furniture.measurements.width, furniture.measurements.length);

    let furnitureEntity = new FurnitureEntity(null, furniture.name, furniture.description, measurementEntity, furniture.materials);

    return await furnitureRepository.addFurniture(furnitureEntity);

}