const { constants } = require('../constants');

module.exports = (err, req, res, next) => {
	const statusCode = res.statusCode ? res.statusCode : 500;
	res.status(statusCode);

	switch (statusCode) {
		case constants.VALIDATION:
			res.json({
				title: 'Validation Failed',
				message: err.message,
				stackTrace: err.stackTrace
			});
			break;
		case constants.UNAUTHORIZED:
			res.json({
				title: 'Unathorized',
				message: err.message,
				stackTrace: err.stackTrace
			});
			break;

		case constants.NOT_FOUND:
			res.json({
				title: 'Not Found',
				message: err.message,
				stackTrace: err.stackTrace
			});
			break;

		case constants.FORBIDDEN:
			res.json({
				title: 'Forbidden',
				message: err.message,
				stackTrace: err.stackTrace
			});
			break;
		case constants.SERVER_ERROR:
			res.json({
				title: 'Server Error',
				message: err.message,
				stackTrace: err.stackTrace
			});
			break;
		case constants.CONFLICT:
			res.json({
				title: 'Record Error',
				message: err.message,
				stackTrace: err.stackTrace
			});
			break;
		default:
			console.log('No Error');
			break;
	}
};

// module.exports = (err, req, res, next) => {};
