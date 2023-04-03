const db = require('./db');

const findAllProducts = async () => {
  try {
    const [produits] = await db.query('select * from `produit`');
    return produits;
  } catch (e) {
    console.log(e);
  }
};

module.exports = { findAllProducts };
