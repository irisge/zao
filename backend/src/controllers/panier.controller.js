const {
  findAll,
  findOnePanier,
  addOnePanier,
  findAllFullCart,
  findFullCart,
} = require('../models/panier.model');

const getAll = async (req, res) => {
  try {
    const produit = await findAll();
    res.send(produit);
  } catch (e) {
    res.sendStatus(500);
    console.log(e);
  }
};
const getOne = async (req, res) => {
  try {
    const panierId = parseInt(req.params.id, 10);
    if (isNaN(panierId)) throw new Error();
    const [produit] = await findOnePanier(panierId);
    res.send(produit);
  } catch (e) {
    res.sendStatus(500);
    console.log(e);
  }
};

const createOne = async (req, res) => {
  try {
    const panier = await addOnePanier(req.body);
    res.status(201).send(panier);
  } catch (e) {
    res.sendStatus(500);
    console.log(e);
  }
};

const getAllFullCarts = async (req, res) => {
  try {
    const produits = await findAllFullCart();
    res.send(produits);
  } catch (e) {
    console.log(e);
  }
};

const getOneFullCart = async (req, res) => {
  try {
    const panierId = parseInt(req.params.id, 10);

    if (isNaN(panierId)) throw new Error();
    const produit = await findFullCart(panierId);
    res.send(produit);
  } catch (e) {
    console.log(e);
  }
};

module.exports = { getAll, getOne, createOne, getAllFullCarts, getOneFullCart };
