const {
  findAllProductsInCart,
  addOneProductToCart,
  addQuantity,
} = require('../models/panierProduit.model');

const getOneOrder = async (req, res) => {
  try {
    const panierId = parseInt(req.params.id, 10);
    if (isNaN(panierId)) throw new Error();
    const [produit] = await findAllProductsInCart(panierId);
    res.send(produit);
  } catch (e) {
    res.sendStatus(500);
    console.log(e);
  }
};

const createOneOrder = async (req, res) => {
  try {
    const panier = await addOneProductToCart(req.body);
    res.status(201).send(panier);
  } catch (e) {
    res.sendStatus(500);
    console.log(e);
  }
};

const updateQuantityOrder = async (req, res) => {
  try {
    const cart = {
      cartId: parseInt(req.params.id, 10),
      productId: parseInt(req.body.productId, 10),
      quantity: parseInt(req.body.quantity, 10),
    };
    const panier = await addQuantity(cart);
    res.status(201).send(panier);
    console.log(panier);
  } catch (e) {
    res.sendStatus(500);
    console.log(e);
  }
};

module.exports = { getOneOrder, createOneOrder, updateQuantityOrder };
