const express = require('express');

const { getOne, createOne } = require('../controllers/panier.controller');
const { createOneOrder } = require('../controllers/panierProduit.controller');

const router = express.Router();

router.get('/:id', getOne);
router.post('/', createOne);
router.post('/perso', createOneOrder);

module.exports = router;
