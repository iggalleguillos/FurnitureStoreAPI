
const mongoose = require('mongoose');

const material = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    stocks: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Stock',
        default: []
    }]
});

module.exports = mongoose.model('Material', material);
