const { createUser, getAllUsers, getUserById, updateUser, deleteUser, addFriend } = require('../../../controllers/userController');
const router = require('express').Router();

router.route('/')
.post(createUser)
.get(getAllUsers);

router.route('/:id')
.get(getUserById)
.post(updateUser)
.delete(deleteUser);

router.route('/userId/friends/:friendId')
.post(addFriend);


module.exports = router;