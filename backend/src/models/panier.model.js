const db = require('./db');

const findAll = async () => {
  try {
    const [panier] = await db.query('SELECT * FROM `cart` ');

    return panier;
  } catch (e) {
    console.log(e);
  }
};

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
    const [cart] = await db.query('INSERT INTO `cart` (user_id) VALUES(?)', [
      userId,
    ]);
    return cart;
  } catch (e) {
    console.log(e);
  }
};

const findAllFullCart = async () => {
  try {
    const [cart] = await db.query(
      'SELECT * FROM `product_cart` JOIN `cart` ON cart.id = product_cart.cart_id JOIN `product` ON product.id = product_cart.product_id'
    );
    return cart;
  } catch (e) {
    console.log(e);
  }
};

const findFullCart = async (cartId) => {
  try {
    const [cart] = await db.query(
      'SELECT product_cart.product_id, product_cart.cart_id, product_cart.quantity ,product.title, product.description, product.price, product.picture, SUM(product_cart.quantity * product.price) as total_price FROM `product_cart` JOIN `cart` ON cart.id = product_cart.cart_id JOIN `product` ON product.id = product_cart.product_id WHERE cart.id = 1 GROUP BY product_cart.product_id, product_cart.cart_id, product_cart.quantity, product.title, product.description, product.price, product.picture',
      [cartId]
    );
    return cart;
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  findAll,
  findOnePanier,
  addOnePanier,
  findAllFullCart,
  findFullCart,
};
