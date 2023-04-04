const db = require('./db');

const findOneProductInCart = async (id) => {
  try {
    const [panier] = await db.query(
      'SELECT * FROM `product_cart` WHERE id = ?',
      [id]
    );
    return panier;
  } catch (e) {
    console.log(e);
  }
};

const addOneProductToCart = async (panier) => {
  try {
    const { cartId, productId, quantity } = panier;
    console.log(panier);
    const [cart] = await db.query(
      'INSERT INTO `product_cart` (product_id, cart_id, quantity) VALUES(?, ?, ?)',
      [cartId, productId, quantity]
    );
    return cart;
  } catch (e) {
    console.log(e);
  }
};

module.exports = { findOneProductInCart, addOneProductToCart };
