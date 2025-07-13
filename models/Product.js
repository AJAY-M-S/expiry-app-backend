const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  product_name: String,
  product_id: Number,
  mfg_date: String,
  exp_date: String,
  addedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', ProductSchema);
