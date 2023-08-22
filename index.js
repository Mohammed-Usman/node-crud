/* eslint-disable no-console */
const express = require('express');
const { config } = require('dotenv');
const logger = require('morgan');

const router = express.Router();

config();

const PORT = process.env.PORT || 3001;

const app = express();

// Built in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application level middleware
const loggerMiddleware = (req, res, next) => {
	// eslint-disable-next-line no-console
	console.log(`${new Date()} --- request [${req.method}] [${req.url}]`);
	next();
};

// Router Level Middleware
const fakeAuth = (req, res, next) => {
	const authStatus = true;
	if (authStatus) {
		// eslint-disable-next-line no-console
		console.log('User Auth Status', authStatus);
		next();
	} else {
		res.status(401);
		throw new Error('Users is not authorized');
	}
};
// Application level middleware
app.use(loggerMiddleware);
// Third party middleware
app.use(logger('combined'));

app.use('/api/users', router);

const getUsers = (req, res) => {
	res.json({ message: 'Get all Users' });
};

const createUser = (req, res) => {
	console.log('THis is the request body from client', req.body);
	res.json({ message: 'Create new User' });
};

// Router Level Middleware
router.use(fakeAuth);
router.route('/').get(getUsers).post(createUser);

const errorHandler = (err, req, res, next) => {
	const statusCode = res.statusCode ? res.statusCode : 500;
	res.status(statusCode);

	switch (statusCode) {
		case 401:
			res.json({ title: 'Unathorized', message: err.message });
			break;

		case 404:
			res.json({ title: 'Not Found', message: err.message });
			break;

		case 500:
			res.json({ title: 'Internal Server Error', message: err.message });
			break;

		default:
			break;
	}
};

app.all('*', (req, res) => {
	res.status(404);
	throw new Error('Route Not Found');
});

app.use(errorHandler);

app.listen(PORT, () => {
	// eslint-disable-next-line no-console
	console.log(`Example App listining on port ${PORT}`);
});

// app.get('/', (req, res) => {
// 	res.json({ message: 'Hello World' });
// });

// app.get('/users', (req, res) => {
// 	res.json({ message: 'get all users ' });
// });

// app.get('/users/:id', (req, res) => {
// 	res.json({ message: `Get user with id ${req.params.id}` });
// });

// app.post('/users', (req, res) => {
// 	res.json({ message: 'Create a new user' });
// });

// app.put('/users/:id', (req, res) => {
// 	res.json({ message: `Update user with id ${req.params.id}` });
// });

// app.delete('/users/:id', (req, res) => {
// 	res.json({ message: `Delete user with id ${req.params.id}` });
// });
