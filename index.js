const express = require('express');
const { config } = require('dotenv');

const router = express.Router();

config();

const PORT = process.env.PORT || 3001;

const app = express();

// Application level middleware
const loggerMiddleware = (req, res, next) => {
	// eslint-disable-next-line no-console
	console.log(`${new Date()} --- request [${req.method}] [${req.url}]`);
	next();
};

// Router Level Middleware
const fakeAuth = (req, res, next) => {
	const authStatus = false;
	if (authStatus) {
		// eslint-disable-next-line no-console
		console.log('User Auth Status', authStatus);
		next();
	} else {
		res.status(401);
		throw new Error('Users is not authorized');
	}
};

app.use(loggerMiddleware);
app.use('/api/users', router);

const getUsers = (req, res) => {
	res.json({ message: 'Get all Users' });
};

const createUser = (req, res) => {
	res.json({ message: 'Create new User' });
};

router.use(fakeAuth);
router.route('/').get(getUsers).post(createUser);

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
