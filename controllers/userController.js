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
    if (!user) {
      res.status(404).json({ message: "No user with this id!" });
      return;
    }
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      res.status(404).json({ message: "No user with this id!" });
      return;
    }
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.deleteOne({ _id: req.params.id });
    if (!user) {
      res.status(404).json({ message: "No user with this id!" });
      return;
    }
    res.json({ message: "User and associated thoughts deleted!" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};


const addFriend = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.userId,
      { $addToSet: { friends: req.params.friendId } },
      { new: true, runValidators: true }
    );
    if (!user) {
      res.status(404).json({ message: "No user with this id!" });
      return;
    }
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const removeFriend = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.userId,
      { $pull: { friends: req.params.friendId } },
      { new: true, runValidators: true }
    );
    if (!user) {
      res.status(404).json({ message: "No user with this id!" });
      return;
    }
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
};
