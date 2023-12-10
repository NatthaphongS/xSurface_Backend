const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide product name'],
  },
  code: {
    type: String,
    required: [true, 'Please provide product code'],
  },
  price: {
    type: mongoose.Types.Decimal128,
    required: [true, 'Please provide product price'],
  },
  images: {
    type: [String],
    require: [true, 'Please provide product image'],
  },
});

const ProductModel = mongoose.model('Product', ProductSchema);

module.exports = ProductModel;
