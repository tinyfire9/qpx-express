'use strict';

var _https = require('https');

var _https2 = _interopRequireDefault(_https);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class QPX {
	constructor(key) {
		this.key = key;
	}
	getInfo(body, callback) {
		let strBody = JSON.stringify(body);
		let data = '';
		const options = {
			host: 'www.googleapis.com',
			method: 'POST',
			path: '/qpxExpress/v1/trips/search?key=' + this.key,
			headers: { 'Content-Type': 'application/json' },
			'content-length': strBody.length
		};

		let request = _https2.default.request(options, response => {
			response.setEncoding('utf8');
			response.on('data', chunk => {
				data += chunk;
			});
			response.on('end', () => {
				callback(null, JSON.parse(data));
			});
		});

		request.on('error', error => {
			console.log('error on : ', Error(error));
			callback(error, {});
		});

		request.write(strBody);
		request.end();
	}
};

module.exports = QPX;