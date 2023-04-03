const {
  findAllUsers,
  findOneUser,
  addOneUser,
} = require('../models/user.model');

const { validateUser } = require('../validators/userValidator');

const { hashPassword } = require('../helpers/argon.helper');

const getAll = async (req, res) => {
  try {
    const users = await findAllUsers();
    res.send(users);
  } catch (e) {
    res.sendStatus(500);
    console.log(e);
  }
};

const getOne = async (req, res) => {
  try {
    const userId = parseInt(req.params.id, 10);

    if (isNaN(userId)) throw new Error();

    const user = await findOneUser(userId);
    res.send(user);
  } catch (e) {
    res.sendStatus(500);
    console.log(e);
  }
};

const createOne = async (req, res) => {
  try {
    const errors = validateUser(req.body);

    if (errors) throw res.status(401).send(errors);

    const hashedPassword = await hashPassword(req.body.password);

    const user = await addOneUser({ ...req.body, password: hashedPassword });
    res.status(201).send(user);
  } catch (e) {
    res.sendStatus(500);
    console.log(e);
  }
};

module.exports = { getAll, getOne, createOne };
