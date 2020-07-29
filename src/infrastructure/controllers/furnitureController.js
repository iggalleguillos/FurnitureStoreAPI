const addFurniture = require("../../application/use_cases/furniture/addFurniture");

const AddFurniture = require('../../application/use_cases/furniture/addFurniture');
const FurnitureRepository = require('../repository/furnitureRepository');
const GetFurnitureById = require("../../application/use_cases/furniture/getFurnitureById");
const GetFurnitures = require('../../application/use_cases/furniture/listFurnitures');

const furnitureRepository = new FurnitureRepository();

module.exports = {

    async addFurniture(furniture){

        return await AddFurniture(furniture, furnitureRepository);
    },

    async getFurnitureById(id){

        return await GetFurnitureById(id, furnitureRepository);
    },

    async getFurnitures(){

        return await GetFurnitures(furnitureRepository);
    }
}