const db = require('./db');

const findAllUsers = async () => {
  try {
    const [users] = await db.query('SELECT * FROM `user`');
    return users;
  } catch (e) {
    console.log(e);
  }
};

const findOneUser = async () => {
  try {
    const [user] = await db.query('SELECT * FROM `user` WHERE id=?', [id]);
    return user;
  } catch (e) {
    console.log(e);
  }
};

const findByEmail = async (email) => {
  try {
    const [user] = await db.query('SELECT * FROM `user` WHERE email=?', [
      email,
    ]);
    return user;
  } catch (e) {
    console.log(e);
  }
};

const addOneUser = async (user) => {
  try {
    const {
      email,
      password,
      firstname,
      lastname,
      street,
      city,
      zip,
      phone,
      birthdateDay,
      birthdateMonth,
      birthdateYear,
    } = user;
    const [result] = await db.query(
      'INSERT INTO `user` (email, password, firstname, lastname, street, city, zip, phone, birthdate_day, birthdate_month, birthdate_year) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [
        email,
        password,
        firstname,
        lastname,
        street,
        city,
        zip,
        phone,
        birthdateDay,
        birthdateMonth,
        birthdateYear,
      ]
    );

    return { id: result.insertId };
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  findAllUsers,
  findOneUser,
  addOneUser,
  findByEmail,
};
