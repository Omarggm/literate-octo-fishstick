const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../../controllers/userController");
const router = require("express").Router();

router.route("/")
.post(createUser)
.get(getAllUsers);

router.route("/:userId/friends/:friendId")
.post(addFriend)
.delete(removeFriend);

router.route("/:id")
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

module.exports = router;
