/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */

const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');

// @desc get all contacts
// @ route GET /api/contacts
// @access public
module.exports.getContacts = asyncHandler(async (req, res) => {
	const contacts = await Contact.find();
	res.json(contacts);
});

// @desc Create new contact
// @ route PUT /api/contacts
// @access public
module.exports.createContact = asyncHandler(async (req, res) => {
	console.log(req.body);

	const { name, email, phone } = req.body;

	if (!name || !email || !phone) {
		res.status(400);
		throw new Error('All fields are mendatory');
	}

	const contact = await Contact.create({
		name,
		email,
		phone
	});

	res.status(201);
	res.json(contact);
});

// @desc get contact with id
// @ route GET /api/contacts
// @access public
module.exports.getContact = asyncHandler(async (req, res) => {
	const contact = await Contact.findById(req.params.id);
	if (!contact) {
		res.status(404);
		throw new Error('Contact not found');
	}

	res.json(contact);
});

// @desc update contact with id
// @ route GET /api/contacts
// @access public
module.exports.updateContact = asyncHandler(async (req, res) => {
	const contact = await Contact.findById(req.params.id);
	if (!contact) {
		res.status(404);
		throw new Error('Contact not found');
	}
	const updatedContact = await Contact.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true }
	);
	res.status(201).send(updatedContact);
});

// @desc delete contact with id
// @ route GET /api/contacts
// @access public
module.exports.deleteContact = asyncHandler(async (req, res) => {
	const contact = await Contact.findById(req.params.id);
	if (!contact) {
		res.status(404);
		throw new Error('Contact not found');
	}
	await Contact.findByIdAndDelete(req.params.id);
	res.status(201).send(contact);
});
