
const mongoose = require('mongoose');
const uuid = require('uuid');

const Position = require('./positionSchema');

const employee = new mongoose.Schema({
    id: {
        type: String,
        default: uuid.v4()
    },
    name: {
        type: String
    },
    position: {
        type: Schema.ObjectId, ref: Position
    }
});

module.exports = Employee = mongoose.model(employee);