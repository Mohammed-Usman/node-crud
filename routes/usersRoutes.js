/* eslint-disable comma-dangle */

const express = require('express');
const validateToken = require('../middleware/validateTokenHandler');
const {
	userRegister,
	loginUser,
	currentUser,
	deleteUser
} = require('../controllers/userController');

const router = express.Router();

router.post('/register', userRegister);

router.post('/login', loginUser);

router.post('/current', validateToken, currentUser);
router.delete('/:id', deleteUser);

module.exports = router;
