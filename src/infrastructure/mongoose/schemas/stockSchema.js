
const mongoose = require('mongoose');

const stock = new mongoose.Schema({
    amount: {
        type: Number,
        default: 0
    },
    admissionDate: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Stock', stock);