const express = require('express');
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

const Product = require('../models/Product');
const User = require('../models/User');

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
    check('profit', 'profit is required').not().isEmpty(),
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
      petType,
      category,
      profit,
    } = req.body;

    try {
      let product = new Product({
        name: productName,
        image,
        category,
        petType,
        price,
        manufacturer,
        description,
        profit,
      });

      await product.save();
      res.status(200).json(product);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  }
);

// @route   POST api/products
// @desc    Edit a product
// @access  Private - Admin
router.post(
  '/:id',

  [
    check('name', 'product name is required').not().isEmpty(),
    check('image', 'image is required').not().isEmpty(),
    check('description', 'description is required').not().isEmpty(),
    check('price', 'price is required').not().isEmpty(),
    check('manufacturer', 'manufacturer is required').not().isEmpty(),
    check('category', 'category is required').not().isEmpty(),
    check('petType', 'pet type is required').not().isEmpty(),
    check('profit', 'profit is required').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      name,
      image,
      description,
      price,
      manufacturer,
      petType,
      category,
      profit,
    } = req.body;

    const productFields = {
      name,
      image,
      description,
      price,
      manufacturer,
      petType,
      category,
      profit,
    };

    try {
      let product = await Product.findByIdAndUpdate(
        { _id: req.params.id },
        { $set: productFields },
        { new: true }
      );

      if (!product) {
        return res.status(500).send('Database error');
      }

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
    const products = await Product.find().sort({ createdAt: -1 });

    res.status(200).json(products);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// @route   GET api/products/:id
// @desc    Get a product
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.status(200).json(product);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// @route   DELETE api/products/:id
// @desc    Delete a product
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    await Product.findOneAndDelete({ _id: req.params.id });

    res.status(200).json({ msg: 'Success' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// @route   GET api/products/reviews/:id
// @desc    get reviews
// @access  Public
router.get('/reviews/:id', async (req, res) => {
  try {
    const { reviews } = await Product.findById(req.params.id).select('reviews');

    res.status(200).json(reviews);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// @route   POST api/products/review/:id
// @desc    add a review
// @access  Private
router.post(
  '/review/:id',
  [
    auth,
    [
      check('rating', 'rating is required').not().isEmpty(),
      check('comment', 'comment is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');
      let product = await Product.findById({ _id: req.params.id }).select(
        '-image'
      );

      if (!product) return res.status(404).json({ msg: 'product not found' });

      const newReview = {
        user: req.user.id,
        name: user.username,
        rating: req.body.rating,
        comment: req.body.comment,
      };

      product.reviews.unshift(newReview);

      await product.save();

      res.status(200).json(newReview);
    } catch (error) {
      if (error.kind === 'ObjectId') {
        return res.status(404).json({ msg: 'product not found!' });
      }
      console.error(error.message);
      res.status(500).send('Server error');
    }
  }
);

// @route   PUT api/products/review/:id
// @desc    update a review
// @access  Private
router.put(
  '/review/:id',
  [
    auth,
    [
      check('reviewId', 'reviewId is required').not().isEmpty(),
      check('rating', 'rating is required').not().isEmpty(),
      check('comment', 'comment is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');
      let product = await Product.findById(req.params.id);
      product.reviews.filter((review) => req.body.reviewId == review._id);

      const newReview = {
        user: req.user.id,
        name: user.username,
        rating: req.body.rating,
        comment: req.body.comment,
      };

      res.status(200).json(review);
    } catch (error) {
      if (error.kind === 'ObjectId') {
        return res.status(404).json({ msg: 'product not found!' });
      }
      console.error(error.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
