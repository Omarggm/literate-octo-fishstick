const { createUser, getAllUsers, getUserById } = require('../../../controllers/userController');
const router = require('express').Router();

router.route('/')
.post(createUser)
.get(getAllUsers);

router.route('/:id')
.get(getUserById);


module.exports = router;