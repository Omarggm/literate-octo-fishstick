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

const getUserById = async (req, res) => {
try {
  const user = await User.findById(req.params.id);
  if (!user){
    res.status(404).json({ message: "No user with this id!"});
    return;
  }
  res.json(user);
} catch (error) {
  console.log(error);
  res.status(500).json(error);
}
  
}

module.exports = { createUser , getAllUsers, getUserById };