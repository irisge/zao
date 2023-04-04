const express = require('express');

const produitRouter = require('./produit.routes');
const panierRouter = require('./panier.routes');
const userRouter = require('./user.routes');
const authRouter = require('./auth.routes');
// const authorization = require('../middlewares/auth');

const router = express.Router();

router.use('/produits', produitRouter);
router.use('/users', userRouter);
router.use('/panier', panierRouter);
router.use(authRouter);

module.exports = router;
