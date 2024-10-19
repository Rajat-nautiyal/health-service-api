const mongoose = require('mongoose');

const healthSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Service name is required'],
    minlength: 3 //minimum length must be 3
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price must be a positive number'],
  },
});

module.exports = mongoose.model('Service', healthSchema);
