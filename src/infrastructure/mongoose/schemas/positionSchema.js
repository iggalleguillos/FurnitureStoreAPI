
const mongoose = require('mongoose');
const uuid = require('uuid');

const position = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    }
});

module.exports = mongoose.model('Position', position);