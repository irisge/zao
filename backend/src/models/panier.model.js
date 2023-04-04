const db = require('./db');

const findOnePanier = async (id) => {
  try {
    const [panier] = await db.query('SELECT * FROM `cart` WHERE id = ?', [id]);
    return panier;
  } catch (e) {
    console.log(e);
  }
};

const addOnePanier = async (panier) => {
  try {
    const { userId } = panier;
    console.log(panier);
    const [cart] = await db.query('INSERT INTO `cart` (user_id) VALUES(?)', [
      userId,
    ]);
    return cart;
  } catch (e) {
    console.log(e);
  }
};

module.exports = { findOnePanier, addOnePanier };
