/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */

const express = require('express');

const logger = require('morgan');
const contactsRouter = require('./routes/contactsRoutes');
const usersRouter = require('./routes/usersRoutes.js');
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');

require('dotenv').config();

connectDb();
const PORT = process.env.PORT || 5001;

const app = express();

app.use(express.json());
app.use(logger('dev'));

app.use('/api/contacts', contactsRouter);
app.use('/api/users', usersRouter);

// app.get('/api/contacts', (req, res) => {

// 	res.status(201);
// 	res.json({ message: 'Message' });
// });
app.use(errorHandler);
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
