const mongoose = require('mongoose');
const uuid = require('uuid');

const Material = require('./materialSchema');

const furniture = new mongoose.Schema({
    _id: {
        type: String,
        default: uuid.v4()
    },
    name: {
        type: String
    },
    materials:[{
      type: Schema.ObjectId, ref: Material
    }]
});

module.exports = mongoose.model('Furniture', furniture);