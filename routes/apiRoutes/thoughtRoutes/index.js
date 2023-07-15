const { createThought, getAllThoughts, getThoughtById, updateThought } = require("../../../controllers/thoughtController");
const router = require("express").Router();

router.route("/")
.post(createThought)
.get(getAllThoughts);

router.route("/:id")
.get(getThoughtById)
.put(updateThought);

module.exports = router;