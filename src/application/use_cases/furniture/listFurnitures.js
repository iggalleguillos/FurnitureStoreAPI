
const FurnitureEntity = require('../../../domain/entities/furnitureEntity');
const MaterialEntity = require('../../../domain/entities/materialEntity');

module.exports = async (furnitureRepository) => {

    let result = await furnitureRepository.getFurnitures();
    
    return result.map((furniture) => {
        let materials = furniture.materialsToBuildIt.map((item) => {

            let materialEntity = new MaterialEntity(item.material._id, item.material.name, item.material.description);
            return { material: materialEntity, amount: item.amount }
        });
    
        return new FurnitureEntity(furniture._id, furniture.name, furniture.description, furniture.measurements, materials);
    });
    
}