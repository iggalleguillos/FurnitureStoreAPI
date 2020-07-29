
const Material = require('../mongoose/schemas/materialSchema');
const Stock = require('../mongoose/schemas/stockSchema');
const MaterialRepository = require('../../domain/interfaces/materialRepository');

module.exports = class extends MaterialRepository {

    async addMaterial(material) {

        let mongooseMaterial = new Material({name: material.name, description: material.description});

        let result;
        
        await new Stock().save().then(async (stock) => {
            console.log(stock);

            mongooseMaterial.stocks.push(stock);
            result = await mongooseMaterial.save();
        });

        return result;
    }

    async getMaterialById(id){

        return await Material.findById(id).populate('stocks');
    }

    async getMaterials(){

        return await Material.find().populate('stocks');
    }

    async addStock(materialId, amountStock){
        
        console.log(amountStock)
        let mongooseMaterial = await Material.findById(materialId).populate('stocks');

        let result;

        await new Stock({ amount : amountStock }).save().then(async (stock) => {

            mongooseMaterial.stocks.push(stock);

            await mongooseMaterial.save();
            result = stock;
        });

        return result;
    }
}