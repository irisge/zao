const express = require('express');

const produitRouter = require('./produit.routes');
const userRouter = require('./user.routes');
const authRouter = require('./auth.routes');
const authorization = require('../middlewares/auth');

const router = express.Router();

router.use('/produits', produitRouter);
router.use('/users', userRouter);
router.use('/panier', authorization, userRouter);
router.use(authRouter);

module.exports = router;
