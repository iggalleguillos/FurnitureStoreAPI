
const FurnitureRepository = require('../../domain/interfaces/furnitureRepository');
const Furniture = require('../mongoose/schemas/furnitureSchema');
const Material = require('../mongoose/schemas/materialSchema');

module.exports = class extends FurnitureRepository { 

    async addFurniture(furniture){

        let mongooseFurniture = new Furniture({ name: furniture.name, description: furniture.description, measurements: furniture.measurements});

        let materials = await Promise.all(furniture.materials.map(async (material) => {

            return await Material.findById(material.id);
        }));

        furniture.materials.forEach(async (material) => {

            let result = materials.find(a => a._id == material.id);
            mongooseFurniture.materialsToBuildIt.push({ material: result, amount: material.amount });
        });

        return await mongooseFurniture.save();
    }

    async getFurnitureById(id){

        return await Furniture.findById(id).populate('materialsToBuildIt.material');
    }

    async getFurnitures(){

        return await Furniture.find().populate('materialsToBuildIt.material');
    }
}
