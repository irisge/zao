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

const findFullCart = async (id) => {
  try {
    const [cart] = await db.query(
      'SELECT * FROM `cart` JOIN `product_cart` ON cart.id = product_cart.cart_id JOIN `product` ON product.id = product_cart.product_id WHERE user_id = ?',
      [id]
    );
    return cart;
  } catch (e) {
    console.log(e);
  }
};

module.exports = { findOnePanier, addOnePanier, findFullCart };
