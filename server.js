/* eslint-disable no-console */

const express = require('express');
const { config } = require('dotenv');
// eslint-disable-next-line import/no-extraneous-dependencies
const logger = require('morgan');
const contactsRouter = require('./routes/contactsRoutes');

config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(logger('dev'));
app.use('/api/contacts', contactsRouter);

// app.get('/api/contacts', (req, res) => {

// 	res.status(201);
// 	res.json({ message: 'Message' });
// });

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
