const { createThought, getAllThoughts, getThoughtById, updateThought, deleteThought, addReaction, deleteReaction } = require("../../../controllers/thoughtController");
const router = require("express").Router();

router.route("/")
.post(createThought)
.get(getAllThoughts);

router.delete("/:thoughtId/reactions/:reactionId", deleteReaction);

router.route("/:thoughtId/reactions")
.post(addReaction);

router.route("/:id")
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought);

module.exports = router;