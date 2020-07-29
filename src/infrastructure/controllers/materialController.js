

const AddMaterial = require('../../application/use_cases/material/addMaterial');
const MaterialRepository = require('../../infrastructure/repository/materialRepository');
const GetMaterialById = require('../../application/use_cases/material/getMaterialById');
const GetMaterials = require('../../application/use_cases/material/listMaterials');
const AddStock = require('../../application/use_cases/material/addMaterialStock')

const materialRepository = new MaterialRepository();

module.exports = {

    async addMaterial(material){

        return await AddMaterial(material, materialRepository);
    },

    async getMaterialById(id){

        return await GetMaterialById(id, materialRepository);
    },

    async getMaterials(){

        return await GetMaterials(materialRepository);
    },

    async addMaterialStock(materialId, amountStock){

        return AddStock(materialId, amountStock, materialRepository);
    }


}