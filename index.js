const express = require('express');
const { config } = require('dotenv');

config();

const PORT = process.env.PORT || 3001;

const app = express();

const loggerMiddleware = (req, res, next) => {
	console.log(`${new Date()} --- request [${req.method}] [${req.url}]`);
	next();
};

app.use(loggerMiddleware);

app.get('/', (req, res) => {
	res.json({ message: 'Hello World' });
});

app.get('/users', (req, res) => {
	res.json({ message: 'get all users ' });
});

app.get('/users/:id', (req, res) => {
	res.json({ message: `Get user with id ${req.params.id}` });
});

app.post('/users', (req, res) => {
	res.json({ message: 'Create a new user' });
});

app.put('/users/:id', (req, res) => {
	res.json({ message: `Update user with id ${req.params.id}` });
});

app.delete('/users/:id', (req, res) => {
	res.json({ message: `Delete user with id ${req.params.id}` });
});

app.listen(PORT, () => {
	console.log(`Example App listining on port ${PORT}`);
});
