const { User } = require("../model");

const createUser = async (req, res) => {
  const { username, email } = req.body;

  try {
    const newUser = await User.create({ username, email });
    res.json(newUser);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = { createUser };