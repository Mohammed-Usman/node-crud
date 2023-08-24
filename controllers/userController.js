/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */

const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// require('dotenv').config();
// @desc Register a user
// @ route POST /api/users/register
// @access public
module.exports.userRegister = asyncHandler(async (req, res) => {
	const { username, email, password } = req.body;

	if (!username || !email || !password) {
		res.status(400);
		throw new Error('All fields are mendatory');
	}

	const userAvailable = await User.findOne({ email });
	if (userAvailable) {
		res.status(409);
		throw new Error('User already Registered');
	}

	const hashedPassword = await bcrypt.hash(password, 10);

	const user = await User.create({
		username,
		email,
		password: hashedPassword
	});

	res.status(201).json({ username: username, email: email });
});

// @desc Login a user
// @ route POST /api/users/login
// @access public
module.exports.loginUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	if (!email || !password) {
		res.status(400);
		throw new Error('All fields are mendatory');
	}

	const user = await User.findOne({ email });

	if (user && (await bcrypt.compare(password, user.password))) {
		const accessToken = jwt.sign(
			{
				user: {
					username: user.username,
					email: user.email,
					id: user.id
				}
			},
			process.env.ACCESS_TOKEN_SECRET,
			{ expiresIn: '1m' }
		);
		res.status(200).json({ accessToken });
	} else {
		res.status(401);
		throw new Error('Invalid credentials');
	}

	//compare password with hash
});

// @desc Current user
// @ route POST /api/users/current
// @access private
module.exports.currentUser = asyncHandler(async (req, res) => {
	res.json({ message: 'Current User' });
});

// @desc Delete user
// @ route POST /api/users/:id
// @access private
module.exports.deleteUser = asyncHandler(async (req, res) => {
	const user = await User.findById(req.params.id);
	if (!user) {
		res.status(404);
		throw new Error('User not registered');
	}
	await User.findByIdAndDelete(req.params.id);
	res.status(201).send({ username: user.username, email: user.email });
});
