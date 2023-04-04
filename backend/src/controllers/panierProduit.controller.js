const {
  findOneProductInCart,
  addOneProductToCart,
} = require('../models/panierProduit.model');

const getOneOrder = async (req, res) => {
  try {
    const panierId = parseInt(req.params.id, 10);

    if (isNaN(panierId)) throw new Error();
    const [produit] = await findOneProductInCart(panierId);
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

module.exports = { getOneOrder, createOneOrder };
