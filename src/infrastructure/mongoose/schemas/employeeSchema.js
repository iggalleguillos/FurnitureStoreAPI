
const mongoose = require('mongoose');

const employee = new mongoose.Schema({
    name: {
        type: String
    },
    position: {
        type: mongoose.Types.ObjectId, ref: 'Position'
    }
});

module.exports = mongoose.model('Employee', employee);