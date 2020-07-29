const mongoose = require('mongoose');


const furniture = new mongoose.Schema({
    name: {
        type: String
    },
    description:{
        type: String
    },
    measurements:{
      height: {
        type: Number
      },
      width: {
        type: Number
      },
      length:{
        type: Number
      }
    },
    materialsToBuildIt:{
      type: [
        {
          material: { type: mongoose.Schema.ObjectId, ref: 'Material' },
          amount: { type: Number },
        }
    ] 
    }
});

module.exports = mongoose.model('Furniture', furniture);