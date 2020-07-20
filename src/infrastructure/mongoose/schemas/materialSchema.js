
const mongoose = require('mongoose');
const uuid = require('uuid');

const material = new mongoose.Schema({
    id:{
        type: String,
        default: uuid.v4()
    },
    name: {
        type: String
    },
    description: {
        type: String
    }
});

module.exports = mongoose.model('Material', material);
