const express = require('express');

const {
  getOneOrder,
  createOneOrder,
  updateQuantityOrder,
} = require('../controllers/panierProduit.controller');

const router = express.Router();

router.get('/:id', getOneOrder);

router.post('/', createOneOrder);
router.put('/:id', updateQuantityOrder);

module.exports = router;
