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

const getThoughtById = async (req, res) => {
  try{
    const thought = await Thought.findById(req.params.id);
    if(!thought){
      res.status(404).json({message: "No thought with this id!"});
      return;
    }
    res.json(thought);
  }catch (error){
    console.log(error);
    res.status(500).json(error);
  }
};

const updateThought = async (req, res) => {
  try{
    const thought = await Thought.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      });
      if(!thought){
        res.status(404).json({message: "No thought with this id!"});
        return;
      }
      res.json(thought);
  }catch (error){
    console.log(error);
    res.status(500).json(error);
  }
};

const deleteThought = async (req, res) => {
  try{
    const thought = await Thought.findByIdAndDelete(req.params.id);
    if(!thought){
      res.status(404).json({message: "No thought with this id!"});
      return;
    }
    res.json({message: "Thought deleted!"});
  }catch (error){
    console.log(error);
    res.status(500).json(error);
  }
};


module.exports = { createThought, getAllThoughts, getThoughtById, updateThought, deleteThought };
