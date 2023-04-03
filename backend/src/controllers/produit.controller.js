const { findAll } = require('../models/produit.model');

const getAll = async (req, res) => {
  try {
    const produits = await findAll();
    res.send(produits);
  } catch (e) {
    res.sendStatus(500);
  }
};

module.exports = { getAll };
