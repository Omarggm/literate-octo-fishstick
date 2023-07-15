const { createThought, getAllThoughts, getThoughtById } = require("../../../controllers/thoughtController");
const router = require("express").Router();

router.route("/")
.post(createThought)
.get(getAllThoughts);

router.route("/:id")
.get(getThoughtById);

module.exports = router;