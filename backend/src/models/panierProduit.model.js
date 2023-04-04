const db = require('./db');

const findAllProductsInCart = async (cartId) => {
  try {
    const [panier] = await db.query(
      'SELECT * FROM `product_cart` WHERE cart_id = ?',
      [cartId]
    );
    return panier;
  } catch (e) {
    console.log(e);
  }
};

const addOneProductToCart = async (panier) => {
  try {
    const { cartId, productId, quantity } = panier;
    const [cart] = await db.query(
      'INSERT INTO `product_cart` (cart_id, product_id, quantity) VALUES(?, ?, ?)',
      [cartId, productId, quantity]
    );
    return cart;
  } catch (e) {
    console.log(e);
  }
};

const addQuantity = async (cart) => {
  try {
    console.log(cart);
    const [panier] = await db.query(
      'UPDATE `product_cart` SET  quantity = quantity + ? WHERE cart_id = ? AND product_id = ?',
      [cart.quantity, cart.cartId, cart.productId]
    );
    return panier;
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  findAllProductsInCart,
  addOneProductToCart,
  addQuantity,
};
