const Item = require('../models/item');

exports.showItems = async (req, res) => {
  const items = await Item.find();
  res.render('items', { items });
};
const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.get('/items', itemController.showItems);

module.exports = router;