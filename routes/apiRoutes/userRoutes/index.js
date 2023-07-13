const { createUser, getAllUsers } = require('../../../controllers/userController');
const router = require('express').Router();

router.post('/', createUser);

router.get('/', getAllUsers)

module.exports = router;