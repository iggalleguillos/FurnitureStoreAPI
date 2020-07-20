

module.exports = class {
    
    constructor(id = null, name, description, materials){
        this.id = id,
        this.name = name, 
        this.description = description
        this.materials = materials //Material Class
    }
}