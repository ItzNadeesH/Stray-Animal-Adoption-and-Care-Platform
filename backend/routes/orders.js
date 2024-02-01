const express = require('express');
const auth = require('../middleware/auth');
const Order = require('../models/Order');

const router = express.Router();

// @route   POST api/orders
// @desc    Get all orders
// @access  Private
router.post('/', auth, async (req, res) => {
  try {
    const orders = await Order.find().sort({ data: -1 });

    res.status(200).json(orders);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

// @route   GET api/orders
// @desc    Get orders
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const orders = await Order.find({ customer: req.user.id })
      .select('products address payment card date status')
      .sort({ date: -1 });

    res.status(200).json(orders);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

// @route   GET api/orders/:id
// @desc    Get a order
// @access  Private
router.get('/:id', auth, async (req, res) => {
  try {
    const order = await Order.findById({ _id: req.params.id });

    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

// @route   POST api/orders
// @desc    Buy products
// @access  Private
router.post('/checkout', auth, async (req, res) => {
  const {
    firstname,
    lastname,
    address,
    city,
    postcode,
    phone,
    email,
    notes,
    payment,
    card,
    products,
  } = req.body;

  try {
    if (products.length === 0) {
      throw Error("You don't have any products in your cart");
    }

    if (
      !firstname ||
      !lastname ||
      !address ||
      !city ||
      !postcode ||
      !phone ||
      !email ||
      !payment
    ) {
      throw Error('All fields must be filled');
    }
    if (
      payment === 'card' &&
      (!card.cardnumber || !card.expiredate || !card.cvv)
    ) {
      throw Error('Card details must be filled');
    }

    if (payment === 'card') {
      let order = new Order({
        customer: req.user.id,
        products,
        firstname,
        lastname,
        address,
        city,
        postcode,
        phone,
        email,
        payment,
        card,
        notes,
      });

      await order.save();
    }

    if (payment === 'cash') {
      let order = new Order({
        customer: req.user.id,
        products,
        firstname,
        lastname,
        address,
        city,
        postcode,
        phone,
        email,
        payment,
        notes,
      });

      await order.save();
    }

    res.status(200).json({ msg: 'success' });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

// @route   PUT api/orders
// @desc    Change order status
// @access  Private
router.put('/:id', auth, async (req, res) => {
  try {
    await Order.findByIdAndUpdate(
      { _id: req.params.id },
      { status: req.body.selected },
      { new: true }
    );
    res.status(200).json({ msg: 'success' });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

module.exports = router;
