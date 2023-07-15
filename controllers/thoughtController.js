const { Thought, User } = require("../model");

const createThought = async (req, res) => {
  const { username, thoughtText, userId } = req.body;
  try {
    const newThought = await Thought.create({ username, thoughtText });
    await User.findByIdAndUpdate(
      userId,
      { $addToSet: { thoughts: newThought._id } },
      { new: true, runValidators: true }
    );
    res.json(newThought);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const getAllThoughts = async (req, res) => {
  try {
    const allThoughts = await Thought.find({});
    res.json(allThoughts);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = { createThought, getAllThoughts };
