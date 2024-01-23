const express = require('express');
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

const Product = require('../models/Product');

const router = express.Router();

// @route   POST api/products
// @desc    Add a product
// @access  Private - Admin
router.post(
  '/',

  [
    check('productName', 'product name is required').not().isEmpty(),
    check('image', 'image is required').not().isEmpty(),
    check('description', 'description is required').not().isEmpty(),
    check('price', 'price is required').not().isEmpty(),
    check('manufacturer', 'manufacturer is required').not().isEmpty(),
    check('category', 'category is required').not().isEmpty(),
    check('petType', 'pet type is required').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      productName,
      image,
      description,
      price,
      manufacturer,
      petTypes,
      category,
    } = req.body;

    try {
      let product = new Product({
        name: productName,
        image,
        category,
        petTypes,
        price,
        manufacturer,
        description,
      });

      await product.save();
      res.status(200).json(product);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  }
);

// @route   GET api/products
// @desc    Get all products
// @access  Public
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
