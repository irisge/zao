const express = require('express');

const {
  getAll,
  getOne,
  createOne,
} = require('../controllers/panier.controller');

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getOne);

router.post('/', createOne);

module.exports = router;
