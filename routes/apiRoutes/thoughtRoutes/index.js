const { createThought, getAllThoughts, getThoughtById, updateThought, deleteThought } = require("../../../controllers/thoughtController");
const router = require("express").Router();

router.route("/")
.post(createThought)
.get(getAllThoughts);

router.route("/:id")
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought);

module.exports = router;