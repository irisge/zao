const express = require('express');

const produitRouter = require('./produit.routes');

const router = express.Router();

router.use('/produits', produitRouter);

module.exports = router;
