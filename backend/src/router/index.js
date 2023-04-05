const express = require('express');

const produitRouter = require('./produit.routes');
const panierRouter = require('./panier.routes');
const panierInfoRouter = require('./panierInfo.routes');
const panierProduitsRouter = require('./panierProduits.routes');
const userRouter = require('./user.routes');
const authRouter = require('./auth.routes');
// const authorization = require('../middlewares/auth');

const router = express.Router();

router.use('/produits', produitRouter);
router.use('/users', userRouter);
router.use('/panier', panierRouter);
router.use('/commande', panierInfoRouter);
router.use('/articles-paniers', panierProduitsRouter);
router.use(authRouter);

module.exports = router;
