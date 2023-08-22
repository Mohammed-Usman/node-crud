/* eslint-disable comma-dangle */
const express = require('express');

const router = express.Router();

const {
	getContacts,
	createContact,
	updateContact,
	deleteContact
} = require('../controllers/contactController');

router.get('/', getContacts);

router.post('/', createContact);

router.get('/:id', updateContact);

router.put('/:id', updateContact);

router.delete('/:id', deleteContact);

module.exports = router;
