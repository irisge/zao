const express = require('express');

const {
  getAllFullCarts,
  getOneFullCart,
} = require('../controllers/panier.controller');

const router = express.Router();

router.get('/', getAllFullCarts);
router.get('/:id', getOneFullCart);

module.exports = router;
