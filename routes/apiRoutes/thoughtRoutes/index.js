const { createThought, getAllThoughts } = require("../../../controllers/thoughtController");
const router = require("express").Router();

router.route("/")
.post(createThought)
.get(getAllThoughts);

module.exports = router;