const { findAllProducts, findOneProduct } = require('../models/produit.model');

const getAll = async (req, res) => {
  try {
    const produits = await findAllProducts();
    res.send(produits);
  } catch (e) {
    res.sendStatus(500);
    console.log(e);
  }
};

const getOne = async (req, res) => {
  try {
    const produitId = parseInt(req.params.id, 10);

    if (isNaN(produitId)) throw new Error();
    const [produit] = await findOneProduct(produitId);
    res.send(produit);
  } catch (e) {
    res.sendStatus(500);
    console.log(e);
  }
};

module.exports = { getAll, getOne };
