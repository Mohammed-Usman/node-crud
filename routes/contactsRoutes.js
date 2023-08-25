/* eslint-disable comma-dangle */
const express = require('express');
const validateToken = require('../middleware/validateTokenHandler');

const router = express.Router();

const {
	getContacts,
	createContact,
	getContact,
	updateContact,
	deleteContact
} = require('../controllers/contactController');

router.use(validateToken);

router.get('/', getContacts);

router.post('/', createContact);

router.get('/:id', getContact);

router.put('/:id', updateContact);

router.delete('/:id', deleteContact);

module.exports = router;
