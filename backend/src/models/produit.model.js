const db = require('./db');

const findAllProducts = async () => {
  try {
    const [produits] = await db.query('SELECT * FROM `product`');
    return produits;
  } catch (e) {
    console.log(e);
  }
};

const findOneProduct = async (id) => {
  try {
    const [produit] = await db.query('SELECT * FROM `product` WHERE id = ?', [
      id,
    ]);
    return produit;
  } catch (e) {
    console.log(e);
  }
};

module.exports = { findAllProducts, findOneProduct };
