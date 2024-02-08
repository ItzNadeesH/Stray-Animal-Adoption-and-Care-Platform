const express = require('express');

const auth = require('../middleware/auth');

const User = require('../models/User');
const Order = require('../models/Order');

const router = express.Router();

// @route   POST api/report
// @desc    get report
// @access  Private
router.post('/', auth, async (req, res) => {
  const customersByDate = await User.aggregate([
    {
      $group: {
        _id: { $dateToString: { format: '%Y-%m-%d', date: '$date' } },
        Customers: {
          $count: {},
        },
      },
    },
    {
      $project: {
        _id: 0,
        date: '$_id',
        Customers: 1,
      },
    },
  ]).sort({ date: 1 });

  const ordersByDate = await Order.aggregate([
    {
      $unwind: '$products',
    },
    {
      $group: {
        _id: { $dateToString: { format: '%Y-%m-%d', date: '$date' } },
        Sales: {
          $sum: { $multiply: ['$products.price', '$products.quantity'] },
        },
      },
    },
    {
      $project: {
        _id: 0,
        date: '$_id',
        Sales: 1,
      },
    },
  ]).sort({ date: 1 });

  const performance = [];

  customersByDate.forEach((item) => {
    ordersByDate.forEach((order) => {
      if (order.date === item.date) {
        performance.push({
          Customers: item.Customers,
          Sales: order.Sales,
          date: item.date,
        });
      } else {
        performance.push({
          Customers: item.Customers,
          Sales: 0,
          date: item.date,
        });
        performance.push({
          Customers: 0,
          Sales: order.Sales,
          date: order.date,
        });
      }
    });
  });

  performance.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateA - dateB;
  });

  function removeDuplicates(array, key) {
    return array.filter((item, index) => {
      return index === array.findIndex((obj) => obj[key] === item[key]);
    });
  }

  const uniquePerformance = removeDuplicates(performance, 'date');

  res.status(200).json(uniquePerformance);
});

module.exports = router;
