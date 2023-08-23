/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const mongoose = require('mongoose');
// require('dotenv').config();

module.exports = async () => {
	try {
		const connect = await mongoose.connect(process.env.CONNECTION_STRING);
		console.log(
			'Database connected: ',
			connect.connection.host,
			connect.connection.name
		);
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
};
