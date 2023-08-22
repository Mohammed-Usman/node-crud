// @desc get all contacts
// @ route GET /api/contacts
// @access public
module.exports.getContacts = (req, res) => {
	res.json({ message: 'Get all contacts' });
};

// @desc Create new contact
// @ route PUT /api/contacts
// @access public
module.exports.createContact = (req, res) => {
	res.status(201);
	res.json({ message: 'Create contatcs' });
};

// @desc get contact with id
// @ route GET /api/contacts
// @access public
module.exports.getContact = (req, res) => {
	res.json({ message: `Get all contact with id ${req.params.id}` });
};

// @desc update contact with id
// @ route GET /api/contacts
// @access public
module.exports.updateContact = (req, res) => {
	res.json({ message: `Update contact for id ${req.params.id}` });
};

// @desc delete contact with id
// @ route GET /api/contacts
// @access public
module.exports.deleteContact = (req, res) => {
	res.json({ message: `Delete contact for id ${req.params.id}` });
};
