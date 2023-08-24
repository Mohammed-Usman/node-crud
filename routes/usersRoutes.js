/* eslint-disable comma-dangle */

const express = require('express');
const {
	userRegister,
	loginUser,
	currentUser,
	deleteUser
} = require('../controllers/userController');

const router = express.Router();

router.post('/register', userRegister);

router.post('/login', loginUser);

router.post('/current', currentUser);
router.delete('/:id', deleteUser);

module.exports = router;
