const mongoose = require('mongoose');

const Material = require('./materialSchema');

const furniture = new mongoose.Schema({
    name: {
        type: String
    },
    materials:[{
      type: Schema.ObjectId, ref: Material
    }]
});

module.exports = mongoose.model('Furniture', furniture);