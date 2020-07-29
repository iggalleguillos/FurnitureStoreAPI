

module.exports = async (materialId, amountStock, materialRepository) => {

    return await materialRepository.addStock(materialId, amountStock);
}