var http = require('http');
var url = require('url');
var basen = require('./base-n.js');

var server = http.createServer(function(req, res) {
	var parsedUrl = url.parse(req.url, true, true);
	var sourceChar = parsedUrl.query.sourceChar;
	var targetChar = parsedUrl.query.targetChar;
	var sourceNum = parsedUrl.query.sourceNum;
	var result;

	switch (sourceChar) {
		case "bin": sourceChar = "01"; break;
		case "oct": sourceChar = "01234567"; break;
		case "dec": sourceChar = "0123456789"; break;
		case "hex": sourceChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"; break;
		default: console.log("no value");
	}

	switch (targetChar) {
		case "bin": sourceChar = "01"; break;
		case "oct": sourceChar = "01234567"; break;
		case "dec": sourceChar = "0123456789"; break;
		case "hex": sourceChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"; break;
		default: console.log("no value");
	}


	if (sourceChar !== undefined && targetChar !== undefined && sourceNum !== undefined && sourceChar.length !== 0 && targetChar.length !== 0 && sourceNum.length !== 0) {
		try {
			result = basen.baseToBase(sourceChar,targetChar, sourceNum);
			console.log("result", result);
		}
		catch (result) {
			console.log('It seems something went wrong! Please check all your characters.', result);
		}
	}
	if (result !== undefined && result.length !== 0) {
		res.write(result + "");
		res.end();
	} else {
		res.statusCode = 400;
		res.end('error');
	}
});
server.listen(8082);
console.log("Server running at http://127.0.0.1:8082/");
