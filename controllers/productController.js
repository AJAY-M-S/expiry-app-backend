const Product = require('../models/Product');

// Add product
exports.addProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.json(newProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all products
exports.getProducts = async (req, res) => {
  const products = await Product.find().sort({ addedAt: -1 });
  res.json(products);
};

// Delete one
exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ msg: 'Deleted' });
};

// Delete all
exports.clearAll = async (req, res) => {
  await Product.deleteMany({});
  res.json({ msg: 'All cleared' });
};
