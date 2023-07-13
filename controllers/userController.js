const { User } = require("../model");

const createUser = async (req, res) => {
  const { username, email } = req.body;

  try {
    const newUser = await User.create({ username, email });
    res.json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const getAllUsers = async (req, res) => {
try {
  const users = await User.find({});
  res.json(users);
} catch (error) {
  console.log(error);
  res.status(500).json(error);
}
};

module.exports = { createUser , getAllUsers };