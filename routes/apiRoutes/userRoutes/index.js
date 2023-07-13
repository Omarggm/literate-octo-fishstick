const { createUser, getAllUsers, getUserById, updateUser, deleteUser } = require('../../../controllers/userController');
const router = require('express').Router();

router.route('/')
.post(createUser)
.get(getAllUsers);

router.route('/:id')
.get(getUserById)
.post(updateUser)
.delete(deleteUser);


module.exports = router;