const express = require('express');
const auth = require('../middleware/auth');
const Order = require('../models/Order');

const router = express.Router();

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

module.exports = router;
